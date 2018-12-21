IOTA introduces some rather new concepts to the Distributed Ledger space.  Given this we will list a couple of terms which are important to understand in order to fully grasp IOTA.

This Glossary is work in progress. If you are uncertain about a term, please suggest one here so we can add it to this glossary.

## Generic Terms

- `Peer to Peer Network` - Decentralized network consisting of peers (or nodes) which are connected with each other and perform some form of data sharing with each other.
- `Proof of Work (PoW)` - An algorithm which prevents Denial of Service and spam attacks on a network. a computationally hard puzzle to solve, but easy to verify. IOTA uses a Hashcash based puzzle.
- `Trinary` - Alternative to Binary, Trinary is a base-3 numeral system. 
  - `Trits` - Analogous to bits, a ternary digit is a trit (trinary digit). The digits may have the values 1, 0, or -1.
  - `Trytes` - Analogous to bytes, a tryte consists of 3 trits, which can represent 27 values. in IOTA, trytes are represented as characters '9,A-Z'.
- `DAG` - Directed Acyclic Graph. Is a specific data structure based on a graph without any directed cycles. Instead of having a single branch with nodes having only one edge, in a DAG there can be multiple branches. Refer to Wikipedia for more information.

## IOTA Terms

- `Tangle` - A directed acyclic graph (DAG) as a distributed ledger which stores all transaction data of the IOTA network. - The Tangle is the first distributed ledger to achieve scalability, no fee transactions, data integrity and transmission as well as quantum-computing protection. - Contrary to today’s Blockchains, consensus is no-longer decoupled but instead an intrinsic part of the system, leading to a completely decentralized and self-regulating peer-to-peer network.

- `Tips` - transactions which have no other transactions referencing them.

- `Curl` - The main hash function used in IOTA, Curl is based on well-studied sponge construction invented by the Keccak creators (SHA-3), and is specifically tailored for IoT, that also happens to be the world’s first trinary hash function.

- `Kerl` - as Curl is a young hash function, IOTA currently uses Keccak (SHA-3) for signing. Kerl is Keccek-384, with additional conversion of its input and output from/to 243 trits to 48 bytes using basic two’s complement.

- `Winternitz one-time signature (W-OTS)` - a Post Quantum Signature scheme, that is used to authorize spending from an address in IOTA (sign with your private key). Due to its one-time nature, the security of funds in an address decreases rapidly if you sign multiple transactions using the same key. Therefore, in IOTA you never re-use an address that has been spent from (as one signature has already been shared with the network).

- IOTA the token

  - `Total supply`- There are 2,779,530,283,277,761 IOTAs

  - `Units` - IOTA notation follow SI units. Pi, Ti, Gi, Mi, Ki, i

- `IRI` - The IOTA Reference Implementation (IRI) is written in Java and is the IOTA's core client (node). it communicates with the IOTA network to relay transactions and to provide a, rather limited, API to users - this is largely for security reasons, making it possible to connect to a remote node.

- `iota.js` - The IOTA library, it has all the necessary functionality to fully use IOTA, including sending transactions, cryptography-related functions and the core API. IOTA.js is the most established and used library currently.

## Addresses

- `Seed` - The seed is your master private key. it is used to derive all your private and public keys. Keep it secure and don't share it with anyone. - Seeds in IOTA consist of 81 Trytes ('A-Z,9'), which is equivalent to 384 bits security. A seed is like a private key/password. Keep it secure and don't share it with anyone. If someone has access to your seed they can access your account.

- `Key Index` - an integer, specifying which key to derive from the seed: `key = hash(seed + KeyIndex)`

- `Security level` - When generating an address, you have the option to choose between 3 security models: - 1: 81-trit security (low) - 2: 162-trit security (medium) - 3: 243-trit security (high) The security level also affects the length of transaction bundles, where each spending address signature is spread on 1,2 or 3 transactions (respectively).
- `Address` - a public address is derived from the seed, security level and Key Index. Addresses in IOTA consist of 81 Trytes ('A-Z,9').

- `Address Checksum` - in order to avoid address errors, a checksum is added to the 81 Trytes, to construct a 90 Tryte Address: `Address||hash(Address).lastChars(9)`

- `MultiSig Address` - an address derived by absorbing multiple signature keys. Such an address would need multiple parties to sign a transaction to move funds.

## Transactions

- `Transactions` - the smallest unit of data in IOTA, it consists of 2673 trytes and can be used either to transfer value, or to transfer data on the tangle - transaction structure
- `Branch/Trunk` - Two transactions which were referenced and validated by the transaction.
- `Bundles` - Transactions which are bundled (or grouped) together during the creation of a transfer. Bundles are atomic transfers, either all transactions inside the bundle are accepted, or none.
- `Tail transaction` - The last transaction added to the bundle, which identifies the bundle instance. for the tail a bundle can be constructed & validated by traversing the Trunk of each transaction.
- `Transfers` - Sending value or data to an address, transfers are a higher level abstraction of bundles, transactions etc.
  - `Transfer objects` - recipients of a transfer, contains destination `addresses` and`values`.
  - `Tag` - a short message can be attached to a transfer - up to 27 Trytes`('A-Z,9')`. Tags are searchable.

  - `Inputs` - addresses used to fund value transfers, objects consist of address, security level and key index.

  - `Remainder Address` - Address used to send the remainder value of a transfer, if any.
- `Tip Selection` - In order to broadcast a new transaction in IOTA, you must first validate two previous transactions. This confirmation happens by validating the transaction trytes, the signatures and cross checking for conflicting transactions.
  - `Random Walk (RW)` - The algorithm used to select the pair of previous transactions, for more information read the tangle white paper
  - `Depth` - the starting point for the random walk. the higher the value, the farther back in the tangle the RW will start. and the longer runtime of the RW. A typical value, used in wallets is 3 - which starts the RW 3 milestones back.
- `Proof of Work (PoW)` - An algorithm which prevents Denial of Service and spam attacks on a network. a computationally hard puzzle to solve, but easy to verify. IOTA uses a Hashcash based puzzle.
  - `Min Weight Magnitude (MWM)` - the amount of Work that will be carried out in the PoW stage. this means that a solution to the puzzle is a number with MWM trailing 0's (9's in trytes). currently MWM is set to 14 on the mainnet and 9 on the testnet. Each increment of MWM is 3 times harder PoW (on average).

## Confirmations

- `Inclusion State` - is used to determine if a transaction was accepted and confirmed by the network. more specifically, given a `transaction` and a list of `tips`: Inclusion State is true if tip references that transaction.
  - `Milestones` - checkpoint transactions, issued every minute on average.
  - `Pending` - a transaction is pending if it has been seen by the network, but not confirmed yet.

  - `Confirmed` - a transaction is confirmed if it has been referenced by a milestone , i.e. Inclusion State of transaction (and latest milestone as tip) is true.
- `Rebroadcast` - resend the raw trytes of a transaction. as bundles are atomic, if one transaction is missing from a bundle - it will not confirm. In case you are sending long bundles, rebroadcasting might help confirmation. If a bundle does not appear on an explorer, then rebroacast may also help.
- `Reattach` - takes a bundle's signature and transfer information, and reattaches it to the tangle - selects new tips and does PoW. In case your transfer isn't confirming after a while - 30 mins or so then reattaching might help confirmation.

<HR/>

If you see a term that isn't included but should be, please suggest by editing on github below.
