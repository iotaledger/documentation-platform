# The distributed ledger

 IRI nodes in an IOTA network host a ledger as a record of all valid transactions that each of them receives. In the IRI, the ledger is an embedded, append-only database called [RocksDB](https://rocksdb.org/). The ledger is append-only to stop the history from being changed, making all transactions immutable.

 ## How it works

 An IOTA network is asynchronous, meaning that an IRI node in the network can append transactions to its ledger at any time without waiting for its neighbors to receive them. This asynchronisity allows transactions to be appended to the ledger at a faster rate than if the network were synchronous, meaning that each IRI node's ledger can be in a different state at any time.

When the IRI [receives and validates a transaction](/iri/concepts/transaction-validation.md), that [transaction and its metadata](/iri/references/data-in-the-ledger.md) are appended to the ledger to form that ledger's local state. It's this local state that clients interact with when they connect to the IRI node.

Because each IRI node's ledger has it's own local state, all IRI nodes in an IOTA network must have a way of agreeing on the state of each other's ledger so that all ledgers are consistent about which transactions were made, validated and confirmed. This consistency forms the **distributed ledger** that is agreed on by the majority of IRI nodes and distributed among each of them, allowing clients to interact with the same ledger regardless of which IRI node that they connect to.

### Agreement on the state of the ledger

For transactions to be confirmed, the majority of the IRI nodes in an IOTA network must agree on the state of each other's ledger, known as the global state.

To reach consensus about the global state of all ledgers in the network, IRI nodes communicate with their neighbors through a gossip protocol to inform each other of the state of their ledger.

<dl><dt>Gossip protocol</dt><dd>A peer-to-peer communication protocol that allows computers in the same network to share data.</dd></dl>

When an IRI node receives a transaction or performs [tip selection](/iri/concepts/tip-selection.md), it must [validate the transaction](/iri/concepts/transaction-validation.md). If an IRI node is missing any information about a transaction, the IRI node can ask its neighbors for it through the gossip protocol, and if its neighbors are missing the information, those neighbors will ask their neighbors, and so on.

When the majority of IRI nodes have the same valid transactions in their ledgers, they have reached consensus on the global state of the distributed ledger.

IRI nodes consider value transactions (transactions that transfer IOTA tokens) to be confirmed when they are directly or indirectly referenced by a valid milestone. Milestones are transactions like any other, and they must be validated by the IRI before they can be appended to the ledger.

<dl>
<dt>Milestone</dt>
<dd>Valid transaction that is created by either the Coordinator in a public IOTA network or <a href="/compass/introduction/overview.md">Compass</a> in a private IOTA network.</dd>
</dl>

<dl>
<dt>Coordinator</dt>
<dd>Client application that sends transactions, known as milestones, to IRI nodes in the mainnet, the devnet, and the testnet networks. Each IRI node validates the milestone transactions. When a valid milestone transaction directly or indirectly references another transactions, that transaction is considered confirmed on the IOTA network. The IOTA Foundation runs the Coordinator. </dd>
  </dl>
