
---
### [getNodeInfo](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/service/API.java#L716)
 [AbstractResponse](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/service/dto/AbstractResponse.java) getNodeInfoStatement()

Returns information about your node.

<Tabs> 

<Tab language="Python">

<Section type="request">

```Python
import urllib2
import json

command = {"command": "getNodeInfo"}

stringified = json.dumps(command)

headers = {
    'content-type': 'application/json',
    'X-IOTA-API-Version': '1'
}

request = urllib2.Request(url="http://localhost:14265", data=stringified, headers=headers)
returnData = urllib2.urlopen(request).read()

jsonData = json.loads(returnData)

print jsonData
```
</Section>

<Section type="response">

```json
{"duration": "412", "appName": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "appVersion": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "jreAvailableProcessors": "686", "jreFreeMemory": "missing_data", "jreMaxMemory": "missing_data", "jreTotalMemory": "missing_data", "jreVersion": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestMilestone": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestMilestoneIndex": "399", "latestSolidSubtangleMilestone": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestSolidSubtangleMilestoneIndex": "196", "milestoneStartIndex": "517", "neighbors": "137", "packetsQueueSize": "163", "time": "missing_data", "tips": "178", "transactionsToRequest": "862"}
```
</Section>

<Section type="error">

```json
{"error": "'command' parameter has not been specified"}
```
</Section>

<Tab language="NodeJS">

<Section type="request">

```javascript
var request = require('request');

var command = {"command": "getNodeInfo"}

var options = {
  url: 'http://localhost:14265',
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
</Section>

<Section type="response">

```json
{"duration": "194", "appName": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "appVersion": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "jreAvailableProcessors": "478", "jreFreeMemory": "missing_data", "jreMaxMemory": "missing_data", "jreTotalMemory": "missing_data", "jreVersion": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestMilestone": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestMilestoneIndex": "754", "latestSolidSubtangleMilestone": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestSolidSubtangleMilestoneIndex": "390", "milestoneStartIndex": "997", "neighbors": "616", "packetsQueueSize": "109", "time": "missing_data", "tips": "76", "transactionsToRequest": "219"}
```
</Section>

<Section type="error">

```json
{"error": "'command' parameter has not been specified"}
```
</Section>

<Tab language="cURL">

<Section type="request">

```bash
curl http://localhost:14265 
-X POST 
-H 'Content-Type: application/json' 
-H 'X-IOTA-API-Version: 1' 
-d '{"command": "getNodeInfo"}'
```
</Section>

<Section type="response">

```json
{"duration": "782", "appName": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "appVersion": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "jreAvailableProcessors": "253", "jreFreeMemory": "missing_data", "jreMaxMemory": "missing_data", "jreTotalMemory": "missing_data", "jreVersion": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestMilestone": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestMilestoneIndex": "609", "latestSolidSubtangleMilestone": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "latestSolidSubtangleMilestoneIndex": "800", "milestoneStartIndex": "315", "neighbors": "964", "packetsQueueSize": "486", "time": "missing_data", "tips": "964", "transactionsToRequest": "868"}
```
</Section>

<Section type="error">

```json
{"error": "'command' parameter has not been specified"}
```
</Section>
</Tabs>





***

Returns [GetNodeInfoResponse](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/service/dto/GetNodeInfoResponse.java)

|Return | Description |
|--|--|
| duration | The duration it took to process this command in milliseconds |
| appName | Name of the IOTA software you're currently using (IRI stands for IOTA Reference Implementation) |
| appVersion | The version of the IOTA software you're currently running. |
| jreAvailableProcessors | Available cores on your machine for JRE. |
| jreFreeMemory | The amount of free memory in the Java Virtual Machine. |
| jreMaxMemory | The maximum amount of memory that the Java virtual machine will attempt to use. |
| jreTotalMemory | The total amount of memory in the Java virtual machine. |
| jreVersion | The JRE version this node runs on |
| latestMilestone | The hash of the latest transaction that was signed off by the coordinator. |
| latestMilestoneIndex | Index of the latest milestone. |
| latestSolidSubtangleMilestone | The hash of the latest transaction which is solid and is used for sending transactions. For a milestone to become solid your local node must basically approve the subtangle of coordinator-approved transactions, and have a consistent view of all referenced transactions. |
| latestSolidSubtangleMilestoneIndex | Index of the latest solid subtangle. |
| milestoneStartIndex | Gets the start milestone index |
| neighbors | Number of neighbors you are directly connected with. |
| packetsQueueSize | Packets which are currently queued up. |
| time | Current UNIX timestamp. |
| tips | Number of tips in the network. |
| transactionsToRequest | When a node receives a transaction from one of its neighbors, this transaction is referencing two other transactions t1 and t2 (trunk and branch transaction). If either t1 or t2 (or both) is not in the node's local database, then the transaction hash of t1 (or t2 or both) is added to the queue of the "transactions to request". At some point, the node will process this queue and ask for details about transactions in the "transaction to request" queue from one of its neighbors. By this means, nodes solidify their view of the tangle (i.e. filling in the unknown parts). |
***
