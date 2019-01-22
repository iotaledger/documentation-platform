# Glossary

**This glossary contains the definitions of terms that are used in IOTA.**

## General terms

<dl><dt>peer-to-peer network</dt><dd>Decentralized network that consists of nodes, which share data among each other.</dd>
</dl>
<dl><dt>proof of work (PoW)</dt><dd>Computational puzzle that's hard to solve and easy to verify. IOTA uses a Hashcash-based puzzle to prevent both denial of service (DoS) attacks and spam attacks on the network.</dd>
</dl>
<dl><dt>directed acyclic graph (DAG)</dt><dd>Data structure that's based on a graph without any directed cycles. In IOTA, vertices represent transactions, and edges represent approvals. </dd></dl>

## Trinary terms

<dl><dt>trinary</dt><dd>Base-3 numeral system.</dd></dl>
<dl><dt>trit</dt><dd>Ternary digit, which has the values 1, 0, or -1.</dd></dl>
<dl><dt>tryte</dt><dd>3 trits, which can represent 27 values. Trytes are represented as the characters '9,A-Z'.
</dd></dl>

### Cryptography terms

<dl><dt>Curl</dt><dd>Main hash function that's used in IOTA. Curl is based on a sponge construction, which was invented by the Keccak creators (SHA-3). Curl is designed for the Internet of things (IoT).
</dd></dl>

<dl><dt>Kerl</dt><dd>Keccek-384 hash function that includes the additional conversion of its input and output from/to 243 trits to 48 bytes, using <a href="https://en.wikipedia.org/wiki/Two%27s_complement">two's complement</a>.
</dd></dl>

<dl><dt>Winternitz one-time signature (W-OTS)</dt><dd>Post-quantum signature scheme that's used to sign transactions that spend IOTA tokens.
</dd></dl>

<dl><dt>checksum</dt><dd>Hashed data that allows you to detect errors and verify that you entered the correct data.</dd></dl>

## IOTA terms

<dl><dt>IRI node</dt><dd>Computer that's responsible for validating transactions and storing a copy of them in a ledger.</dd></dl>

<dl><dt>client</dt><dd>Device that connects to an IRI node to interact with an IOTA network and send transactions.</dd></dl>

<a name="ledger"></a><dl><dt>ledger</dt><dd>Local database where an IRI node stores all the transactions that it's validated.</dd></dl>

<dl><dt>distributed ledger</dt><dd>Common ledger that is held by all IRI nodes in an IOTA network. IRI nodes share their ledgers with each other until all of them contain the same valid transactions.</dl>

<dl><dt>Tangle</dt><dd>Name of the directed acyclic graph (DAG) that is formed by connecting IOTA transactions in the distributed ledger to the transactions that they reference.</dd></dl>

<a name="subgraph"></a><dl><dt>subgraph</dt><dd>Section of the ledger that contains all transactions between a milestone transaction and tip transactions.</dd></dl>

<dl><dt>blowball</dt><dd>Tangle formation that consists of one central transaction, which is surrounded by a large number of tip transactions.</dd></dl>

### Accounts

<dl><dt>seed</dt><dd>81-tryte password that's used to generate addresses and signatures.</dd></dl>

<dl><dt>address</dt><dd>Account that owns IOTA tokens. Addresses can receive and tranfer data and IOTA tokens.</dd></dl>

<dl><dt>signature</dt><dd>Cryptograhic proof of ownership of an address. IOTA tokens can't be spent from an address without a valid signature.</dd></dl>

<dl><dt>security level</dt><dd>Integer that affects the length of a signature. The higher the security level, the longer the signature, and the more secure the address.</dd></dl>

<dl><dt>multi-signature address (multi-sig address)</dt><dd>Address that needs multiple parties to sign a transaction before IOTA tokens can be spent from it.</dd></dl>

### Transactions

<dl><dt>transaction</dt><dd>Data that is sent to an <a href="#iota-terms">IRI node</a> as an instruction to transfer value or data. Transactions must be structured in a way that conforms to the IOTA protocol.</dd></dl>

<dl><dt>bundle</dt><dd>Atomic group of transactions that are sent together to an IRI node. Either all transactions inside the bundle are accepted or none of them are. Each transaction inside a bundle has an index number.</dd></dl>

