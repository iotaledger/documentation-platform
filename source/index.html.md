---
title: IOTA Java Documentation

language_tabs:
  - java: Java
  
includes:
  - jota_IotaAPICommands
  - jota_IotaAPICore
  - jota_IotaAPI
  - jota_IotaAPIService
  - jota_dto_request_IotaAttachToTangleRequest
  - jota_dto_request_IotaBroadcastTransactionRequest
  - jota_dto_request_IotaCommandRequest
  - jota_dto_request_IotaFindTransactionsRequest
  - jota_dto_request_IotaGetBalancesRequest
  - jota_dto_request_IotaGetInclusionStateRequest
  - jota_dto_request_IotaGetTransactionsToApproveRequest
  - jota_dto_request_IotaGetTrytesRequest
  - jota_dto_request_IotaNeighborsRequest
  - jota_dto_request_IotaStoreTransactionsRequest
  - jota_dto_response_AbstractResponse
  - jota_dto_response_AddNeighborsResponse
  - jota_dto_response_AnalyzeTransactionResponse
  - jota_dto_response_BroadcastTransactionsResponse
  - jota_dto_response_FindTransactionResponse
  - jota_dto_response_GetAttachToTangleResponse
  - jota_dto_response_GetBalancesAndFormatResponse
  - jota_dto_response_GetBalancesResponse
  - jota_dto_response_GetBundleResponse
  - jota_dto_response_GetInclusionStateResponse
  - jota_dto_response_GetNeighborsResponse
  - jota_dto_response_GetNewAddressResponse
  - jota_dto_response_GetNodeInfoResponse
  - jota_dto_response_GetTipsResponse
  - jota_dto_response_GetTransactionsToApproveResponse
  - jota_dto_response_GetTransferResponse
  - jota_dto_response_GetTrytesResponse
  - jota_dto_response_InterruptAttachingToTangleResponse
  - jota_dto_response_RemoveNeighborsResponse
  - jota_dto_response_ReplayBundleResponse
  - jota_dto_response_SendTransferResponse
  - jota_dto_response_StoreTransactionsResponse
  - jota_error_ArgumentException
  - jota_error_BaseException
  - jota_error_BroadcastAndStoreException
  - jota_error_InvalidAddressException
  - jota_error_InvalidBundleException
  - jota_error_InvalidSecurityLevelException
  - jota_error_InvalidSignatureException
  - jota_error_InvalidTransferException
  - jota_error_InvalidTrytesException
  - jota_error_NoInclusionStatesException
  - jota_error_NoNodeInfoException
  - jota_error_NotEnoughBalanceException
  - jota_model_Bundle
  - jota_model_Input
  - jota_model_Inputs
  - jota_model_Neighbor
  - jota_model_Signature
  - jota_model_Transaction
  - jota_model_Transfer
  - jota_pow_ICurl
  - jota_pow_JCurl
  - jota_utils_Checksum
  - jota_utils_Constants
  - jota_utils_Converter
  - jota_utils_InputValidator
  - jota_utils_IotaAPIUtils
  - jota_utils_IotaUnitConverter
  - jota_utils_IotaUnits
  - jota_utils_Multisig
  - jota_utils_NamedThreadFactory
  - jota_utils_Parallel
  - jota_utils_SeedRandomGenerator
  - jota_utils_Signing
  - jota_utils_StopWatch
  - jota_utils_TrytesConverter


toc_footers:
  - <a href='https://github.com/tripit/slate' target='_blank'>Documentation Powered by Slate</a>

search: true
---

# Introduction

The JOTA library is a simple Java wrapper around [[IOTA]](http://www.iotatoken.com/) Node's JSON-REST HTTP interface.

It allows to connect easily using java directly to a local or a remote [[IOTA node]](https://iota.readme.io/docs/syncing-to-the-network).

* **Latest release:** 0.9.1
* **Compatibility:** fully compatible with IOTA IRI v1.2.6
* **API coverage:** 14 of 14 commands fully implemented
* **License:** Apache License 2.0 
* **Readme updated:** 2016-01-19 21:05:02 (UTC)

A list of all *IOTA* JSON-REST API commands currently supported by jota wrapper can be found in the `Commands` enum (see [here](https://github.com/davassi/JOTA/blob/master/src/main/java/jota/IotaAPICommands.java) for more details).

JOTA java wrapper is being designed to be thread-safe and simplest as possible in order to be easily mantainable, accordingly with the ongoing natural evolution of IOTA api.
All the boilerplate code for connecting to the node rest interface has been eliminated using Retrofit.

# Technologies & dependencies

The JOTA library has been designed to be used with Java6+, in order to promote compatibility with Android.

Core dependencies:

* Retrofit Client 2.1.0 [[link]](https://square.github.io/retrofit/)
* Gson JSON Processor : [[link]](https://github.com/google/gson)
* Lombok 1.16.2 [[link]](https://github.com/rzwitserloot/lombok)

Other dependencies:

* Simple Logging Facade for Java 1.7.21 [[link]](http://www.slf4j.org/)
* Apache Commons Lang 3.3.2 [[link]](http://commons.apache.org/proper/commons-lang/)

# Getting started <a name="getting-started"></a>

Connect to your local node with the default settings is quite straightforward: it requires only 2 lines of code. For example, in order to fetch the Node Info:

```java
IotaApi api = new IotaApi.Builder.build();
GetNodeInfoResponse response = api.getNodeInfo();
```


or if you need to connect to a remote node:


```java
IotaApi api = new IotaApi.Builder 
	.protocol("http")
	.nodeAddress("somewhere_over_the_rainbow")
	.port(14265) 
	.build();

GetNodeInfoResponse response = api.getNodeInfo();
```

In order to communicate with *IOTA node*, JOTA needs to be aware of your node's exact configuration. If you dont want to use the builder the easiest way of providing this information is via a `node_config.properties` file, for example:


```
    iota.node.protocol=http``****************``
    iota.node.host=127.0.0.1
    iota.node.port=14265
```

Jota is still *not* in the central maven repository.


