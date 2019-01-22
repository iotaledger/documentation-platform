# Zero message queue

**Zero message queue (ZMQ) is an open-source, real-time messaging library that allows clients to subscribe to events that happen in the IRI.**

In the ZMQ, IRI nodes act as the publisher by adding messages to the queue when certain events happen, whereas clients act as the subscriber by taking those messages from the the queue and processing them.

When client applications subscribe to a ZMQ event, the IRI node notifies them when it happens, allowing you to create applications that harness real-time data in an IOTA network.

**Note:** Clients can subscribe to the ZMQ only if the IRI node that they're connected to has the [`ZMQ-ENABLED` configuration parameter](../references/iri-configuration-options.md#zmq-enabled) set to `true`.

## Example use cases

* Monitor one of your address for when a transaction is sent to it and confirmed
* Create a Tangle visualisation website, such as [tangle.glumb.de](www.tangle.glumb.de)
* [Try our example](../how-to-guides/subscribe-to-events-in-the-iri.md)
