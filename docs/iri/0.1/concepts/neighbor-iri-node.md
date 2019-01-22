# Neighbor IRI node

**To synchronize their ledgers with the rest of the network, all IRI nodes must communicate with other IRI nodes, which are called neighbors. Neighbors are IRI nodes that are mutually connected and that communicate directly with each other on the same IOTA network.**

The primary reason that IRI nodes connect to neighbor IRI nodes is to validate each other's transactions. If all clients relied on only one IRI node that wasn't connected to any neighbors, that IRI node could start validating invalid transactions.

Therefore, IRI nodes send all transactions that they receive to their neighbor IRI nodes so that those neighbors can validate and store the same transactions.

When all IRI nodes have the same transactions in their ledgers, they have reached a consensus. This consensus forms the distributed ledger that allows clients to connect to any IRI node and have access to the same ledger.

## Gossip protocol

IRI nodes communicate with their neighbors through a gossip protocol.

<dl><dt>gossip protocol</dt><dd>A peer-to-peer communication protocol that allows computers in the same network to share data.</dd></dl>

## Non-solid transactions

As well as sending transactions to neighbors, IRI nodes request non-solid transactions from its neighbors.

A non-solid transaction is one that is referenced by a transaction in an IRI node's ledger, but that the IRI has not yet validated.

If an IRI node sees a non-solid transaction during [validation](../concepts/transaction-validation.md) or [tip selection](../concepts/tip-selection.md), the IRI node asks its neighbors for it, and if its neighbors are missing the information, those neighbors will ask their neighbors, and so on.

