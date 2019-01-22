# Prune transactions from the ledger

**Over time, the ledger of an IRI node accumulates many valid transactions, which often cause it to become larger than the IRI node's available memory. To stop the ledger from becoming too large, you can choose to delete old transactions from the ledger at regular intervals.**

By default, IRI nodes delete transactions that are older than around 28 days.

Transactions are deleted only if they were confirmed by a milestone transaction that is older than the result of the following calculation:

current milestone index - ([`LOCAL_SNAPSHOTS_DEPTH`](../references/iri-configuration-options#local-snapshots-depth) +
[`LOCAL_SNAPSHOTS_PRUNING_DELAY`](../references/iri-configuration-options#local-snapshots-pruning-delay))

## Prerequisites

You must stop the IRI before making changes to the configuration options.

<hr>

1. Make sure that the `LOCAL_SNAPSHOTS_ENABLED` and the `LOCAL_SNAPSHOTS_PRUNING_ENABLED` configuration options are set to `true`
2. Change the value of the `LOCAL_SNAPSHOTS_PRUNING_DELAY` and the `LOCAL_SNAPSHOTS_DEPTH` configuration options

Milestones are sent approximately every minute. Therefore, use the following formula to calculate the number of days that transactions will remain in the ledger:

 * `LOCAL_SNAPSHOTS_PRUNING_DELAY` + `LOCAL_SNAPSHOTS_DEPTH` = total milestone index

 * Total milestone index / 60 = total in minutes
 
 * Total in minutes / 24 = total in days

## Example scenario

Configuration parameters:

* `LOCAL_SNAPSHOTS_PRUNING_DELAY` = 50,000
* `LOCAL_SNAPSHOTS_DEPTH` = 100

Current milestone index:

* 990, 100

In this scenario, the sum of `LOCAL_SNAPSHOTS_PRUNING_DELAY` + `LOCAL_SNAPSHOTS_DEPTH` is 50, 100. Therefore, an IRI node will remove transactions that were confirmed by any milestone before 940, 000 (990, 100 - 50,100). As a result all transactions between milestones 940, 000 and 990, 100 will be kept in the ledger.