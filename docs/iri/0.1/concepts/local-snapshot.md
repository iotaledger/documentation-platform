# Local snapshot

A local snapshot is the process in which an IRI node records the [state of its ledger](/iri/concepts/the-distributed-ledger.md) at a given time in [two snapshot files](/iri/references/data-in-the-snapshot-files.md).

An IRI node reads the snapshot files when it first starts running in order to start building its ledger. The data in the snapshot files gives an IRI node instant access to a starting point for requesting transactions from its neighbors.

The benefits of doing a local snapshot are the following:

- If an IRI node restarts for any reason, it can synchronize its ledger with neighbor IRI nodes faster than without doing a local snapshot
- If an IRI node's ledger becomes too large, it can use the snapshot files to delete any old transactions

**Note:** Local snapshots are available only in version 1.6.0 and higher of the IRI.

## Faster synchronization

Without snapshot files, if the IRI were to ever restart, it would have to synchronize its entire ledger from the IRI node's startMilestoneIndex variable. This process involves the IRI requesting every confirmed transaction and milestone since the startMilestoneIndex variable from its neighbor IRI nodes, validating the transactions, and appending them to its ledger.

With snapshot files, an IRI node could synchronize its ledger from the milestones in the snapshot.meta file. This process decreases the time it takes for an IRI node to become synchronized with its neighbor IRI nodes.

## Reduction of the ledger size

An IRI node can also use the snapshot files to delete old transactions from its ledger.

Over time, the [ledger](/iri/concepts/the-distributed-ledger.md) of an IRI node accumulates many valid transactions, which often cause the size of the ledger to become larger than the IRI node's available memory. To stop the ledger from becoming too large, you can choose to create local snapshots at regular intervals. This option is enabled by default in the [`LOCAL_SNAPSHOTS` configuration parameters](/iri/references/iri-configuration-options#local-snapshots-enabled).

Transactions are deleted only if they come before a milestone transaction that is older than the sum of the following calculation:

[`LOCAL_SNAPSHOTS_DEPTH`](/iri/iri-configuration-options#local-snapshots-depth) +
[`LOCAL_SNAPSHOTS_PRUNING_DELAY`](/iri/iri-configuration-options#local-snapshots-pruning-delay)

## How it works

To create a local snapshot, the IRI creates two snapshot files, using a subgraph of its ledger.

### Subgraph

A subgraph is a section of the ledger that contains all transactions between a user-defined milestone transaction and new tip transactions.

For local snapshots, the user-defined milestone transaction is the [`LOCAL_SNAPSHOTS_DEPTH` configuration parameter](/iri/iri-configuration-options#local-snapshots-depth)
