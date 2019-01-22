# What is the Tangle?

**The Tangle is the data structure that's formed by the connections among transactions in the distributed ledger on all IRI nodes.**

One of the validation critera of a transaction is that each one must directly reference two previous transactions (tip transactions). 

This referencing model forms a type of [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG), in which each transaction represents a vertex.

![A directed acyclic graph](../dag.png)

In this diagram, transaction 5 is **directly** referenced by transaction 6. Because transaction 5 directly references transaction 3, transaction 3 is **indirectly** referenced by transaction 6.

Tip transactions are chosen by IRI nodes during a process called tip selection.

Transactions are considered confirmed when they're referenced by a Coordinator-issued milestone transaction.

[Learn more about the Coordinator, tip selection, and the Tangle](root://the-tangle/0.1/introduction/overview.md).

