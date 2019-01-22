# The Tangle overview

**The Tangle is the data structure that's formed by the connections among transactions in the distributed ledger on all IRI nodes.**

This data stucture is a type of [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG). The Tangle was formally introduced in the whitepaper by Professor Serguei Popov and published in 2015.

Transactions are connected to each other in the Tangle by reference. Each transaction references two previous transactions, which are chosen by IRI nodes during [tip selection](../concepts/tip-selection.md).

References can be direct or indirect. A direct reference is one in which a transaction references another transaction. An indirect reference is one in which a referenced transactions references another transaction.

The more direct or indirect references that a transaction has, the more likely it is to be both chosen during tip selection and [confirmed](../concepts/transaction-confirmation.md). A transaction is considered confirmed when it's referenced by a [Coordinator](../concepts/the-coordinator.md)-issued milestone transaction

## Further Research

The IOTA Foundation has an active research department that focuses on developing the Tangle and its related protocols.

* [Academic Papers](https://www.iota.org/research/academic-papers)
* [Roadmap](https://www.iota.org/research/roadmap)