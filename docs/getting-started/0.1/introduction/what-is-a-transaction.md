# What is a transaction?

**A transaction is an instruction that sends data or IOTA tokens to an address or debits IOTA tokens from an address.**

Transactions are sent to IRI nodes in [bundles](../introduction/what-is-a-bundle.md).

Transactions can be one of the following types:
* **Input transaction:** Debits IOTA tokens from an addresses and contains the signature that proves ownership of the address. If the signature is too large, it's fragmented over zero-value output transactions in the bundle.
* **Output transaction:** Credits IOTA tokens to a recipient's address or contains no value (a zero-value transaction).

All transactions are feeless.

[Learn more about addresses and signatures in transactions](root://iota-basics/0.1/concepts/addresses-and-signatures.md).
