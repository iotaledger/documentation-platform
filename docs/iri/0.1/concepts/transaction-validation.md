# Transaction validation

The IRI allows only valid transaction to be appended to its [ledger](/iri/concepts/the-distributed-ledger.md). As a result, IRI nodes validate transactions during the following stages:
* On receipt of new transactions
* During the tip selection process

| **Table of contents**                  |        
| :------------------- |
|[Transaction validation on receipt of new transactions](#transaction-validation-on-receipt-of-new-transactions)|
|[Validation during the tip selection process](#validation-during-the-tip-selection-process)|
|[  &raquo; Bundle validator](#bundle-validator)|
|[  &raquo; Ledger validator](#ledger-validator)|
||

## Transaction validation on receipt of new transactions

The IRI receives new transactions from both clients and neighbor nodes.

When the IRI receives a new transaction, the transaction validator checks it for the following:
* The proof of work was done
* The value of any transaction in the bundle doesn’t exceed the total global supply
* The transaction is not older than the last snapshot and not newer than two hours ahead of the node’s current time

## Validation during the tip selection process

When clients asks an IRI node for tip transactions, the IRI performs the [tip selection process](/iri/concepts/tip-selection.md).

The bundles of each transaction that the IRI traverses during the tip selection process are checked by the bundle validator and the ledger validator.

### Bundle validator

The bundle validator makes sure that all transactions in a bundle are valid.

During a [weighted random walk](/iri/concepts/tip-selection.md#how-it-works), the bundle validator checks the bundle of transactions for the following:
* The value of any transaction in the bundle doesn’t exceed the total global supply
* The total value of all transactions in the bundle is 0 (inputs and outputs are balanced)
* Any signatures are valid in value transactions

### Ledger validator

The ledger validator makes sure that double-spends are never confirmed

During a [weighted random walk](/iri/concepts/tip-selection.md#how-it-works), the ledger validator checks that each bundle does not lead to a double spend by checking the values of all addresses in a bundle. If a double-spend is found, the weighted random walk steps back one transaction and finds another route to a tip transaction.
