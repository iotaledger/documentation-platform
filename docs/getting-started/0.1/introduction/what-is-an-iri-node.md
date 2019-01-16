# What is an IRI node?

**An IRI node is a computer that's responsible for validating transactions and storing a record of them.**

When a client sends a bundle to an IRI node, it makes sure that the transactions are valid (for example, that the sender owns the IOTA tokens). If the transactions are valid, they're added to the IRI node's ledger.

The transactions in the ledger can't ever be changed because they form [the Tangle](introduction/what-is-the-tangle.md).

All IRI nodes send their valid transactions to each other so that each of them has the same view of the Tangle (transactions in the ledger). When all IRI nodes have the same transactions in their ledgers, they have reached a consensus regarding the trustworthiness of a transaction.

To use any IOTA network, you can interact with an IRI node through the API (application programming interface). Many IOTA applications, such as [Trinity](root://trinity/introduction/overview.md), use the API behind the scenes.

IRI nodes can be run by anyone, including individuals and businesses. While these groups run IRI nodes, they often don't open them to the public because a high volume of API calls can be costly to the owner. Therefore, we suggest that you [run your own IRI node](tutorials/run-your-own-iri-node.md) for direct access to an IOTA network.

If you can't run your own IRI node, you can use public ones in Trinity or use websites such as [IOTA Dance](https://iota.dance) to find a list of public IRI nodes.

[Learn more about IRI nodes](root://iri/0.1/introduction/overview.md).
