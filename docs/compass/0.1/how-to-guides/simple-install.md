# Compass Simple Setup

In this guide we will set up a minimal private tangle with a single IRI node and a Compass coordinator issuing milestones. After you complete this tutorial you should be able to interact with your private tangle using your favorite IOTA tools and libraries.
 

## Requirements

For this basic setup we will install both the IRI node and the Compass coordinator on the same server/virtual machine. This is what you need:

- A Freshly installed Ubuntu 18.04 Server / Virtual Machine
- At least 8GB RAM
- Preferably 4+ CPU cores, the more cores the faster the Merkle tree will generate.
- At least a 10GB SSD

## Setting up the dependencies

Compass uses [Bazel](https://bazel.build/) to build and [Docker](https://www.docker.com/) to run, so we need to make sure both are installed.
First we install the dependencies we need for Bazel to install:

	sudo apt-get install pkg-config zip g++ zlib1g-dev unzip python


Next we retrieve the latest installer for Bazel:

	wget https://github.com/bazelbuild/bazel/releases/download/0.18.0/bazel-0.18.0-installer-linux-x86_64.sh

Next we need to make sure we can execute this script before we can actually run it:

	chmod +x bazel-0.18.0-installer-linux-x86_64.sh

After doing this we can install Bazel, we will install it under your currently active user using the `--user` flag:

	./bazel-0.18.0-installer-linux-x86_64.sh --user

Now that Bazel is installed we need to install Docker:

	sudo apt install apt-transport-https ca-certificates curl software-properties-common
	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
	sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
	sudo apt update
	sudo apt install docker-ce

After installing Docker we need to make sure we have a tool called `jq` as well, this tool can be found in the Ubuntu universe repository so we'll add that first:
	
	sudo add-apt-repository universe
	sudo apt install jq

This is all we need to get started.

## Calculating the Milestone Merkle tree

Before we can start on our Coordinator setup we need to generate a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree). This tree will make sure every milestone created by Compass  references back to the fixed address of the Coordinator known by every IRI instance in your tangle (in this example just a single node). This way only the Compass coordinator with the right seed can issue valid milestones for this tangle. The Compass repository includes a simple tool to generate this Merkle tree. 

First we need to clone the GitHub repo for Compass:

	git clone https://github.com/iotaledger/compass.git
	cd compass

Next up we need to build the layers_calculator tool that will generate the Merkle tree for us:

	bazel run //docker:layers_calculator

Next we need to think of a depth for our Merkle tree. In order to use the tree we need to calculate all possible branches for this tree first, the 'deeper' we go the more branches we will have. The amount of milestones you can issue is based on the simple formula of 2<sup>depth</sup>, so a depth of 16 is 2<sup>16</sup> resulting in a maximum of 65536 milestones, if you issue milestones every minute you can run 2<sup>depth</sup> minutes before you run out of milestones to issue, so the depth needs to be high enough for your test to complete. On the other hand the higher the depth the longer the tree generation takes. For our demo purpose we'll use a depth of 16, this allows us to run compass for 45 days in a row at 1 minute milestone intervals. Calculating the tree for this will not take as long. For comparison: A depth of 24 would  allow you to run Compass for over 31 years but it will take a lot of CPU hours to generate that tree. If you don't want to wait 15-30 minutes for the tree to generate you can choose to go for a depth of 8 as well, this will only take a couple of seconds to generate but you will only be able to run your coordinator for a couple of hours before you run out of milestones.

First we need to generate a new seed for our coordinator, we do that using the following command:

	cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1 

Copy the result of this command, we will add it to our configuration file in a moment.

The Compass repository comes with a set of scripts to make it easier for us to get this setup up and running. Let's check it out:

	cd docs/private_tangle

In this folder there is a example configuration file, let's copy it before we edit it:

	cp config.example.json config.json

Open the `config.json` file in your favorite editor and replace the seed with the seed you generated. 

	nano config.json

You should replace the `depth` parameter as well with the depth you want to generate a Merkle tree for (in our example we change it to `16`). The finished `config.json` should look like this:

	{
	  "seed": "MYSEEDHEREPLEASEREPLACEMEIMMEDIATELYWITHSOMETHINGSECURE99999999999999999999999999",
	  "powMode": "CURLP81",
	  "sigMode": "CURLP27",
	  "security": 1,
	  "depth": 16,
	  "milestoneStart": 0,
	  "mwm": 9,
	  "tick": 60000,
	  "host": "http://localhost:14265"
	}

We need to make sure Docker is aware of the layers_calculator image, let's run it first:

	sudo ../../bazel-bin/docker/layers_calculator

Now we are ready to generate our Merkle tree, to do this we execute the script in `docs/private_tangle`:

	sudo ./01_calculate_layers.sh

This process will take a while (with a 4 core virtual machine it took around 15 minutes with a depth of 16), after it is done it should tell you what the root of your tree is:

	[main] INFO org.iota.compass.LayersCalculator - Calculating 65536 addresses.
	...
	[main] INFO org.iota.compass.LayersCalculator - Successfully wrote Merkle Tree with root: JMRTYHMGNZGNOLPSSBVLWRPMGIAMOXPLURNDIBKXIFTCJCLOYKH9FMVNKPBVFVMGSUFEYVUUIEARFQXAK

This script stores your tree in the data folder so Compass will use it once we run it.

## Run IRI

Now we need our first IRI node to run before we can turn on Compass, this is a pretty straightforward process and we have a script for this as well taking our generated Merkle tree root into account. This script actually uses the default IRI Docker container with some additional parameters. Our IRI node works with a snapshot file to set the initial state of the tangle, we will keep it simple here and we will put the total IOTA supply of 2.7Pi in the first address generated by the seed `SEED99999999999999999999999999999999999999999999999999999999999999999999999999999`; This is  `FJHSSHBZTAKQNDTIKJYCZBOZDGSZANCZSWCNWUOCZXFADNOQSYAHEJPXRLOVPNOQFQXXGEGVDGICLMOXX` (Excluding the address checksum). Open up the new file `snapshot.txt` in your favorite editor:

	nano snapshot.txt
	
And add the following line:

	FJHSSHBZTAKQNDTIKJYCZBOZDGSZANCZSWCNWUOCZXFADNOQSYAHEJPXRLOVPNOQFQXXGEGVDGICLMOXX;2779530283277761

Please do not exceed this maximum supply, it might not work if you do that, allocating less should not be a problem. 

That's all we need to do for now, let's fire up IRI!

	sudo ./02_run_iri.sh

If everything went right you should see IRI starting up now. You can use `CTRL+C` in the console to go back to your shell session, IRI will continue to run in the background.

## Running Compass

After we generated the Merkle tree and installed IRI we can finally start our coordinator. But we need to build it first using bazel. Go back to your `compass` directory and run bazel:

	cd ~/compass/
	bazel run //docker:coordinator

Next we need to run the Docker container for a first time:

	sudo ../../bazel-bin/docker/coordinator

Now we are ready to run the coordinator

	sudo ./03_run_coordinator.sh -bootstrap -broadcast

The logs should tell you it is issuing milestones; Great! We should now have a functional private tangle to tinker with! Please note that the coordinator will stop working if you run out of calculated milestones, don't use a too low depth or you might have to start over again soon.

## Testing your network

You should be able to connect to your IRI node with your favorite software on port 14265, This can be a wallet or a client library. Once you are connected to a your node and entered the `SEED99999999999999999999999999999999999999999999999999999999999999999999999999999` seed you should be able to see the complete 2.7Pi allocated (you might have to manually attach the first address depending on what client library/wallet you are using). Feel free to send over test transactions and see them confirmed by the coordinator.