# Troubleshooting

**This is a list of common or known issues that you may find while installing, configuring, or running the IRI.**

## Unable to build the IRI on Linux

**Error - trustAnchors parameter must be non-empty**
When you compile the IRI on Ubuntu 18, you may see the following error:
    java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty

See some details about this error and the solution in this [Stack Overflow answer](https://stackoverflow.com/questions/6784463/error-trustanchors-parameter-must-be-non-empty).

## The IRI won't synchronize with its neighbors

* [Make sure that you have either 6 or 7 neighbors](how-to-guides/find-neighbors.md)

* Make sure that the IRI and its neighbors are sending data among each other. Use the getNeighbors API method to see both the incoming transactions (`numberOfAllTransactions`) and the number of outgoing transactions (`numberOfSentTransactions`):
    ```bash
    curl http://localhost:14265 -X POST -H 'Content-Type: application/json' -H 'X-IOTA-API-Version: 1' -d '{"command": "getNeighbors"}'
    ```
* Make sure that you're running the [latest version of the IRI](https://github.com/iotaledgerreleases)

* Ask for more support on [Discord](https://discordapp.com/invite/fNGZXvh) in our #fullnodes channel

* It may take some time for the IRI to synchronize. Wait a while to see if the IRI synchronizes by itself.