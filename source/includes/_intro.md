# IOTA Introduction


## What is IOTA?

[IOTA](https://iotatoken.com/) is a revolutionary new transactional settlement and data transfer layer for the 
Internet of Things. It’s based on a new distributed ledger, the Tangle, which overcomes the inefficiencies of current
Blockchain designs and introduces a new way of reaching consensus in a decentralized peer-to-peer system. For the 
first time ever, through IOTA people can transfer money without any fees. This means that even infinitesimally small
nanopayments can be made through IOTA.

IOTA is the missing puzzle piece for the Machine Economy to fully emerge and reach its desired potential. We envision
IOTA to be the public, permissionless backbone for the Internet of Things that enables true interoperability between 
all devices.

<aside class="warning">
    <b>IOTA IS CURRENTLY IN BETA</b><br>
    It should be noted that IOTA is currently still in Beta. This means that the current Java implementation is an
    <b>unoptimized reference implementation</b>. Major improvements to performance, features as well as ease of use 
    will be made over the coming months.
</aside>


## Glossary

Because IOTA introduces some rather new concepts to the Blockchain-space, we will list a couple of terms which are 
important to understand in order to fully grasp IOTA.

This Glossary is work in progress. If you are uncertain about a term, please suggest one here so we can add it to this 
glossary.

### Generic Terms

- **Peer to Peer Network**: Decentralized network consisting of peers (or nodes) which are connected with each other 
  and perform some form of data sharing with each other.
- **Proof of Work**: Algorithm which prevents Denial of Service and spam attacks on a network. Computationally hard 
  puzzle, but easy to verify.
- **Trinary**: Alternative to binary, which consists of three states: true, false and unknown. Read more 
  [here](https://en.wikipedia.org/wiki/Balanced_ternary).
- **DAG**: Directed Acyclic Graph. Is a specific data structure based on a graph without any directed cycles. Instead 
  of having a single branch with nodes having only one edge, in a DAG there can be multiple branches. Refer to 
  [Wikipedia](https://en.wikipedia.org/wiki/Directed_acyclic_graph) for more information.

### IOTA Terms

- **Tangle**: A directed acyclic graph (DAG) as a distributed ledger which stores all transaction data of the IOTA 
  network. It is a Blockchain without the blocks and the chain (so is it really a Blockchain?). The Tangle is the first 
  distributed ledger to achieve **scalability**, **no fee transactions**, **data integrity** and **transmission** as 
  well as **quantum-computing protection**. Contrary to today’s Blockchains, consensus is no-longer decoupled but 
  instead an intrinsic part of the system, leading to a completely decentralized and self-regulating peer-to-peer 
  network.
  ![Tangle](images/iota_terms_tangle.png)
- **Seed**:  String consisting only of uppercase latin letters and 9's which is used to access an account. A seed is 
  like a private key/password. **Keep it secure and don't share it with anyone.** If someone has access to your seed 
  they can access your account. The maximum security level for seed is 81-trytes (81 chars), but you can choose longer 
  seeds, the security of it just won't increase.
- **Tips**:Transactions which have no other transactions referencing them.
- **Confirm/Validate**: In order to broadcast a new transaction in IOTA, you must first validate two previous 
  transactions. This confirmation happens by validating the transaction trytes, the signatures and cross-checking for 
  conflicting transactions as well as the completion of a Proof of Work puzzle.
- **Branch/Trunk Transactions**: Two transactions which were referenced and validated by another transaction.
- **Bundle**: Transactions which are bundled (or grouped) together during the creation of a transfer.


##FAQ

####**Is IOTA inflationary? Can I mine IOTA's?**

All IOTA's which will ever exist have been created with the genesis transaction. This means that the total supply of 
IOTA's will always stay the same and you cannot "mine" IOTA's. Therefore keep in mind, if you do Proof of Work in IOTA 
you are not generating new IOTA tokens, you're simply verifying other transactions.

####**What is the total supply of IOTA?**

The total supply of IOTA is `(3^33-1) / 2`, which equals to a total number of IOTA's of `2779530283277761`. IOTA is 
specifically designed for machines, so this high supply makes IOTA optimal for tiny nanotransactions while still 
keeping efficiency in mind. It also nicely fits into the `MAX_SAFE_INTEGER` value in JavaScript.

<aside class="notice">
    <b>WORK IN PROGRESS!</b><br>
    This page is currently being worked on and improved.
</aside>


##Whitepaper

The [IOTA Whitepaper](http://iotatoken.com/IOTA_Whitepaper.pdf) which describes the main technology behind IOTA - the 
Tangle - is available to read [online](http://iotatoken.com/IOTA_Whitepaper.pdf). It goes into greater detail about the 
structure as well as the security of the Tangle:

***[Whitepaper.pdf](http://iotatoken.com/IOTA_Whitepaper.pdf)***