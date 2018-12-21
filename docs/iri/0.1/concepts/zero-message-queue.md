# Zero message queue

[Zero message queue](http://zguide.zeromq.org/page:all) (ZMQ) is an open-source, real-time messaging library that allows client applications to subscribe to notifications of [events that happen in the IRI](/iri/references/zero-message-queue-events.md). In the IRI, the ZMQ library is wrapped in a class called [MessageQ](https://github.com/iotaledger/iri/blob/5883633a06312602c4a2439906d7ade49ed7f2f4/src/main/java/com/iota/iri/zmq/MessageQ.java#L34).

## How it works

In the ZMQ, the IRI acts as the publisher by adding messages to the queue when certain events happen, and clients act as the subscriber by taking those messages from the the queue and processing them.

When client applications [subscribe to a ZMQ event](/iri/how-to-guides/subscribing-to-events-in-the-iri.md), the IRI notifies them when it happens, allowing you to create applications that harness real-time data from IRI nodes in an IOTA network.

**Note:** Clients can subscribe to the ZMQ only if the node they're connected to has the [`ZMQ-ENABLED` configuration parameter](/iri/references/iri-configuration-options.md#zmq-enabled) set to `true`.

## Example use cases

* Monitor one of your address for when a transaction is sent to it and confirmed
* Create a Tangle visualisation website, such as [tangle.glumb.de](www.tangle.glumb.de)
* [Try our example](/iri/how-to-guides/subscribing-to-events-in-the-iri.md)