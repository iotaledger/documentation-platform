# Run the IRI

**The IRI can be run on any computer that meets the prerequisites.**

## Prerequisites

* To run the IRI, your computer must meet the following minimum requirements:
    * 4GB RAM
    * 64-bit processor
    * An public IP address: Either a static IP address or a dynamic IP address that's connected to a dynamic DNS such as [noip.com](https://www.noip.com/remote-access)

* If you don't want to run a [local snapshot node](introduction/overview.md#types-of-iri-node), we recommend that your computer has at least 60GB of free disk space to store the [ledger](concepts/the-ledger.md)

* You must have the [URLs or the IP addresses of at least 6 neighbor nodes](how-to-guides/find-neighbors.md) who are also running the same version of the IRI on the same IOTA network

* By default, the IRI uses the following ports. You must map these ports to your computer's public IP address.
    * **UDP neighbor peering port:** 14600
    * **TCP neighbor peering port:** 14600
    * **TCP API port:** 14265

    Or, you can change these ports in the configuration options.

## Run the IRI on Linux

1. Set up some variables (change the IRI_JAR_PATH variable to the URL of your IRI Java file)

    ```bash
    $ export IRI_JAR_PATH="/path-to-your-iri-java-file"
    $ export JAVA_OPTIONS="-XX:+UnlockExperimentalVMOptions -XX:+DisableAttachMechanism -XX:InitiatingHeapOccupancyPercent=60 -XX:G1MaxNewSizePercent=75 -XX:MaxGCPauseMillis=10000 -XX:+UseG1GC"
    $ export JAVA_MIN_MEMORY=2G
    $ export JAVA_MAX_MEMORY=4G
    ```

    **Note:** The `JAVA_OPTIONS` variable contains commands that optimise the Java virtual machine for the IRI.
    
2. Configure the IRI by adding the [configuration options](references/iri-configuration-options.md) either in a .iri file in the same directory as your IRI Java file or in the command line. Any configuration options that you add in the command line override the parameters in the IRI configuration file.

**Note:** The only configuration option that you **must** add is the `PORT` parameter. If you want to run a permanode, set the [`LOCAL_SNAPSHOTS_PRUNING_ENABLED` configuration parameter](iri-configuration-options.md#local-snapshots-enabled) to `false`.

3. Make a directory to keep the database and the IXI (IOTA exchange interface folders)

    ```bash
    $ mkdir -p /path-to-data
    $ cd /path-to-data
    ```

    **Note:** You can change the `/path-to-data` string to your chosen directory.

4. Run the IRI

    ```bash
    $ java ${JAVA_OPTIONS} -Xms${JAVA_MIN_MEMORY} -Xmx${JAVA_MAX_MEMORY} -Djava.net.preferIPv4Stack=true -jar ${IRI_JAR_PATH}
    ```

## Run the IRI in a Docker container

1. Configure the IRI by adding the [configuration options](references/iri-configuration-options.md) either in a .iri file in the same directory as your IRI Java file or in the command line. Any configuration options that you add in the command line override the parameters in the IRI configuration file.

    **Note:** The only configuration option that you **must** add is the `PORT` option.

2. Run the IRI

    ```bash
    $ docker run -d -p 14265:14265 -p 15600:15600 -p 14600:14600/udp -v /path/to/data:data --name iri iotaledger/iri:latest --remote -p 14265
    ```

    **Notes:**
    * The `/path-to-data` directory contains the ledger database and the IXI (IOTA exchange interface directories. You can change the name of this directory.
    * If you built the IRI Docker container from the source code, you must change the value of the `-name` flag to `iri iri:latest`
    * To have the IRI Docker container restart on every boot, add the `--restart=always` flag to the Docker RUN command

### Log the IRI output to the console

The IRI Docker container runs in daemon mode, so if you want to see the IRI logs, do the following:
    
```bash
$ docker logs -f iri
```
### Stop the IRI

```bash
$ docker stop iri
```

### Remove the IRI Docker container

```bash
$ docker rm iri
```

## Check that the IRI is synchronized

The IRI is considered synchronized when the `latestMilestoneIndex` field is equal to the `latestSolidSubtangleMilestoneIndex` field.

The `latestMilestoneIndex` field is the index of the latest milestone that the IRI has received from its neighbors.

The `latestSolidSubtangleMilestoneIndex` field is the index of the latest milestone for which the IRI has in its ledger all the transactions that the milestone directly and indirectly references.

To check these fields, do the following:

```bash
$ sudo apt install curl jq
$ curl -s http://localhost:14265 -X POST -H 'X-IOTA-API-Version: 1' -H 'Content-Type: application/json' -d '{"command": "getNodeInfo"}' | jq
```

**Notes:**
* The [jq](https://stedolan.github.io/jq/) tool is a command-line JSON processor that helps you to display and manipulate JSON data. This tool is optional.
* It may take some time for the IRI to synchronize. For help with any issues, read our [troubleshooting guide](references/troubleshooting.md).

## Next steps

* [Interact with the IRI](how-to-guides/interact-with-the-iri.md)
* [Subscribe to events in the IRI](how-to-guides/subscribe-to-events-in-the-iri.md)


