# IOTA basics overview

**IOTA introduces new concepts that are essential to learn before you start using an IOTA network.**

Clients transfer [tryte-encoded](../concepts/trinary.md) data and/or IOTA tokens to each other's [addresses](../concepts/addresses-and-signatures.md), which are generated from a seed using a cryptographic algorithm.

The history of transfers is kept in the ledger of [IRI nodes](root://getting-started/0.1/introduction/what-is-an-iri-node.md).

IRI nodes receive packages of transactions called [bundles](../concepts/bundles-and-transactions.md) from clients. These transactions contain data that instructs IRI nodes to transfer data or IOTA tokens.

Each transaction in the bundle is validated before being added to the IRI node's ledger.

The transactions in the ledger are connected to each other through the [`branchTransaction` field and the `trunkTransaction` field](../references/structure-of-a-transaction.md). These connections form a data structure called [the Tangle](root://the-tangle/0.1/introduction/overview.md).

All transactions in the Tangle are immutible.



