# The ledger

**IRI nodes keep a record of all valid transactions that they receive by storing them in a ledger, which is an embedded, append-only RocksDB database.**

After validating a transaction, IRI nodes append [data about that transaction](../references/data-in-the-ledger.md) to the ledger.

The ledger is the primary data source for an IRI node. The data in the ledger is a complete history of all the valid transactions that an IRI node has seen.

## Ledger synchronization

When an IRI node first starts running, it starts to synchronize its [ledger](../concepts/the-ledger.md) with its [neighbor IRI nodes](../concepts/neighbor-iri-node.md) by solidifying every transaction that directly or indirectly references an **entrypoint milestone**.

The older the entrypoint milestone, the longer synchronization takes.

A permanode uses the `startMilestoneIndex` variable as its entrypoint milestone. (The `startMilestoneIndex` variable is hard-coded into each version of the IRI.)

A [local snapshot](../concepts/local-snapshot.md) node uses the bootstrap milestone as its entrypoint milestone. Boostrap milestones are newer than the one in the `startMilestoneIndex` variable, allowing local snapshot nodes to sychronize faster than permanodes.

<dl><dt>bootstrap milestone</dt><dd>Milestone from which the IRI node creates the snapshot files.</dd></dl>
