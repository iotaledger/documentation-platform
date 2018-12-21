IOTA uses an account-like scheme. This means that we have inputs (addresses) which you have to spend in order to transfer tokens. Addresses are generated from private keys, which in turn are derived from a tryte-encoded seed.

A transfer in IOTA is a bundle consisting of outputs and inputs. Bundles are atomic transfers, meaning that either all transactions inside the bundle will be accepted by the network, or none.

A typical transfer in IOTA is a bundle consisting of 4 transactions:

![An typical bundle](https://i.imgur.com/rYUBX9I.png)

| Index | Contains                                                                  | >Amount (example)                                               |
| ----- | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 0     | The output address of the transaction.                                    | 80 (Amount being sent to the external party)                    |
| 1     | The input address of the transaction, and the first part of the signature | -100 (The full amount in the input address as a negative value) |
| 2     | The second half of the signature.                                         | 0                                                               |
| 4     | An output address for the reminder (change).                              | 20 (Remainder amount from the address)                          |

>  Note: The sum of inputs and outputs has to equal to zero.

The number of transaction in the bundle could change in several ways:

* The number of signature transactions is equal to the input address security level.

* The change transaction is not required when the input and output value are equal.

* A bundle of zero input would require only one transaction

* More inputs or outputs will require more transactions.

## Construction Bundles

The construction of bundles is often managed by client software. These libraries, provided with a list of outputs, will construct a bundle from the addresses with positive values a seed based 'account'.

There are no hard constraints on the number of inputs and outputs in a bundle. However given the networking and PoW constraints bundles over 30 inputs/outputs are not advised.

#### Inputs

Bundles can be crafted with multiple inputs from multiple different addresses (possibly seeds). The value of the inputs has to be **less than Zero**. The negative value effectively 'takes' the tokens at the address and makes them available to be outputted in the same bundle.

Each input must be signed correctly to be utilized. Obviously, taking more tokens than are available at an address will result in an invalid transaction.

> SECURITY NOTE 
> Ensure to input the **total amount** of any address that is used as an **input** in a transaction. If a transaction input spends less than the full amount from an address, a portion of tokens will remain at the address. To move the them these tokens you will have to reuse the addresses private key. Doing so poses a security risk to the funds at this address.

#### Outputs

Once a bundle has valid inputs, these can be spent to any number of outputs. The outputs, given they do not need to be signed, are also able to contain up to \`2187\` trytes worth of information.
