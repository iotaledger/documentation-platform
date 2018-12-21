# IOTA node software (IRI)

When computers send data through a network, they must send it according to a set of rules, called a protocol. In an IOTA network, data is sent as transactions to IRI nodes, which are computers that run the IOTA reference implementation (IRI).

The IRI is open-source Java software that defines the IOTA protocol for what a valid transaction is, what a confirmed transaction is, and how IRI nodes should send transactions among each other.

IRI nodes are the core of an IOTA network. They perform the following key functions:

* [Validate transactions](/iri/concepts/transaction-validation.md)
* [Append valid transactions to a ledger](/iri/concepts/the-distributed-ledger.md)
* [Agree on the global state of the distributed ledger](/iri/concepts/the-distributed-ledger.md) with other IRI nodes in the same IOTA network (reach consensus)
* [Allow client computers to connect to the IRI](/iri/how-to-guides/interacting-with-the-iri.md) so that they can interact with the ledger and have their transactions appended it

Without IRI nodes, IOTA networks wouldn't exist. No one would be able to send transactions because there would be no way of recording who sent what to whom.

Here are some benefits of [running your own IRI node](/iri/how-to-guides/running-the-iri.md):
* You have your own direct access to a ledger on an IOTA network instead of having to connect to someone else's IRI node
* You help the IOTA network to become more distributed by adding to the number of ledgers and validating your neighbor IRI node's transactions

## Limitations

The IRI receives transactions and records them in its ledger, it doesn't create or sign transactions. To create or sign transactions, you must use client software such as the Trinity wallet or a client library and send those transactions to an IRI node.
