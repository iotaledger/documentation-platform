# What is a bundle?

**A bundle is an atomic group of transactions.**

When you want to send IOTA tokens to another address, you may need to create more than one [transaction](introduction/what-is-a-transaction.md), for example:

* An output transaction that subtracts IOTA tokens from your addresses and transfers them to the recipient's address
* Input transactions that contain the signature to authorise the output transaction
* A change transaction (if IOTA tokens are left in a spent address) that sends any remaining amount to one of your new addresses.

**Important:** A change transaction is needed for security reasons. In IOTA you must not spend from an address more than once. Therefore, any remaining balance in a spent address must be moved to a new address.

Bundles are atomic because the fate of each transaction depends on the rest in the bundle. Either all transactions in the bundle are valid or none of them are.

## Example of a bundle

You want to send 100Mi to recipient A.

Your balance is distributed among three addresses:

* **Address 0:** 20Mi
* **Address 1:** 30Mi
* **Address 2:** 55Mi

To send 100Mi to recipient A, you must create a series of transactions and send them to an IRI node as a bundle so that the network can do the following:

* **Output transaction:** Subtract 100Mi from my balance and transfer it to recipient A's address
* **Input transaction:** Check the signature in this zero-value transaction to verify that I own those IOTA tokens
* **Change transaction:** Transfer the remaining 5Mi from address 2 to my new address 3

