# Consensus in the Tangle

The Tangle white paper suggests a distributed approach to consensus. Which gives a probabilistic answer to whether the node operators of the network determine a transaction's confirmation. This is similar to Bitcoin and other distributed ledgers, where at any given time a transaction has a _confirmation confidence_, which is an indication of its acceptance level.

## Confirmation confidence

Confirmation of a transactions in permission-less, distributed system is a not a boolean value. Instead is its a percentage likelyhood that the transaction will remain either confirmed or unconfirmed. In distributed systems, there is the concept of Finality: a specific threshold at which the reversal of a transaction would require an unreasonable amount of resources. 

Once this level of confindence is reached, whether measured in time elapsed, blocks produced or any number of other metrics, the transaction can be seen as confirmed. Finality is a shorthand used so a merchant accepting tokens for goods or services can be assured that there is a very small likely hood that the tokens they are accepting are double-spent.

## Determining Confidence

In order to know the confirmation confidence for a particular transaction in the Tangle, we perform the tip selection algorithm 100 times. We then measure how many of the 100 selected tips reference the transaction in question. If it is referenced by 80 tips of 100, for example, we say it is 80% confirmed. 

The idea is the following: if it is very likely for a chosen tip to reference a transaction, then new transactions coming in will probably approve it. This effect will only increase with time, since the weighted walk causes large branches to grow and small branches to get abandoned.

The number 100 is arbitrary; if you need more accuracy, you may run the walk more times. 

> Note that different nodes might see different confidence rates for the same transaction: this is because their view of the tangle is not identical, and their walks will reach different tips.



