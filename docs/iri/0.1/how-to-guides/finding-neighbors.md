# Finding neighbors

Neighbors are IRI nodes that communicate directly with each other on the same network through the gossip protocol.

Neighbors must be mutually connected, meaning that if you connect your IRI node to neighbors, those neighbors must connect their IRI nodes to yours.

The easiest and fastest way to find neighbors is to ask the community in the #nodesharing channel on the IOTA Discord. In the channel, ask for a neighbor's URL or IP address, and give that neighbor your IRI node's URL or IP address. We recommend connecting to between 6 and 7 neighbors.

When you have your neighbors' URL or IP addresses, you must add them to the [`NEIGHBORS` configuration parameter](/iri/references/iri-configuration-options.md#neighbors).