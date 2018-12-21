# Downloading the IRI from a Docker container for MacOSX, Windows, and Linux operating systems

The IRI gives you direct access to an IOTA network, allowing you to interact with the ledger whenever you like and send transactions in that ledger to other IRI nodes in the same network.

[Docker](https://www.docker.com/) is a multi-platform tool that allows a developer to package an application with all its dependencies such as libraries, and ship it all as one package.

The IRI Docker container is suitable for the following operating systems:
* Linux
* MacOSX
* Windows

You have two options for downloading the IRI Docker container:
* [Download the pre-built Docker container]((#downloading-the-pre-built-iri-docker-container))(quickest option)
* [Build the Docker container from the source code](#building-the-iri-docker-container-from-the-source-code)

| **Table of contents**                  |        
| :------------------- |
|[Prerequisites](#prerequisites)|
|[Downloading the pre-built IRI Docker container](#downloading-the-pre-built-iri-docker-container)|
|[Building the IRI Docker container from the source code](#building-the-iri-docker-container-from-the-source-code)|
|[Next steps](#next-steps)|
||

## Prerequisites

To build the IRI Docker container, Docker 17.05+ (for multi-stage build support) must be installed on your computer.

1. [Install Docker](https://docs.docker.com/install/#supported-platforms)
2. Make sure that Docker is installed by doing the following:
    ```bash
    $ docker run hello-world
    ```
    You should see some Docker information in the output.
  
## Downloading the pre-built IRI Docker container

```bash
$ docker pull iotaledger/iri:latest
```

## Building the IRI Docker container from the source code

Instead of downloading the pre-built Docker container, you may want to build the file from the source code the any of the following reasons:
* You want to be sure that the code you run is the same as the source code
* You want to modify the code before you run it

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Make sure that Git is installed by doing the following:

    ```bash
    $ git --version
    ```

    You should see the version number of your Git installation.

3. Build the latest version of the IRI by doing the following:
    ```bash
    $ git clone https://github.com/iotaledger/iri.git
    $ cd iri
    $ export TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
    $ git checkout ${TAG}
    $ docker build -t iri .
    ```
## Next steps

* [Running the IRI in a Docker container](/iri/how-to-guides/running-the-iri.md)
