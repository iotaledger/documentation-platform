# Run an IRI node

**When you run the IRI on a computer, it becomes an IRI node that gives you direct access to an IOTA network. By running an IRI node, you help the IOTA network to become more distributed by adding to the number of ledgers and validating your neighbor IRI node's transactions**

## Prerequisites

* To run the IRI, your computer must meet the following minimum requirements:
    * 4GB RAM
    * 64-bit processor
    * An public IP address: Either a static IP address or a dynamic IP address that's connected to a dynamic DNS such as [noip.com](https://www.noip.com/remote-access)

* If you don't want to [prune transactions from the ledger](../how-to-guides/prune-transactions-from-the-ledger.md), we recommend that your computer has at least 60GB of free disk space to store the [ledger](../concepts/the-ledger.md)

* You must have the [URLs or the IP addresses of at least 6 neighbor nodes](../how-to-guides/find-neighbors.md) who are also running the same version of the IRI on the same IOTA network

* By default, the IRI uses the following ports. You must map these ports to your computer's public IP address.
    * **UDP neighbor peering port:** 14600
    * **TCP neighbor peering port:** 14600
    * **TCP API port:** 14265

    Or, you can change these ports in the configuration options.

## Run an IRI node on Linux

You have two options for downloading the latest IRI software:
* Download the pre-built Java file from GitHub (quickest option)
* Build the Java file from the source code on GitHub

### Prerequisites

To download the IRI on Linux, you must have root priviledges.

### Download the pre-built IRI Java file

