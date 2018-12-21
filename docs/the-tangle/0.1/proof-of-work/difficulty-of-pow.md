# Difficulty of Proof of Work

The difficulty of the PoW is set by a variable called Minimum Weight Magnitude (MWM). This refers to the number of trailing zeros (in trits) in transaction hash. 

MWM is proportional to the difficulty of the Proof of Work. The device which does the PoW will bruteforce the transaction hash to find a \`nonce\` that has the correct number of trailing 0's. Every extra trailing zero to be found will increase the difficulty of PoW by 3 times.

## Setting difficulty

Difficulty is static, and it is set in the node software (IRI) of participating nodes within a network. The nodes will generally tend toward having the same difficulty value. If the network consisted of nodes with various MWM settings then TX propagation would suffer as some transactions would not be propagated and therefor less likely to be confirmed.

In terms determining the required MWM to reduce the amount of spam transactions on the network, this is done in an arbitrary fashion at the moment. In the future, the MWM of the IOTA Mainnet may change. 

## Nonce Example

The following represent the end of a hash in a Trit array.  If we were to validate the hash with an MWM of 3 these would be the following results:
Valid:	 `[.... 1, 1, 0, -1, 1, 0, 0, 0 ]`

Invalid:	 `[.... 1, 1, 0, -1, 1, 0, -1, 0 ]`

