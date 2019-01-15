# Local snapshot

**A local snapshot is the process in which an IRI node records the state of its ledger in snapshot files.**

Local snapshots allow IRI nodes to reduce the time it takes to [synchronize the ledger](concepts/the-ledger.md) on startup.

**Note:** Local snapshots are available only in version 1.6.0 and higher of the IRI.

## Snapshot files

IRI nodes create snapshot files at regular intervals, depending on the values of the [`LOCAL_SNAPSHOTS_INTERVAL_SYNCED`](references/iri-configuration-options.md#local-snapshots-interval-synced) and [`LOCAL_SNAPSHOTS_INTERVAL_UNSYNCED`](references/iri-configuration-options.md#local-snapshots-interval-unsynced) configuration options.

When an IRI node does a local snapshot, it records the current state of its ledger in the following snapshot files:
* **snapshot.meta:** [A list of transaction data that the IRI uses to start synchonizing its ledger with neighbor IRI nodes](references/data-in-the-snapshot-metadata-file.md)
* **snapshot.state:** A list of all addresses that have a balance greater than 0 at the time of the local snapshot.

**Note:** These files are located in the path of the [`LOCAL_SNAPSHOTS_BASE_PATH`](references/iri-configuration-options.md#local-snapshots-base-path) configuration option.

On startup, any IRI node can use the snapshot files to synchronize with their neighbor IRI nodes.

## How local snapshots work

During a snapshot, the IRI node adds data to the [snapshot.meta file](references/data-in-the-snapshot-metadata-file.md) about the [solid entrypoints](references/data-in-the-snapshot-metadata-file.md#solid-entrypoint) and the [seen milestones](references/data-in-the-snapshot-metadata-file.md#seen-milestone).

In the snapshot.state file, the IRI node adds a list of all addresses and their balances.

When the IRI node restarts, it starts by solidifying all transactions that are referenced by the seen milestones. Then, when the IRI reaches a solid entrypoint, it stops solidyfing those transactions.

<dl><dt>solidify</dt><dd>Request transactions from neighbor IRI nodes until all transactions and their referenced transactions are stored in the ledger.</dd></dl>




