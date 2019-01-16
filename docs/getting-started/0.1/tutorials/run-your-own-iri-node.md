# Run your own IRI node

**IRI nodes are the core of an IOTA network. Clients must send their transactions to IRI nodes to have them validated and recorded in the ledger.**

Without IRI nodes, IOTA networks wouldn't exist. No one would be able to send transactions because there would be no way of recording who sent what to whom.

By running your own IRI node, you have the following benefits:
* You have your own direct access to a ledger on an IOTA network instead of having to connect to someone else's IRI node
* You help the IOTA network to become more distributed by adding to the number of ledgers and validating other users' transactions

In this tutorial, you're going to run your own IRI node in a [Docker](https://www.docker.com/) container.

The IRI Docker container is suitable for the following operating systems:
* Linux
* MacOSX
* Windows

## Prerequisites

To complete this tutorial, you need the following:

* Access to a terminal
* An Internet connection

<hr>

1. [Install Docker](https://docs.docker.com/install/#supported-platforms)
2. Make sure that Docker is installed
    ```bash
    $ docker run hello-world
    ```
If Docker is installed, you should see some Docker information in the output.

3. Download the pre-built Docker container
    ```bash
    $ docker pull iotaledger/iri:latest
    ```
4. Run the IRI
    ```bash
    $ docker run -d -p 14265:14265 -p 15600:15600 -p 14600:14600/udp -v /my-node:/iri/data --name iri iotaledger/iri:latest --remote -p 14265
    ```
Your IRI node is now running and you can interact with it through the IRI API on the following URL:
http://localhost.com:14265

5. [Download cURL for your operating system](https://curl.haxx.se/download.html)
6. Use cURL to send a request to the [`getNodeInfo` endpoint](https://iota.readme.io/reference#getnodeinfo):
    ```bash
    $ curl http://localhost:14265
    $ -X POST 
    $ -H 'Content-Type: application/json'
    $ -H 'X-IOTA-API-Version: 1'
    $ -d '{"command": "getNodeInfo"}'
    ```
    You should see something like the following in the console:
    ```json
    {
    "appName": "IRI",
    "appVersion":"1.5.5",
    "jreAvailableProcessors":8,
    "jreFreeMemory":25013138032,
    "jreVersion":"1.8.0_181",
    "jreMaxMemory":51469877248,
    "jreTotalMemory":31622422528,"latestMilestone":"WB9YXQQTVHNPWXHBCVEWVPWZNJAFSGPVYWPEJXVPGJIFJFFHLFAIFPAWEHJGKEIHMYAUHXOPIUGZOA999",
    "latestMilestoneIndex":1014730,"latestSolidSubtangleMilestone":"WB9YXQQTVHNPWXHBCVEWVPWZNJAFSGPVYWPEJXVPGJIFJFFHLFAIFPAWEHJGKEIHMYAUHXOPIUGZOA999",
    "latestSolidSubtangleMilestoneIndex":1014730,
    "milestoneStartIndex":434525,
    "neighbors":7,
    "packetsQueueSize":0,
    "time":1545903340781,
    "tips":4995,
    "transactionsToRequest":0,
    "features":["addNeighbors", "getNeighbors", "removeNeighbors", "attachToTangle", "interruptAttachToTangle"],
    "duration":0
    ```
## Next steps

Try [sending your first data transaction](tutorials/send-your-first-data-transaction-with-nodejs.md) to your IRI node. In the example code, change the `provider` field to http://localhost.com:14265:
```js
const iota = Iota.composeAPI({
    provider: 'http://localhost.com:14265'
});
```