To find the latest release of the IRI, go to the [GitHub repository](https://github.com/iotaledger/iri/releases).

1. Install the latest system security patches

    ```bash
    $ sudo apt-get update
    $ sudo apt-get upgrade -y
    ```

2. [Install Java 8 JRE](https://docs.oracle.com/javase/8/docs/technotes/guides/install/linux_jre.html#CFHIEGAA)
    **Note:** Do not install any other version of the Java JRE.

3. Download the latest IRI Java file

    ```bash
    $ wget https://github.com/iotaledger/iri/releases/download/v${VERSION}/iri-${VERSION}.jar
    ```

**Note:** Replace the ${VERSION} variable with the latest version number of the IRI.

### Build the IRI Java file from the source code

Instead of downloading the pre-built IRI Java file, you may want to build the file from the source code the any of the following reasons:
* You want to be sure that the code you run is the same as the source code
* You want to modify the code before you run it

1. Install the [Maven](https://maven.apache.org/what-is-maven.html) build tool

    ```bash
    $ export MAVEN_VERSION=3.5.4
    $ export USER_HOME_DIR="/root"
    $ export SHA=b52956373fab1dd4277926507ab189fb797b3bc51a2a267a193c931fffad8408
    $ export BASE_URL=https://apache.osuosl.org/maven/maven-3/${MAVEN_VERSION}/binaries
    $ sudo apt-get update && apt-get install -y --no-install-recommends curl
    $ sudo mkdir -p /usr/share/maven /usr/share/maven/ref
    $ sudo curl -fsSL -o /tmp/apache-maven.tar.gz ${BASE_URL}/apache-maven-${MAVEN_VERSION}-bin.tar.gz

    # Check the sha256 checksum, the output should read 'OK' if the checksum is correct

    $ echo "${SHA} /tmp/apache-maven.tar.gz" | sha256sum -c -
    $ sudo tar -xzf /tmp/apache-maven.tar.gz -C /usr/share/maven --strip-components=1
    $ sudo rm -f /tmp/apache-maven.tar.gz
    $ export MAVEN_HOME=/usr/share/maven
    $ export MAVEN_CONFIG="${USER_HOME_DIR}/.m2"
    ```

**Note:** Change the USER_HOME_DIR variable to your chosen path.

2. Install Git

    ```bash
    $ sudo apt-get update && apt-get install -y --no-install-recommends git
    ```

3. Build the IRI Java file

    ```bash
    $ git clone https://github.com/iotaledger/iri.git
    $ cd iri

    # Checkout the latest tag

    $ export TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
    $ git checkout ${TAG}
    $ mvn clean package
    ```
    The IRI Java file is built in a directory called `target`.

### Run the IRI

1. Set up some variables (change the IRI_JAR_PATH variable to the URL of your IRI Java file)

    ```bash
    $ export IRI_JAR_PATH="/path-to-your-iri-java-file"
    $ export JAVA_OPTIONS="-XX:+UnlockExperimentalVMOptions -XX:+DisableAttachMechanism -XX:InitiatingHeapOccupancyPercent=60 -XX:G1MaxNewSizePercent=75 -XX:MaxGCPauseMillis=10000 -XX:+UseG1GC"
    $ export JAVA_MIN_MEMORY=2G
    $ export JAVA_MAX_MEMORY=4G
    ```

    **Note:** The `JAVA_OPTIONS` variable contains commands that optimise the Java virtual machine for the IRI.
    
2. Configure the IRI by adding the [configuration options](../references/iri-configuration-options.md) either in a .iri file in the same directory as your IRI Java file or in the command line. Any configuration options that you add in the command line override the parameters in the IRI configuration file.

    **Note:** If you want to run a permanode (keep all transactions in the ledger), set the [`LOCAL_SNAPSHOTS_PRUNING_ENABLED` configuration parameter](../references/iri-configuration-options.md#local-snapshots-enabled) to `false`.

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

## Run an IRI node from a Docker container

The IRI Docker container is suitable for the following operating systems:
* Linux
* MacOSX
* Windows

You have two options for downloading the IRI Docker container:
* [Download the pre-built Docker container]((#download-the-pre-built-iri-docker-container))(quickest option)
* [Build the Docker container from the source code](#build-the-iri-docker-container-from-the-source-code)

### Prerequisites

To build the IRI Docker container, Docker 17.05+ (for multi-stage build support) must be installed on your computer.

1. [Install Docker](https://docs.docker.com/install/#supported-platforms)

2. Make sure that Docker is installed

    ```bash
    $ docker run hello-world
    ```

    You should see some Docker information in the output.
  
### Download the pre-built IRI Docker container

```bash
$ docker pull iotaledger/iri:latest
```

### Build the IRI Docker container from the source code

Instead of downloading the pre-built Docker container, you may want to build the file from the source code the any of the following reasons:
* You want to be sure that the code you run is the same as the source code
* You want to modify the code before you run it

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. Make sure that Git is installed

    ```bash
    $ git --version
    ```

    You should see the version number of your Git installation.

3. Build the latest version of the IRI

    ```bash
    $ git clone https://github.com/iotaledger/iri.git
    $ cd iri
    $ export TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
    $ git checkout ${TAG}
    $ docker build -t iri .
    ```
### Run the IRI

1. Configure the IRI by adding the [configuration options](../references/iri-configuration-options.md) either in a .iri file in the same directory as your IRI Java file or in the command line. Any configuration options that you add in the command line override the parameters in the IRI configuration file.

    **Note:** If you want to run a permanode (keep all transactions in the ledger), set the [`LOCAL_SNAPSHOTS_PRUNING_ENABLED` configuration parameter](../references/iri-configuration-options.md#local-snapshots-enabled) to `false`.

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

The `latestSolidSubtangleMilestoneIndex` field is the index of the latest milestone for which the IRI node's ledger has all the transactions that the milestone directly and indirectly references.

To check these fields, do the following:

```bash
$ sudo apt install curl jq
$ curl -s http://localhost:14265 -X POST -H 'X-IOTA-API-Version: 1' -H 'Content-Type: application/json' -d '{"command": "getNodeInfo"}' | jq
```

**Notes:**
* The [jq](https://stedolan.github.io/jq/) tool is a command-line JSON processor that helps you to display and manipulate JSON data. This tool is optional.
* It may take some time for the IRI to synchronize. For help with any issues, read our [troubleshooting guide](../references/troubleshooting.md).

## Next steps

* [Interact with the IRI](../how-to-guides/interact-with-the-iri.md)
* [Subscribe to events in the IRI](../how-to-guides/subscribe-to-events-in-the-iri.md)


