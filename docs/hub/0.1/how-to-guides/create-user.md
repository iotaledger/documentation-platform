# Testing the Hub

After following the [install tutorial](simple-install) you can now communicate with the Hub through any programming language supporting [gRPC](https://grpc.io/). We will be using some sample code written in Python to see what the Hub does. Download the sample code from GitHub to get started:

	cd ~
	git clone https://github.com/fijter/rpchub-test.git
	cd rpchub-test

This example code needs to install some dependencies for Python. We don't want to pollute our global python installation with these dependencies so we create a Virtual Environment first:

	sudo apt-add-repository multiverse && sudo apt update
	sudo apt install  python3-venv
	python3 -m venv env

Next we need to activate this virtual environment in our shell session in order to use it, we do this with the following command:

	. env/bin/activate

After activating our environment we need to install the required python dependencies with the following command:

	pip install -r requirements.txt
  
Now we are ready to run the examples, first we will create a new user account in our Hub:

	python examples/create_user.py

It should output `New user with id 'user-1' created!` if your Hub is working correctly.
Next up let's generate a new receiving address for this user:

	python examples/get_address.py

This should output a new deposit address for user-1, feel free to send it a couple of IOTA to try it out using Trinity!

The last example we'll cover is getting the balance and history for a Hub user:  

	python examples/balance.py

This outputs something along these lines if you sent 10i to it (it may take a couple of minutes for the balance to show up):

	10i available for test 'user-1'
	History:
	events {
	  timestamp: 1540856214000
	  type: DEPOSIT
	  amount: 10
	}

If you look at the deposit address history in a tangle explorer like [thetangle.org](https://thetangle.org/) you will see the Hub moved the funds away from the deposit address towards a hot wallet, this is done in a so called 'sweep' executed by the Hub.

Have a look at the examples to see how you are able to interact with the Hub through gRPC. These examples are in Python but every major programming language seems to have a gRPC library available to easily interact with external services like these.
