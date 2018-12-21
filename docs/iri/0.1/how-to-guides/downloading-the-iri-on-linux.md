# Downloading the IRI on Linux

The IRI gives you direct access to an IOTA network, allowing you to interact with the ledger whenever you like and send that ledger across other nodes in the same network.

You have two options for downloading the latest IRI software:
* Download the pre-built Java file from GitHub (quickest option)
* Build the Java file from the source code on GitHub

| **Table of contents**                  |        
| :------------------- |
|[Prerequisites](#prerequisites)|
|[Downloading the pre-built IRI Java file](#downloading-the-pre-built-iri-java-file)|
|[Building the IRI Java file from the source code](#building-the-iri-java-file-from-the-source-code)|
|[Next steps](#next-steps)|
||

## Prerequisites

To download the IRI on Linux, you must have root priviledges.

## Downloading the pre-built IRI Java file

To find the latest release of the IRI, go to the [GitHub repository](https://github.com/iotaledger/iri/releases).

1. Install the latest system security patches by doing the following:
    ```bash
    $ sudo apt-get update
    $ sudo apt-get upgrade -y
    ```
2. [Install Java 8 JRE](https://docs.oracle.com/javase/8/docs/technotes/guides/install/linux_jre.html#CFHIEGAA)
    **Note:** Do not install any other version of the Java JRE.
3. Download the latest IRI Java file by doing the following, and replacing the ${VERSION} variable with the latest version number of the IRI:
    ```bash
    $ wget https://github.com/iotaledger/iri/releases/download/v${VERSION}/iri-${VERSION}.jar
    ```

## Building the IRI Java file from the source code

Instead of downloading the pre-built IRI Java file, you may want to build the file from the source code the any of the following reasons:
* You want to be sure that the code you run is the same as the source code
* You want to modify the code before you run it

1. Install the [Maven](https://maven.apache.org/what-is-maven.html) build tool by doing the following and changing the USER_HOME_DIR variable to your chosen path:
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
2. Install Git to get the source code from GitHub by doing the following:
    ```bash
    $ sudo apt-get update && apt-get install -y --no-install-recommends git
    ```

3. Build the IRI Java file by doing the following:

    ```bash
    $ git clone https://github.com/iotaledger/iri.git
    $ cd iri

    # Checkout the latest tag

    $ export TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
    $ git checkout ${TAG}
    $ mvn clean package
    ```
    The IRI Java file will be built in a directory called `target`.

## Next steps

* [Running the IRI on Linux](/iri/how-to-guides/running-the-iri-on-linux.md)