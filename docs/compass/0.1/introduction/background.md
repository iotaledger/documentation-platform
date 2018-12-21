# Background on Compass

An IOTA network relies on clients sending mostly honest transactions to IRI nodes and for those IRI nodes to propagate those transactions through the network. However, the fewer transactions that are propagated through an IOTA network, the easier it is for an attacker to make the IRI nodes propagate mostly dishonest transactions through the network.

If an attacker were to send the IRI nodes more dishonest transactions than the total number of honest transactions in an IOTA network, that attacker may be able to control the direction of consensus, double spend tokens, and carry out network-splitting attacks.
 
Enter the Coordinator (COO): a temporary safety mechanism. Such safety mechanisms are common in blockchain and distributed ledger technology (DLT) systems. For example, Bitcoin had hard-coded checkpoints, plus an alerts system that allowed the creator to shut down the network if necessary.
 
COO sends bundles at regular intervals to the IRI nodes. These bundles include a signed transaction called a milestone. When using a COO such as Compass, the IRI nodes in an IOTA network consider a transaction as confirmed only if it's directly or indirectly referenced by a milestone.

**Note:** IRI nodes must be configured to recognize milestones that are published by Compass. 

A COO such as Compass can be used to prevent attacks until mostly honest transactions are propagated through an IOTA network, at which point it will be hard to attack the consensus of the network and the use of a COO will no longer be required.
 
## Further Reading 

To learn more about the COO, read the following resources:
- [IOTA Papers discussing the Tangle and other protocol features](https://www.iota.org/research/academic-papers)
- [A series of posts discussing the removal of the Coordinator](https://blog.iota.org/coordinator-part-1-the-path-to-coordicide-ee4148a8db08)





