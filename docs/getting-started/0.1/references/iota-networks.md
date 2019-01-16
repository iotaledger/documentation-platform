# IOTA networks

**An IOTA network consists of IRI nodes that are mutually connected to neighbor IRI nodes.**

IOTA has the following [permissionless networks](concepts/what-is-dlt.md) that anyone can use:
* Mainnet
    - **Token:** IOTA token
* Devnet
    - **Token:** Devnet token (free)
* Spamnet
    - **Token:** Spamnet token (free)

All permissionless networks consist of IRI nodes, clients, and the Coordinator.

If you want to create and test an application on a permissioned (private) network, you can do so by running an instance of the open-source Coordinator called [Compass](root://compass/0.1/introduction/overview.md).

## Mainnet

When you buy IOTA tokens from a cryptocurrency exchange, you can send those token to addresses on the Mainnet network.

Transactions on the Mainnet network must use a MWM (minimum weight magnitude) of 14 to be valid.

![Mainnet configuration](https://i.imgur.com/HK4S62N.png)

## Devnet

The Devnet network is a copy of the Mainnet network.

On this network, you can test your applications and build proof of concepts that use [free Devnet tokens](https://faucet.devnet.iota.org). The faucet website will send 1000 Devnet tokens to the specified address.

Transactions on the Devnet network must use a MWM (minimum weight magnitude) of 9 to be valid. Compared to the Mainnet network, this MWM vastly reduces the time it takes for the Proof of Work (PoW) to be completed.

![Devnet Configuration](https://i.imgur.com/w2kGDKw.png)

### IRI nodes

We host the following public IRI nodes on the Devnet network:

#### Load balancer node

This endpoint gives you access to a high-availability proxy server, which is running an IRI node on the Devnet network.

Use the load balancer for sending transactions and requesting information about the ledger from the IRI node.

**URL:** https://nodes.devnet.iota.org:443

#### ZMQ node

This endpoint gives you access to the [zero message queue](root://iri/0.1/concepts/zero-message-queue.md) of an IRI node on the Devnet network.

Use the ZMQ node to subscribe to events in the IRI.

**URL:** tcp://zmq.testnet.iota.org:5556

#### PoW node

This endpoint gives you access to an IRI node that can do proof of work.

Use the PoW node to save power on small devices.

**URL:** https://powbox.devnet.iota.org

## Spamnet

The Spamnet network is for applications that spam transactions.

On this network, you can test your applications and build proof of concepts that use [free Spamnet tokens](https://faucet.spamnet.iota.org).

Transactions on the Devnet network must use a MWM (minimum weight magnitude) of 9 to be valid. Compared to the Mainnet network, this MWM vastly reduces the time it takes for the Proof of Work (PoW) to be completed.

![Topology of the Spamnet](https://i.imgur.com/VpEsA6i.png)

### IRI nodes

We host the following public IRI nodes on the Spamnet network:

#### Load balancer node

This endpoint gives you access to a high-availability proxy server, which is running an IRI node on the Spamnet network.

Use the load balancer for sending transactions and requesting information about the ledger from the IRI node.

**URL:** https://nodes.spamnet.iota.org:443

#### ZMQ node

This endpoint gives you access to the [zero message queue](root://iri/0.1/concepts/zero-message-queue.md) of an IRI node on the Spamnet network.

Use the ZMQ node to subscribe to events in the IRI.

**URL:** tcp://zmq.spamnet.iota.org:5556 
