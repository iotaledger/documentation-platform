# IOTA's Tip Selection Algorithm

## Introduction

The following document describes what happens behind the scenes when a user requests the [getTransactionsToApprove API](https://iota.readme.io/v1.3.0/reference). This API is invoked when a user wants to send a transaction to the Tangle, to do so he needs to request two suitable transactions to approve. The algorithm walks a subgraph of the Tangle and, according to some criteria, returns two tip transactions, that will be pointed to by the `trunkTransaction` and `branchTransaction` fields of the newly issued transaction, for further details on transaction structure please refer to [The Anatomy of a Transaction](https://docs.iota.org/introduction/iota-token/anatomy-of-a-transaction).

The process of the tip selection algorithm can be separated into four stages, that are detailed in the following sections:

1. **Preparation**
2. **Rating Calculation**
3. **Random Walk**
4. **Conclusion**

------

## 1. Preparation

The algorithm's goal is to return two non-conflicting tips as a successful result of the API call.

The algorithm has to walk a portion of the Tangle (subgraph) twice, stepping according to a rating calculation, selecting an `entryPoint` for each walk.

#### 1.1 Subgraph

Calculating weights for transactions is expensive in terms of both RAM and CPU. To avoid recomputing the weights due to new inbound transactions, we work with a fixed latest portion of the Tangle for the entire duration of the API call. We take the latest solid milestone issued by the coordinator, and we recur a user-specified `depth` number of milestones in the past. The Tangle starting from this old milestone is called _subgraph_.

The maximum allowed `depth` number of milestones to recur back in the past is still subject to debate:  it should be sufficiently small to allow the algorithm to terminate in a reasonable amount of time, while still providing good mixing to the obtained subgraph. Currently, a

`maxDepth` number has been heuristically defined and has a configuration default of 15. If the user calls the API with a `depth` bigger than the `maxDepth` value the call will return immediately with a `"Invalid depth input"` message and 500 error code.

> Mixing: going far enough in the past so that it is almost like starting from the Genesis transaction. This property is essential since we do not want to leave too many unconfirmed tips behind, and merge as many Tangle branches as possible when issuing a new milestone.

#### 1.2 Select entrypoints

The random walks for both the `trunk` and the `branch` returned tips will start from the same `latestSolidMilestone - depth` milestone transaction.

If the user specifies a `reference` argument to the API call, the `branch` walk will start from the supplied transaction instead, assuming it is included in the considered subgraph. In other words, the `reference` transaction cannot fall beyond the `latestSolidMilestone - depth` milestone. In case the user specifies a `reference` transaction older than `depth`, the API call fails after the rating calculation with a `"reference transaction is too old"` error message.

## 2. Rating calculation

In this phase the algorithm computes the rating of every transaction in the subgraph. These ratings will be subsequently transformed into weights during the random walk phase, these will be used to bias the walker's steps.

The calculation will be performed only once, and used for both the `trunk` and the `branch` walks.

#### 2.1 Interface

In order to be able to have different rating algorithms at our disposal, we created a generic interface to which every rating calculator should adhere.

```java
Map<TxId -> Integer> calculate(TxId entryPoint)
```

Every rating calculator, being invoked with an `entryPoint` transaction, should return a mapping of transaction IDs with their corresponding rating value expressed as integers.

#### 2.2 Cumulative Weight Implementation

The Cumulative Weight is a specific rating algorithm that gives each transaction a rating equivalent to the number of transactions which reference it. These transactions are called _future set_. To perform the calculation, the subgraph is first sorted in _topological order_ using DFS.

> [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting): obtaining a structure for our subgraph such that if transaction A approves transaction B, then B comes before A, leaving the tips of our subgraph as last transactions elements in the structure.

For every transaction included in our sorted subgraph, we create a future set, containing direct and indirect approvers. The rating of each transaction is the size of its future set + 1 (the transaction's own weight).

```java
entryPoint = latestSolidMilestone - depth

entryPointTrunk = entryPoint

entryPointBranch = reference or entryPoint 

ratings = CumulativeWeightCalculator.calculate(entryPointTrunk)

class CumulativeWeightCalculator(RatingCalculator):

    def calculate(startTx):

        rating = dict()

        subgraph = Tangle(startTx)

        topologicalSubgraph = sortTopologically(subgraph)

        for tx in topologicalSubgraph:

            rating[tx] = len(futureSet(tx)) + 1

        return rating

```

#### Optimizations

##### HashPrefix

In order to preserve space while storing transaction's identifiers, we only store a portion of the transaction's hash bytes, truncating it to `PREFIX_LENGTH` length. Currently, this value has been hardcoded to 44 bytes, corresponding to 220 trits.

While preserving a significant amount of space during the execution of the algorithm, this approach poses challenges by increasing the collision probability of the keys used to identify transactions.

##### Future Set Size

In order to cap the memory consumption of the algorithm, we allow to store up to `MAX_FUTURE_SET_SIZE` number of approvers for the transaction we are considering, under the assumption that a higher rating score won't contribute significantly to bias the walker. This value has been heuristically hardcoded to 5000. Please note that this optimization, while capping memory usage during runtime, makes the walk to behave more randomly closer the beginning of the considered subgraph since the future sets of those transactions are more likely to have been capped to `MAX_FUTURE_SET_SIZE`. The desired behavior is instead the contrary: we would like the beginning of the walk to be strongly biased towards the main branch while being more random closer to the tips, spreading the chance for any of them to get selected. 

## 3. Random Walks

Once the transactions' ratings are computed, we can start our two walks to return the `trunk` and the `branch` tip respectively. 

#### 3.1 Interface

In order to be able to have different walking algorithms at our disposal, we created a generic interface to which every walker implementation should adhere.

```java
TxId walk(TxId entryPoint, Map<TxId -> Integer> ratings, WalkValidator validator)
```

Every walker, being invoked with an `entryPoint` transaction, a `rating` mapping structure, and a `validator` object used to validate walker's steps, should return the selected tip transaction.

#### 3.2 WalkerAlpha Implementation

The WalkerAlpha is a random walker algorithm that traverses a subgraph towards the tips, whose entropy can be tuned by adjusting an `alpha` factor. Namely, an `alpha = 0` factor makes the walk purely random, transactions' rating does not bias the walk in any way. Conversely, with an `alpha = ∞`, the highest-rated transaction will be always chosen as the next step. To summarize, the higher the `alpha` factor is, the more likely it is for a high-rated transaction to be chosen as a next step in the walk. Finding an ideal value for the `alpha` factor is still a topic of research, for more information please refer to [this](https://blog.iota.org/confirmation-rates-in-the-tangle-186ef02878bb) blog post.

Starting from the supplied `entryPoint`, the algorithm walks towards the tips by selecting a single approver at each step, the choice of the path to take is biased by the supplied rating structure. At each step, the consistency of the ledger state is checked against the validator object. Each step should traverse a bundle until its tail, otherwise consistency could not be validated. Upon reaching an inconsistent state, the walker invalidates the step it just took, it backtracks to the previous tail and runs the approver selection again.

The probability to walk towards a specific approver gets calculated with the following formula, where `H` is the `weight` of a specific transaction.

![Walk forumla]()

Ratings are normalized and transformed into `weights` with the help of the `alpha` factor. Finally, a `random` value between 0 and the sum of all the `weights` gets generated, and it gets subtracted by the approvers' weights iteratively until reaching the value of 0. The approver that turned the `random` value into 0 gets selected as the next step in the walk.

```python
class WalkerAlpha(Walker):

    def walk(entryPoint, ratings, validator):

        step = entryPoint

        prevStep = None

        while step:

            approvers = getApprovers(step)

            prevStep = step

            step = nextStep(ratings, approvers, validator)

        # When there are no more steps it means we reached a tip

        return prevStep

        

    def nextStep(ratings, approvers, validator):

        approversWithRating = approvers.filter(a => ratings.contains(a))

        # There is no valid approver, we are on a tip

        if len(approversWithRating) == 0:

            return None

        approversRatings = approverswithRating.map(a => ratings.get(a))

        weights = ratingsToWeights(approversRatings)

        approver = weightedChoice(approversWithRating, weights)

        if approver is not None:

            tail = validator.findTail(approver)

            # If the selected approver is invalid we try again without him

            if validator.isInvalid(tail):

                approvers = approvers.remove(approver)

                return nextStep(ratings, approvers, validator)

            return tail

        return None

    

    def weightedChoice(approvers, weights):

        randomNumber = random(0, sum(weights))

        for approver in approvers:

            randomNumber = randomNumber - weights.get(approver)

            if randomNumber <= 0:

                return approver

    def ratingsToWeights(ratings):

        highestRating = max(ratings)

        normalizedRatings = ratings.map(r => r - highestRating)

        weights = normalizedRatings.map(r => math.exp(r * alpha))

        return weights

```

#### 3.3 Validator conditions

For the sake of simplicity, the above pseudo-code does not dig into the details of the transaction's validation, we are going to take a look at these here.

A transaction is considered invalid if any of the following occurs:

1. It is not solid and we cannot reconstruct its state, since a portion of the Tangle this transaction references is unknown.

1. It references a transaction too far in the past, namely beyond `latestSolidMilestone - maxDepth`. Please refer to section 1.1 for further explanation.

1. The ledger state computed from it is not consistent, such as trying to spend missing funds or double-spending.

1. The validator maintains a list of transactions that have been checked for validity. Every time a new transaction gets validated, it is also checked against these.

```python
class WalkValidator:

    previousTransactions = []

    def isInvalid(transaction):

        previousTransactions.append(transaction)

        if notSolid(transaction):

            return True

        if belowMaxDepth(transaction):

            return True 

        if inconsistent(transaction):

            return True

        if incosistentWithPreviousTransactions(transaction):

            return True

        return False

```

Please note that the same validator object gets passed for both walks, resulting in two tips that are consistent with each other.

#### 3.4 Bundles and consistency

Transactions in IOTA are issued in bundles: a chain of numbered transactions which consistency to the Tangle has to be considered atomically. When we walk towards an approver, we may also walk into the middle of a bundle, so we have to make sure we traverse it until its tail transaction, which finalizes the state change for the whole bundle, so we can validate it. Transactions participating in a bundle share the same `bundleHash` and have an index, being the closing transaction, the tail, the one with index 0. 

## 4. Conclusion

The two tips returned by the walks are checked for consistency between each other, we don't want to return to the user two transactions which states cannot be conciliated, since the user's transaction will turn out invalid and therefore never selected for approval.