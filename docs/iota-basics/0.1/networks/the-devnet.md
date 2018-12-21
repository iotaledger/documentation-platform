# The Devnet

The Devnet is a Tangle operated by the IOTA Foundation for developers to test their applications on. This network resembles the permissionless IOTA Mainnet as close as possible. This is to ensure that applications tested on this network will operate on the Mainnet.

The Foundation hosts nodes which are open to API calls and requests. We aslo provide nodes that are able to provide peering (UDP) to those wanting to run their own nodes.

## Configuration

The Devent is primarily comprised of servers hosted by the IOTA Foundation. The topology of the network is shown below:

![Devnet Configuration](https://i.imgur.com/w2kGDKw.png)

**Minimum Weight Magnitude**

The Devnet **requires a minimum of 9** MWM (Minimum Weight Magnitude). This vastly reduces the difficulty of the Proof of Work (PoW) required to send a transaction. Given this you will see your application or solution completing PoW slower on the Mainnet when it is in production.

**Devnet Tokens **

The Devnet has a faucet website that will send 1000 Devnet IOTA tokens to a specified address. Follow the prompts here to received the tokens:

```
https://faucet.devnet.iota.org
```

---

## Endpoints

### Nodes HTTPS API

This is a High Availability Proxy to provide load balancing
to the nodes that comprise the Testnet. This is accessible over
HTTPS on port 443.

```
https://nodes.devnet.iota.org:443
```

Check out the **Node** documentation [here](/iri)

### Realtime Message Stream - ØMQ

This provides access to the Zero Message Queue of the IRI
node. This provides the ability to subscribe to the Node in various ways.

```
tcp://zmq.testnet.iota.org:5556
```

Check out a **ZMQ** tutorial [here](/introduction/tutorials/zmq-listener).

### Pow Box - Proof of Work service

This endpoint provides access to a means of delegating Proof of Work
to a third-party. This is useful for small devices or simulations.

```
https://powbox.devnet.iota.org
```

Check out the **PowBox** documentation [here](https://powbox.devnet.iota.org)

---

## Setting up a Node on the Devnet

### Syncing the ledger

The current Devent database is more than 30GB. We have regularly updated snapshots of the devnet, to allow community members and developers to spawn their own IRI node(s) and sync it in a reasonable period of time.

The database is available for download [here](https://s3.eu-central-1.amazonaws.com/iotaledger-dbfiles/testnet/db-latest.tgz) and usually requires the latest version of IRI.

### Neighbors

The following nodes have autopeering enabled over UDP:

```
udp://p101.testnet.iota.cafe:14666

udp://p102.testnet.iota.cafe:14666

udp://p103.testnet.iota.cafe:14666

udp://p104.testnet.iota.cafe:14666
```

Developers can sync their nodes by using any of these `p10x` nodes via udp, port 14666.

> NOTE: When setting up IRI use the `--testnet` flag or set `TESTNET = true` in the configuration file.
