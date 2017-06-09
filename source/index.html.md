---
title: C# Library Documentation

language_tabs:
  - C#: C# 

toc_footers:
  - <a href='https://github.com/tripit/slate' target='_blank'>Documentation Powered by Slate</a>

includes:
  - Core_AddNeighborsRequest
  - Core_AddNeighborsResponse
  - Core_AttachToTangleRequest
  - Core_AttachToTangleResponse
  - Core_BroadcastTransactionsRequest
  - Core_EnumHelper
  - Core_FindTransactionsResponse
  - Core_GenericIotaCoreApi
  - Core_GetBalancesRequest
  - Core_GetBalancesResponse
  - Core_GetInclusionStatesRequest
  - Core_GetNodeInfoResponse
  - Core_GetTipsResponse
  - Core_GetTransactionsToApproveRequest
  - Core_GetTransactionsToApproveResponse
  - Core_GetTrytesRequest
  - Core_GetTrytesResponse
  - Core_IGenericIotaCoreApi
  - Core_IotaCoreApi
  - Core_RemoveNeighborsRequest
  - Core_RemoveNeighborsResponse
  - Core_StoreTransactionsRequest
  - Exception_IllegalAccessError
  - Exception_IllegalStateException
  - Exception_InvalidAddressException
  - Exception_InvalidBundleException
  - Exception_InvalidSignatureException
  - Exception_InvalidTailTransactionException
  - Exception_InvalidTryteException
  - Exception_InvisibleBundleTransactionException
  - Exception_IotaApiException
  - Exception_NotEnoughBalanceException
  - IotaApi
  - Model_Bundle
  - Model_Input
  - Model_Inputs
  - Model_Neighbor
  - Model_Signature
  - Model_Transaction
  - Model_Transfer
  - Utils_Checksum
  - Utils_Converter
  - Utils_Curl
  - Utils_ICurl
  - Utils_InputValidator
  - Utils_IotaUnitConverter
  - Utils_Signing
  - Utils_TrytesConverter

search: true
---

# Introduction

The Iota.Lib.CSharp library implements the [[Core API calls]](https://iota.readme.io/docs/getnodeinfo) as well as the [[proposed calls]](https://github.com/iotaledger/wiki/blob/master/api-proposal.md).

It allows to connect easily to a local or a remote [[IOTA node]](https://iota.readme.io/docs/syncing-to-the-network) using C#.

* **Latest release:** 0.9.0-beta
* **Compatibility:** fully compatible with IOTA IRI v1.2.4
* **License:** Apache License 2.0 

# Technologies & dependencies

The Iota.Lib.CSharp library has been designed to be used with .Net 4.0+.

Core dependencies:
* RestSharp 4.0.30319  [[link]](https://github.com/restsharp/RestSharp)
* Json.NET 9.0.0.0  [[link]](https://github.com/JamesNK/Newtonsoft.Json)

# Getting started

Connect to your node is quite straightforward: it requires only 2 lines of code. For example, in order to fetch the Node Info:

```cs
IotaApi iotaApi = new IotaApi("node.iotawallet.info", 14265);
GetNodeInfoResponse nodeInfo = iotaApi.GetNodeInfo();
```

You can easily add the library to your Visual Studio project using the NuGet package manager or in the Package Manager Console with this command:

```PowerShell
Install-Package Iota.Lib.CSharp -Pre
```
