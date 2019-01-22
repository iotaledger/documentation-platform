# What is a bundle?

**A bundle is a group of one or more transactions, which instruct an IRI node to transfer data or IOTA tokens to addresses.**

IRI nodes expect [transactions](../introduction/what-is-a-transaction.md) to be sent in bundles. Even if that bundle contains only one transaction, for example a zero-value transaction that contains only a message.

To transfer IOTA tokens, a bundle must contain a least one input transaction and one output transaction.

The fate of each transaction in a bundle depends on the rest. Either all transactions in the bundle are valid or none of them are.

**Important:** You must not spend from an address more than once. Therefore, a bundle may require an extra output transaction to transfer the remaining balance of a spent address to a new address.

## Example of a bundle that transfers IOTA tokens

You want to send 100Mi to recipient A.

Your balance is distributed among three addresses:

* **Address 0:** 20Mi
* **Address 1:** 30Mi
* **Address 2:** 55Mi

To send 100Mi to recipient A, you must create the following transactions and send them to an IRI node as a bundle:

* **Input transaction:** Debit 100Mi from my balance and check the signature to verify that I own those IOTA tokens
* **Output transaction:** Credit 100Mi to the recipient's address
* **Output transaction:** To avoid spending from address 2 again, transfer the remaining 5Mi from address 2 to address 3

[Learn more about bundles](root://iota-basics/concepts/bundles-and-transactions.md).

