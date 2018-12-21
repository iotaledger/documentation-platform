# Sending requests to the IRI

When you [run the IRI (IOTA reference implementation)](/iri/how-to-guides/running-the-iri.md), it waits to receive transactions from clients on the API port that you chose in the [`PORT` configuration parameter](/iri/references/iri-configuration-options.md#port).

The IRI always accepts REST API requests to its local IP address from computers on the same network.

**Note:** If the [`REMOTE` configuration parameter](/iri/references/iri-configuration-options.md#remote) is set to `true`, anyone can connect to the IRI through its public URL or its public IP address.

In the following how-to guide we use NodeJS.

## Requesting information about the IRI

You can use the [getNodeInfo API call](https://iota.readme.io/v1.5.5/reference#getnodeinfo) to request general information about the IRI.

### Prerequisites

To use the code samples in this guide, your computer must have the following:

* Node.js 8+
* Node package manager (npm)
* A code editor
* Access to a terminal
* An Internet Connection

1. Create a working directory called node-info-example
    ```bash
    $ mkdir node-info-example && cd node-info-example
    ```
2. In the node-info-example directory, install the [request module](https://github.com/request/request) and the IOTA library by doing the following:
    ```bash
    $ npm install request --save
    $ npm install iota.lib.js --save
    ```
3. Create a file called index.js in the node-info-example directory
4. In the index.js file, copy and paste the following code:
    ```javascript
    var request = require('request');

    var command = {
        'command': 'getNodeInfo'
    }

    var options = {
    url: 'https://nodes.devnet.iota.org:443',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-IOTA-API-Version': '1',
        'Content-Length': Buffer.byteLength(JSON.stringify(command))
    },
    json: command
    };

    request(options, function (error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log(data);
        }
    });
    ```
    In the console, you should see data output that looks like this following:
    ```bash
    {
    "appName": "IRI Testnet",
    "appVersion": "1.0.8.nu",
    "duration": 1,
    "jreAvailableProcessors": 4,
    "jreFreeMemory": 91707424,
    "jreMaxMemory": 1908932608,
    "jreTotalMemory": 122683392,
    "latestMilestone": "VBVEUQYE99LFWHDZRFKTGFHYGDFEAMAEBGUBTTJRFKHCFBRTXFAJQ9XIUEZQCJOQTZNOOHKUQIKOY9999",
    "latestMilestoneIndex": 107,
    "latestSolidSubtangleMilestone": "VBVEUQYE99LFWHDZRFKTGFHYGDFEAMAEBGUBTTJRFKHCFBRTXFAJQ9XIUEZQCJOQTZNOOHKUQIKOY9999",
    "latestSolidSubtangleMilestoneIndex": 107,
    "neighbors": 2,
    "packetsQueueSize": 0,
    "time": 1477037811737,
    "tips": 3,
    "transactionsToRequest": 0
    }
    ```
## Next steps

* Use your new knowledge of the [IRI API](https://iota.readme.io/v1.5.5/reference) to build an application that sends data to the IRI and requests from the IRI.
* [Subscribe to real-time events](/iri/how-to-guides/subscribing-to-events-in-the-iri.md) that an IRI node publishes to a message queue.