<dl><dt>tail transaction</dt><dd>Last transaction (index 0) in a bundle. <a href="#iota-terms">IRI nodes</a> contruct and validate bundles by traversing the trunk transaction of each tail transaction.</dd></dl>

<a name="trunk"></a><dl><dt>trunk transaction</dt><dd>Transaction that is referenced by another transaction. Transactions in a bundle are connected to each other through the trunk transaction. This connection makes it faster for IRI nodes to validate transactions in a bundle.</dd></dl> 

<a name="branch"></a><dl><dt>branch transaction</dt><dd>Transaction that is referenced by another transaction.</dd></dl>

<a name="tip-transaction"></a><dl><dt>tip transaction</dt><dd>Transaction that has no approvers.</dd></dl>

<dl><dt>approver</dt><dd>Transaction that directly references another transaction as its trunk transaction or branch transaction.</dd></dl>

<dl><dt>future set</dt><dd>Group of transactions that directly or indirectly reference the same transaction.</dd></dl>

<dl><dt>solid</dt><dd>State of a transaction when an IRI node has its entire history (all directly and indirectly referenced transactions) in its ledger.</dd></dl>

<dl><dt>inconsistent</dt><dd>State of a transaction when it leads to spending non-available funds.</dd></dl>

<dl><dt>invalid</dt><dd>State of a transaction when it's either non-solid, inconsistent, or it references a transaction that's too old.</dd></dl>

<dl><dt>pending</dt><dd>State of a transaction when it's been seen by the network, but not yet confirmed.</dd></dl>

<dl><dt>confirmed</dt><dd>State of a transaction when it's been directly or indirectly referenced by a milestone.</dd></dl>

<dl><dt>TPS</dt><dd>Number of transactions per second that are seen by an <a href="#iota-terms">IRI node</a>.</dd></dl>

<dl><dt>CTPS</dt><dd>Number of confirmed transactions per second.</dd></dl>

<a name="milestone"></a><dl><dt>milestone</dt><dd>Valid transaction that is created by either the Coordinator in a permissionless IOTA network or <a href="root://compass/0.1/introduction/overview.md">Compass</a> in a permissioned IOTA network. <a href="#iota-terms">IRI nodes</a> use milestones to determine if other transactions are in a confirmed state.</dd></dl>

<dl><dt>tip selection</dt><dd>Process whereby an <a href="#iota-terms">IRI node</a> selects two <a href="#tip-transaction">tip transactions</a> and returns them to a client to use as a new transaction's <a href="#branch">branch transaction</a> and <a href="#trunk">trunk transaction</a> respectively.</dd></dl>

<dl><dt>weighted random walk</dt><dd>Algorithm that an <a href="#iota-terms">IRI node</a> uses during tip selection to find a path to a tip transaction in the ledger. To increase the probability of new transactions being selected and appended to the <a href="#ledger">ledger</a>, the algorithm favors a path through transactions that have a larger cumulative weight.</dd></dl>

<dl><dt>cumulative weight</dt><dd>Rating that an <a href="#iota-terms">IRI node</a> gives to a <a href="#transactions">transaction</a>.</dd></dl>

<dl><dt>depth</dt><dd>Entrypoint <a href="#milestone">milestone</a> that's used to start a weighted random walk through a <a href="#subgraph">subgraph</a>. The higher the value, the farther back in the subgraph the weighted random walk starts. A typical depth that wallets use is 3, which causes the weighted random walk to start 3 milestones in the past.</dd></dl>
 
<dl><dt>minimum weight magnitude (MWM)</dt><dd>Integer that sets the amount of work that will be carried out during <a href="#general-terms">PoW</a>. The solution to the computational puzzle is a number that contains the same number of trailing nines as the MWM. Each increment of MWM makes it three times harder to complete the PoW (on average).</dd></dl>

<dl><dt>inclusion state</dt><dd>Process that an <a href="#iota-terms">IRI node</a> performs to check either the acceptance of a transaction or the confirmation of a transaction. Given a transaction and a list of tip transactions, the inclusion state is true if the tip transactions reference that transaction.</dd></dl>

<dl><dt>rebroadcast</dt><dd>Send a transaction to an IRI node again.</dd></dl>

<dl><dt>reattach</dt><dd>Request new tip transactions, do the proof of work again, and send the transaction to an IRI node.</dd></dl>