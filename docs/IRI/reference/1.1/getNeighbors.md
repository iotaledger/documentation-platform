
---
### [getNeighbors](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/service/API.java#L697)
 [AbstractResponse](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/service/dto/AbstractResponse.java) getNeighborsStatement()

Returns the set of neighbors you are connected with, as well as their activity statistics (or counters).
 The activity counters are reset after restarting IRI.

<Tabs> 

<Tab language="Python">

<Section type="request">

```Python
import urllib2
import json

command = {"command": "getNeighbors"}

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
{"duration": "795", "neighbors": ["{ 
"address": "/8.8.8.8:14265", 
"numberOfAllTransactions": 859, 
"numberOfInvalidTransactions": 256, 
"numberOfNewTransactions": 472 
}", "{ 
"address": "/8.8.8.8:14265", 
"numberOfAllTransactions": 84, 
"numberOfInvalidTransactions": 90, 
"numberOfNewTransactions": 482 
}"]}
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

var command = {"command": "getNeighbors"}

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
{"duration": "738", "neighbors": ["{ 
"address": "/8.8.8.8:14265", 
"numberOfAllTransactions": 118, 
"numberOfInvalidTransactions": 665, 
"numberOfNewTransactions": 176 
}", "{ 
"address": "/8.8.8.8:14265", 
"numberOfAllTransactions": 266, 
"numberOfInvalidTransactions": 670, 
"numberOfNewTransactions": 759 
}"]}
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
-d '{"command": "getNeighbors"}'
```
</Section>

<Section type="response">

```json
{"duration": "688", "neighbors": ["{ 
"address": "/8.8.8.8:14265", 
"numberOfAllTransactions": 877, 
"numberOfInvalidTransactions": 406, 
"numberOfNewTransactions": 451 
}", "{ 
"address": "/8.8.8.8:14265", 
"numberOfAllTransactions": 468, 
"numberOfInvalidTransactions": 842, 
"numberOfNewTransactions": 402 
}"]}
```
</Section>

<Section type="error">

```json
{"error": "'command' parameter has not been specified"}
```
</Section>
</Tabs>





***

Returns [GetNeighborsResponse](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/service/dto/GetNeighborsResponse.java)

|Return | Description |
|--|--|
| duration | The duration it took to process this command in milliseconds |
| neighbors | The list of neighbors, including the following stats: address, connectionType, numberOfAllTransactions, numberOfRandomTransactionRequests, numberOfNewTransactions, numberOfInvalidTransactions, numberOfSentTransactions |
***
