|Table of contents |
|:----------------:|
|[What is IOTA?](#what-is-iota)|
|[What is the purpose of IOTA?](#what-is-the-purpose-of-iota)|
|[How does IOTA work?](#how-does-iota-work)|
|[What is the IOTA token and why is it valuable?](#what-is-the-iota-token-and-why-is-it-valuable)|
|[What are the benefits of IOTA?](#what-are-the-benefits-of-iota)|
|[For what industries is IOTA useful?](#for-what-industries-is-iota-useful)|
|[How do I get started?](#how-do-i-get-started)|
||

# What is IOTA?

IOTA is a [distributed ledger technology (DLT)](concepts/distributed-ledger-technology.md) that allows computers in an IOTA network to transfer tamper-proof data and value (IOTA tokens) among each other.

## What is the purpose of IOTA?

IOTA aims to improve efficiency, increase production, and ensure data integrity by developing a technology that faciliates the machine-to-machine economy.

<dl><dt>machine-to-machine economy</dt><dd>Economy in which any computer can transfer data and value to other computers without human intervention.</dd></dl>

[Data is the new oil](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data), and IOTA allows you to harness data by storing it on a universal, transparent, tamper-proof ledger. As a result, IOTA opens the flood gates for a world where users can buy and sell data, transfer it for free, and restrict who can see it.

To visualize what IOTA does, watch [this video](https://www.youtube.com/embed/Gr-LstcDcAw) about how IOTA improves supply chains.

## How does IOTA work?

In an IOTA network, data (including the IOTA token) is transferred and stored in packages called transactions, which are handled by the following entities:
* [**IRI nodes:**](iri/introduction/overview.md) Computers that are reponsible for storing transactions in a ledger
* Clients: Computers that create and send transactions to IRI nodes

Each client in an IOTA network has a secret password called a seed, which is used to generate unique addresses and digital signatures. Addresses are the accounts from which transactions are sent and received. Digital signatures prove ownership of an account and allow value transactions to be sent from addresses.

Transactions can be one of the following types:
* Data transaction: Transaction that send only plain text or encrypted data to a recipient's address
* Value transaction: Transaction that transfers IOTA tokens to a recipient's address

## What is the IOTA token and why is it valuable?

At its most basic level, the IOTA token is a record that looks like this:

    ADDRESS....ENDOFADDRESS;1000

This record is kept on the ledger of all IRI nodes on the [IOTA MainNet network](references/iota-networks.md). It might look cryptic, but let's break it down. On the left of the semicolon is an address. These are unique to each client in an IOTA network. On the right of the semicolon is an amount of IOTA tokens that belong to that address, in this case 1,000 tokens.

You own IOTA tokens only when all IRI nodes reach a consensus about the transactions that transferred those tokens to your addresses.

To reach consensus, all IRI nodes must [validate the transactions](iri/concepts/transaction-validation.md) by doing a number of checks, which include checking that the sender owned the tokens.

The IOTA token is valuable for two reasons:

* It's finite: All IRI nodes agree that a mamimum of 2,779,530,283 277,761 tokens exist in the network. This maximum number is built into the network and can't ever be changed.
* It's useful: To transfer value in an IOTA network, you must use the IOTA token. 

## What are the benefits of IOTA?

IOTA is an open-source technology that can streamline, secure, and automate any process that sends data or transfers value from different devices.

### Trust

All transactions in the ledger are immutible and transparent.

Each IRI node in an IOTA network validates and stores transactions in its ledger, then sends its contents to other IRI nodes that do the same. As a result, all valid transactions are agreed on by all nodes, removing the need to trust a single one in the network.

### Security

IOTA uses quantum-resistant cryptography to secure the network and prevent attackers from stealing IOTA tokens.

IOTA networks are peer-to-peer networks. No central authority controls the ledger of transactions, instead all IRI nodes hold a copy and run the software that contains the IOTA protcol to automate the agreement on its contents.

### Cost saving

IOTA is free to use. You don't need to pay a subscription, or sign a contract. Even transactions are free to send.

### Scalable

For each transaction that's appended to the ledger validates two previous transactions. This process makes IOTA incredibly scalable because the more new transactions that propagate through the network, the faster other transactions are validated.

This process forms a data structure called a directed acyclic graph (DAG), which we call the Tangle.

## For what industries is IOTA useful?
IOTA is an open-source technology that can streamline, secure, and automate any process that sends data or transfers value among different devices.

Therefore, many industries such as the following could benefit from using IOTA:

* [Mobility](https://www.iota.org/verticals/mobility-automotive)
* [Global trade and supply chains](https://www.iota.org/verticals/global-trade-supply-chains)
* [Industrial IoT (Internet of things)](https://www.iota.org/verticals/industrial-iot)
* [Healthcare](https://www.iota.org/verticals/ehealth)
* [Energy](https://www.iota.org/verticals/smart-energy)


## How do I get started?

[Start your IOTA journey by creating your first seed.](getting-started/creating-a-seed.md)

[Take a look at some application that are already using IOTA.](references/use-cases.md)

Are you a developer? Get stuck in by [sending your first transaction](getting-started/sending-your-first-transaction-using-nodejs.md)!
