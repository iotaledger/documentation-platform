# The Spamnet

The Spamnet is a Tangle operated by the IOTA Foundation for developers to test the throughput of the current IRI version. This is enables developers from the community and the IOTA Foundation to test the latest IRI and view its ability to handle load.

The Foundation hosts nodes which are open to API calls and requests. We also provide nodes that are able to provide peering (UDP) to those wanting to run their own nodes.

## Configuration

The Spamnet is primarily comprised of servers hosted by the IOTA Foundation. The topology of the network is shown below:

![Topology of the Spamnet](https://i.imgur.com/VpEsA6i.png)

## Endpoints

### Nodes HTTPS API

This is a High Availability Proxy to provide load balancing
to the nodes that comprise the Spamnet. This is accessible over
HTTPS on port 443.

Check out the Node documentation [here](/iri/)

```
https://nodes.spamnet.iota.org:443
```

### Real time Message Stream - ØMQ

This provides access to the Zero Message Queue of the IRI
node. This provides the ability to subscribe to the Node in various ways.

Check out a ZMQ tutorial [here](/iri/).

```
tcp://zmq.spamnet.iota.org:5556
```

---

## Setting up a Node on the Spamnet

### Configuring IRI for the Spamnet

We recommend to run IRI 1.5.3 or higher. You must make sure to configure IRI with the following INI options, or the command line equivalents:

```
[IRI]
TESTNET = TRUE
MWM = 14
SNAPSHOT_FILE = /iri/conf/snapshots/spamnet.txt
COORDINATOR = H9FXUMSYAWNZPVFINVTXOTYKFZXR9OBKA9KSTVWXTWHIZZRISFYZMXIMOQFXDXXQHNAJXAZFP9IHSFXRH
NUMBER_OF_KEYS_IN_A_MILESTONE = 20
SNAPSHOT_TIME = 1535760000
MILESTONE_START_INDEX = 2
NEIGHBORS = udp://p101.spamnet.iota.cafe:14600 udp://p102.spamnet.iota.cafe:14600
```

> NOTE: The configuration options are above are mandatory in order to have a functional node.

### Snapshot file

The Spamnet network snapshot file is not included in IRI. For this reason you need to provide IRI the correct snapshot file for the network. Here is the content of the file:

```
WYF9OOFCQJRTLTRMREDWPOBQ9KNDMFVZSROZVXACAWKUMXAIYTFQCPAYZHNGKIWZZGKCSHSSTRDHDAJCW;2779530283277761
```

> Save the text above and make sure to configure IRI with the SNAPSHOT_FILE directive as indicated above

### Syncing the ledger

On the 1st of September 2018 the Spamnet ledger was reset.

### Neighbors

As mentioned in the INI file above, the following nodes have autopeering enabled over UDP:

```
udp://p101.spamnet.iota.cafe:14600
udp://p102.spamnet.iota.cafe:14600
```

These nodes will automatically accept new neighbors and do not require manual peering. However keep in mind that the number of neighbors is currently capped at 128 each p10n server. For this reason you are very welcome to exchange your own Spamnet IRI URLs over to #tanglespam in Discord, to allow other node operators to participate in the Spamnet network.

### Tokens

At present the Spamnet Faucet website is not functional. In order to get Spamnet tokens please head over to Discord channel #tanglespam and ask for some by communicating your receive address. Community members will make sure that you will receive some.
