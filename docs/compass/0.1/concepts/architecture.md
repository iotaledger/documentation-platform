# Compass Architecture

Compass is a simple application designed for minimal maintenance. The programs functions, as a coordinator, are simple as well.

## Operating Environment

Compass can be run on a number of platforms. In order to get it to run it requires the following dependencies:
- Modern GCC or Clang (or use a provided toolchain from [@iota_toolchains](https://github.com/iotaledger/toolchains))
- bazel

It's suggested to use the Docker containers to prepare and run Compass. 

## Compass components
Compass should have the following components to be operational: 
- Compass Instance
- IRI Instance
- Signing server (optional)

![System diagram of the Compass](../compass.png)

### Interacting with Compass 
As above, Compass has interactions with two external services. While it interacts with other entities, users do not interact with Compass directly apart from the initial setup.

Compass is required to interact with an IRI Node to operate. It does so via an HTTP RPC API on the default port `14265` or on whichever port is passed during initialization. 

Optionally, Compass can interact with the included signing server. This server can reduce the attack surface of Compass by moving sensitive operations to an external service. Compass interacts with the signing server via gRPC.

## Compass Limitations
Compass has been developed to complete one action: issue milestone transactions. 

Compass isn't able to modify balances or censor transactions as invalid ledger states would cause network nodes to reject milestones as invalid.
