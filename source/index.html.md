---
title: Sandbox Documentation

language_tabs:
    - shell

toc_footers:
    - <a href='#'>Javascript Library</a>
    - <a href='#'>IOTA Core Documentation</a>
    - <a href='#'>Other Libraries</a>

search: true
---

# Introduction

The IOTA Sandbox is a service provided by the Foundation that makes it possible to start using IOTA without having to go through the hassle of installing, configuring and setting up your local client. Thanks to our redundant node setup and a dedicated GPU farm, you don't even have to worry about doing Proof of Work, which means that you can start testing and developing new applications, even with tiny IoT devices, all by simply making API calls to the Sandbox environment.

---

# Authentication

It should be noted that all API calls are rate-limited, especially `attachToTangle` and `getTransactionsToApprove`. This means that you need to get an API token in order to fully use the Sandbox environment. Currently there is no automated way of generating the tokens. Reach out to Dominik (`dom`) on Slack or via email: foundation@iotatoken.com to get a token.

---

# Libraries

The easiest way to use the Sandbox environment is to simply use one of the official libraries in your preferred language. With the libraries you don't have to worry about the different endpoints or the queue itself, which means that you can use the Sandbox directly without any hassle. Currently we have Sandbox support for Javascript, but the Python, Java and C# libraries are under way.

## Javascript

```
// Create IOTA instance with host and port as provider
var iota = new IOTA({
    'provider'  : 'http://sandbox.iotatoken.com/api/v1/',
    'sandbox'   :  true,
    'token'     : 'EXAMPLE-TOKEN-HERE'
});
```

The official Javascript library ([iota.lib.js](https://github.com/iotaledger/iota.lib.js)), takes care of the heavy-lifting for you and has implemented some logic to easily interact with the Sandbox environment. Simply install it either via npm, bower or directly in the browser.

When instantiating IOTA, use the Sandbox with the respective endpoint and version as the provider for the library (e.g. `http://sandbox.iotatoken.com/api/v1/` is the current, only valid provider of the Sandbox). Make sure to set the `sandbox` flag as true and provide a `token` in case you have one.    

---

# API Endpoints

The Sandbox itself is hosted at `http://sandbox.iotatoken.com/api/v1`. Currently there is only one version of the API, but that might change in the future, giving you flexibility to choose which API endpoints to use. In case you want to interact with the Sandbox directly and not use one of the provided libraries, you can send a `POST` (for commands) or `GET` (for jobs) HTTP request to the API endpoints directly.

## commands

```
curl http://sandbox.iotatoken.com/api/v1/commands \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"command": "getNodeInfo"}'
```

All the standard API calls that are exposed by IRI (as can be seen here) are made available via the `/api/v1/commands` endpoint and all have to to be sent via a `POST` request. It should be noted that several commands (e.g. `removeNeighbors`, `addNeighbors`), do not work.

Another important thing to keep in mind is that all the API calls, except for `attachToTangle`, expect the same inputs and output to the same results. `attachToTangle` is a special case, as we have implemented a queue for doing the Proof of Work (which is computationally intensive and requires our GPU farm) asynchronously.

### attachToTangle

```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"command": "attachToTangle", "trunkTransaction": "JVMTDGDPDFYHMZPMWEKKANBQSLSDTIIHAYQUMZOKHXXXGJHJDQPOMDOMNRDKYCZRUFZROZDADTHZC9999", "branchTransaction": "P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999", "minWeightMagnitude": 13, "trytes": ["YOURTRYTESHERE"]}' \
     "https://sandbox.iotatoken.com/api/v1/commands"
```

> The above command returns JSON structured like this:

```json
{
  "id":"70fef55d-6933-49fb-ae17-ec5d02bc9117",
  "status":"QUEUED",
  "createdAt":1483574581,
  "startedAt":null,
  "finishedAt":null,
  "command":"attachToTangle",
  "attachToTangleRequest": {
    "command":"attachToTangle",
    "trunkTransaction":"JVMTDGDPDFYHMZPMWEKKANBQSLSDTIIHAYQUMZOKHXXXGJHJDQPOMDOMNRDKYCZRUFZROZDADTHZC9999",
    "branchTransaction":"P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999",
    "minWeightMagnitude":13,
    "trytes": [
      "YOURTRYTESHERE"
    ]
  }
}
```

The [attachToTangle](https://iota.readme.io/docs/attachtotangle) endpoint expects,
just like the others, the same object to be posted to it, but instead of returning the
trytes directly it returns a job that will be handled asynchronously.

The status of the job can then be queried via the `/jobs/:id` endpoint. You can get the job id directly from the returned JSON object of the `attachToTangle` call.

---


## jobs

> **Get A Job**

```
curl "https://sandbox.iotatoken.com/api/v1/jobs/70fef55d-6933-49fb-ae17-ec5d02bc9117"
```

> The above command returns JSON structured like this:

```json
{
  "id":"70fef55d-6933-49fb-ae17-ec5d02bc9117",
  "status":"QUEUED",
  "createdAt":1483574581,
  "startedAt":null,
  "finishedAt":null,
  "command":"attachToTangle",
  "attachToTangleRequest": {
    "command":"attachToTangle",
    "trunkTransaction":"JVMTDGDPDFYHMZPMWEKKANBQSLSDTIIHAYQUMZOKHXXXGJHJDQPOMDOMNRDKYCZRUFZROZDADTHZC9999",
    "branchTransaction":"P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999",
    "minWeightMagnitude":13,
    "trytes": [
      "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999A9RGRKVGWMWMKOLVMDFWJUHNUNYWZTJADGGPZGXNLERLXYWJE9WQHWWBMCPZMVVMJUMWWBLZLNMLDCGDJ999999999999999999999999999999999999999999999999999999YGYQIVD99999999999999999999TXEFLKNPJRBYZPORHZU9CEMFIFVVQBUSTDGSJCZMBTZCDTTJVUFPTCCVHHORPMGCURKTH9VGJIXUQJVHK999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
    ]
  }
}
```

> Failure response:

```json
{
  "id":"70fef55d-6933-49fb-ae17-ec5d02bc9117",
  "status":"FAILED",
  "createdAt":1483574581,
  "startedAt":1483574781,
  "finishedAt":1483574781,
  "command":"attachToTangle",
  "attachToTangleRequest": {
    "command":"attachToTangle",
    "trunkTransaction":"JVMTDGDPDFYHMZPMWEKKANBQSLSDTIIHAYQUMZOKHXXXGJHJDQPOMDOMNRDKYCZRUFZROZDADTHZC9999",
    "branchTransaction":"P9KFSJVGSPLXAEBJSHWFZLGP9GGJTIO9YITDEHATDTGAFLPLBZ9FOFWWTKMAZXZHFGQHUOXLXUALY9999",
    "minWeightMagnitude":13,
    "trytes": []
  },
  "error": {"message": "no trytes supplied"}
}
```

Use the `api/v1/jobs/:id` endpoint to get the current status of a job that has been queued by the sandbox. The job `status` can take the following values:

Job Status | Description |
---------- | -------------
QUEUED | job is waiting to be executed |
RUNNING | **currently not in use** |
FAILED | job failed during execution |
ABORTED | **currently not in use** |
FINISHED | job finished successfully |
