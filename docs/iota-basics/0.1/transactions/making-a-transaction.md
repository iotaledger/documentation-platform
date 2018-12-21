As previously mentioned, in IOTA there are no miners. As such the process of making a transaction is different from any Blockchain out there today.

The process in IOTA looks as follows:

1.  `Signing`: You sign the transaction inputs with your private keys. This can be done offline.

2.  `Tip Selection`: MCMC is used to randomly select two tips, which will be referenced by your transaction (`branchTransaction` and `trunkTransaction`)

3.  `Proof of Work`: In order to have your transaction accepted by the network, you need to do some Proof of Work - similar to Hashcash, not Bitcoin (spam and sybil-resistance). This usually takes a 30 seconds on a modern PC.

After this is completed, the `trunkTransaction`, `branchTransaction` and `nonce` of the transaction object should be updated. This means that you can broadcast the transaction to the network now and wait for it to be approved by someone else.
