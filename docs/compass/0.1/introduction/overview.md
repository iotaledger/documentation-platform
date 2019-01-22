# Compass overview

**Compass is a client application that protects IOTA networks against attacks by sending honest, zero-value transactions to IRI nodes at regular intervals. Any transaction that's referenced by a Compass transaction is considered confirmed.**

In an IOTA network that uses Compass, [the Coordinator](root://the-tangle/0.1/concepts/the-coordinator.md) does not exist. Any transaction that's referenced by a signed Compass milestone transaction is considered confirmed.

Compass can't modify balances or censor transactions because all transactions, including milestones, are [validated by each IRI node](root://iri/0.1/concepts/transaction-validation.md) in the network.

You can use Compass to [create a permissioned IOTA network](how-to-guides/create-a-permissioned-iota-network.md) that doesn't rely on the Coordinator. A permissioned IOTA network is one in which IRI nodes must gain permission before joining an IOTA network. Permissioned networks are beneficial for the following use cases:

- **Security testing and research:** Use Compass to create a controlled environment to test assumptions and produce attacks.
- **Development of proof of concepts:** Use Compass to develop proof-of-concept applications without sharing your ideas on a [permissionless network](root://getting-started/0.1/references/iota-networks.md).

**Note:** By releasing Compass, the IOTA Foundation aims to further its research into finding a viable replacement for the Coordinator.

## Repository

Jump directly to the Compass source code on [Github](https://github.com/iotaledger/compass)
