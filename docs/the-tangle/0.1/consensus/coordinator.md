# The Coordinator

The model of consensus described in the previous article describes an idealised Tangle network. One where the participants can be certain that the majority of the participants of the network are following a common tip selection algorithim when issuing transactions.

When a Tangle doesn't have this certainty then there are a number of attacks that could be attempted on the network. These are outlined within The Tangle white paper.

## Consensus in the IOTA Mainnet

The current IOTA Mainnet has a relatively low amount of transactions flowing through the network and could have honest transactions overrun by dishonest transactions from an actor with considerable resources. In order to make it possible for the network to grow and protect it against certain attacks, IOTA currently relies on a coordinator. 

A coordinator issues checkpoints, much like in the beginings of Bitcoin, that reference valid transactions. These signed transactions, known as **milestones**, are validated by the entire network to ensure integrity of the transaction. Using a coordinator, the definition of consensus is simple: any transaction referenced by a milestone is confirmed, and the others are not.

The node software has checks within it to ensure the milestones don't enable double spends and cause the ledger state to become inconsistent.

To learn more about the fuctions of a coordinator and how to use one, check out the Compass section of the documentation.