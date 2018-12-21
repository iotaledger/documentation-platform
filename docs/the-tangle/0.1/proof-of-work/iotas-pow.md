# IOTA's Proof of Work

IOTA uses PoW for spam protection, similar in spirit to the PoW used in [Hashcash](https://en.wikipedia.org/wiki/Hashcash).

This is a short computational operation done per transaction issued, which should not be confused with the expensive PoW employed in miner-based ledgers such as Bitcoin.

## How is PoW represented

Proof of Work is represented in the transaction structure within the `Nonce` field as a string of 27 Trytes. This field is added in addition to the rest of the trytes within the bundle and is added after the transaction is prepared for sending. 

For example: `POWSRVIO9GW99999FMGEGVMMMMM`

## How to calculate PoW

In order to calculate Proof of Work for the transaction information is converted from Trytes to Trits and then a hash of 243 Trits is produced. This hash is then checked to see if the required number of 0s are on the end of the transaction has. If there are less then the required number of 0s at the end of the transaction hash then the `Nonce` field is mutated and the process is repeated until a Nonce is found that has the required number of trialing 0s.

Code used to calculate a transaction's nonce in the node software can be seen [here](https://github.com/iotaledger/iri/blob/fcf2d105851ee891b093e2857592fa05258ec5be/src/main/java/com/iota/iri/crypto/PearlDiver.java).