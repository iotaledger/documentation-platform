# Architecture

## Operating Environment

Hub can be run on a number of platforms. In order to get it run it requires the following dependencies:
- Modern GCC or Clang (or use a provided toolchain from [@iota_toolchains](https://github.com/iotaledger/toolchains))
- bazel
- pyparsing (pip install pyparsing)

## Hub Components

An operational IOTA Hub should have the following components to be operational: 
- Hub server
- Maria Database
- Exposed gRPC calls
- Signing server (optional)

![Diagram of the IOTA Hub](../iota_hub.png)


### Interacting with Hub 

In order to interact with the Hub you must communicate over gRPC. Hub includes gRPC as the only way to integrate other software with the Hub. This simplifies the types of interactions and reduces the attack surface of the Hub. 

On startup the Hub provides a gRPC server for clients to interact with. The Hub has a limited set of gRPC calls that can be used to interact with the Hub. See the API reference [here](../api-reference/reference.md)

gRPC clients are available in numerous languages. To check if a language has an officially supported library check [here](https://grpc.io/docs/)

For more information on gRPC find info [here](https://grpc.io/docs/guides/)

### Hub Limitations

**Address Reuse**

Hub prevents re-use of deposit addresses internally **BUT** does not prevent users re-submitting deposit addresses after sweeps.  Users **must** take responsibility for retiring old addresses.

However, if a user fails to follow instructions correctly there is a path to recover the funds. This advanced guide shows how to [send funds from a retired address](https://github.com/iotaledger/rpchub/blob/master/docs/hip/001-sign_bundle.md).
 
**Cold Storage**

Cold storage is a powerful feature of crypto-token storage solutions used in high-risk situations. IOTA Hub allows for internal addresses to be frozen and Cold Storage must be administered manually but as of yet, Hub has no easy to use Cold Storage solution.

For an example Cold Storage situation see [Scenario B](exchange-implementation.md#Scenario\ B)
