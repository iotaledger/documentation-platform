# Signing Server Installation

For a even more secure Hub setup you can choose to do the signing part on a totally different server. This way the funds managed by your Hub are still safe even if the Hub server itself is compromised. You probably won't need to do this unless your Hub handles a lot of IOTA, If you run a exchange on the other hand this might be a very good idea to put into action.


> Make sure you have completed the [simple install](simple-install) before 

### Running the signing server

Before we can start with this we need another server to install the signing part on. For this example we will use another fresh Ubuntu 18.04 LTS Server installation. We need the same dependencies as mentioned in step 1 so go ahead and repeat everything mentioned in Step 1.

Next up we continue with cloning the Hub again:

	git clone https://github.com/iotaledger/rpchub.git hub

Next we go the the newly created `hub` directory:

	cd hub

Now it's time to build the Hub signing server from source:

	bazel build -c opt //signing_server

Time to grab another drink, this building process can take a while. Once it's done it should show something like this:

	Target //signing_server:signing_server up-to-date:
	  bazel-bin/signing_server/signing_server
	INFO: Elapsed time: 1250.848s, Critical Path: 19.29s
	INFO: 1283 processes: 1283 linux-sandbox.
	INFO: Build completed successfully, 1412 total actions

Next up we need to generate some self signed SSL certificates used for secure communication between your Hub and Signing server. The Hub repository has some scripts to do that, let's edit them first to our needs before executing them.

Open `docs/ssl/01_generate_ca.sh` in your favorite editor:

	nano docs/ssl/01_generate_ca.sh

Here we can see the validity for the CA certificate is set to 365 days; Let's upgrade that to 9999 days so it won't expire anytime soon:

Replace `-days 365` with `-days 9999`

After saving this file we need to check what our hostname is for this server since we will need to use that for our certificate. In our example our hostname is `signer`. You can check what your hostname is by simply executing the `hostname` command in your shell. 

	nano docs/ssl/02_generate_server.sh

Replace the reference `-days 365` with `-days 9999` here as well, we also need to change the `-subj` parameter, the `CN=localhost` part needs to contain the hostname of our signing server. For our example we will set it to `signer` since this is what the `hostname` outputted, I will show you later how we can connect to this server using that hostname from our Hub server. Our `openssl req` line should look like this now:

	openssl req -passin pass:1234 -new -key server.key -out server.csr -subj "/C=DE/ST=Berlin/L=Berlin/O=HUB/OU=Server/CN=signer"

Save this file as well and open the last script:

	nano docs/ssl/03_generate_client.sh

Replace `-days 365` here as well with `-days 9999` and `CN=localhost` with `CN=signer`. Save this file too and we are ready to generate the certificates. Execute the following from the console:

	docs/ssl/01_generate_ca.sh
	docs/ssl/02_generate_server.sh
	docs/ssl/03_generate_client.sh

We should now have some SSL server and client certificates ready to use!

Great! Now let's create a start script to start the signing servers with the parameters we want, open up start.sh in your favorite editor:

	nano start.sh

Enter the following:
	
	#!/bin/bash
	
	./bazel-bin/signing_server/signing_server \
	  --salt REPLACETHIS!!!REPLACETHIS!!!REPLACETHIS!!! \
	  --authMode ssl \
	  --authMode=ssl \
	  --sslKey server.key \
	  -sslCert server.crt \
	  --sslCA ca.crt \
	  --listenAddress 0.0.0.0:50051
	

**note:** use the same salt as the salt you used while starting the Hub for the first time on the Hub server itself!

Now make the `start.sh` file executable:

	chmod a+x start.sh

Next up we are ready to start the signing server:

	./start.sh

If we get no error output it's running fine! Let's exit the signing server with `CTRL+C` and set it up as a service with supervisor, just like with the Hub:

	sudo apt install supervisor

Now we need to configure supervisor, open up a new configuration file in your favorite editor first:

	sudo nano /etc/supervisor/conf.d/signing.conf

We will enter the following configuration in this file:

	[program:signing]
	command=/home/dave/hub/start.sh
	directory=/home/dave/hub/
	user=dave
	autostart=true
	autorestart=true
	stderr_logfile=/home/dave/hub/err.log
	stdout_logfile=/home/dave/hub/info.log

Please make sure the `user` entry in this log file has the username of the linux account you are using, also make sure the `command`, `directory`, `stderr_logfile` and `stdout_logfile` paths are correct. Once this is done save the file and reload supervisor:

	sudo supervisorctl reload

Hub should now be running in the background and should automatically start again after a server reboot or if the hub itself crashes for some reason. To see if it actually is running we check the supervisor status:

	sudo supervisorctl status

This should return something like this:

	signing                          RUNNING   pid 11740, uptime 0:00:02


Now we have our signing server running. Next up we are going back to our Hub server to start using it!


### Connecting the Hub to the signing server

In our Hub server we'll have to import our generated SSL certificates and edit our start.sh script in order to use them.
First we need to copy 3 files to our hub server, `client.crt`, 'client.key' and `ca.crt`. You can do this in a way you prefer, for this example I will
send them over SSH to our Hub server with the `scp` command:

	scp client.crt client.key ca.crt 192.168.2.212:/home/dave/hub/

In this case 192.168.2.212 is our Hub server, you can replace this by your own hub servers IP address or hostname. `/home/dave/hub/` is where our Hub install runs, if this is different for you you should change this as well. If this went well the result of the transfer should look like this:

	client.crt                                                                    100% 1887     1.6MB/s   00:00    
	client.key                                                                    100% 3243     3.0MB/s   00:00    
	ca.crt                                                                        100% 2029     1.9MB/s   00:00  

Great, now we can go back to our Hub server to set up the connection to our singing server. In order to be able to connect to our signing server we will have
to add a entry to `/etc/hosts` for our signing server because we used a non existing hostname. To do this we open op `/etc/hosts`:

	sudo nano /etc/hosts

In this file we can map domains to IP addresses that will be used instead of our generic DNS. In this file we add the following line in order to be able to connect to our signing server through it's hostname:

	192.168.2.210   signer

Here `192.168.2.210` is the IP address of our signing server, signer` is the hostname we've chosen while generating the SSL certificates; Modify them to your needs.

Next up we change our `start.sh` file to use the signing server instead:

	nano start.sh

We remove the `--salt` parameter from here because this is coming from the signing server from now on. We also reference the signing server (`signer:50051`) and SSL certificates to use. The end result should look like this:


	#!/bin/bash
	
	./bazel-bin/hub/hub \
	  --db hub \
	  --dbUser root \
	  --dbPassword testingtesting123 \
	  --apiAddress 192.168.2.71:14265 \
	  --minWeightMagnitude 14 \
	  --listenAddress 127.0.0.1:50051 \
	  --signingMode remote \
	  --signingProviderAddress signer:50051 \
	  --signingServerChainCert client.crt \
	  --signingServerKeyCert client.key \
	  --signingServerSslCert ca.crt 
	

Once you save this file we only need to restart the Hub server and we should be good to go, since we are running the Hub using supervisor we will have to restart it through supervisor as well:  

	sudo supervisorctl restart hub

If everything went well you should have now have a Hub and signing server ready for action and the salt no longer on the same server as your Hub.


## Next possible steps not covered in this tutorial

 - Tighten security on this server, at least make sure a proper firewall whitelist is set-up, the less external services you expose the less vulnerable you are. General server security rules apply here. If you don't know what to do here you are probably better off getting help with this step from an expert.


## Troubleshooting  

Can't install a package with apt? Try adding the multiverse repository and try again!

	sudo apt-add-repository multiverse && sudo apt-get update
Install a compiler

```sudo apt install gcc-7```

Install dependencies for Bazel, the development tool used to create IOTA Hub

```sudo apt-get install pkg-config zip g++ zlib1g-dev unzip python```

Download the binary installer for the latest version of Bazel

```wget https://github.com/bazelbuild/bazel/releases/download/0.18.0/bazel-0.18.0-installer-linux-x86_64.sh```

Change permissions to allow the script to execute

```chmod +x bazel-0.18.0-installer-linux-x86_64.sh```

Install under the currently active user 

```./bazel-0.18.0-installer-linux-x86_64.sh --user```

Install the final dependency, pyparsing

```sudo apt-get install python-pyparsing```


### Step 2: Installing the Database

IOTA Hub uses MariaDB 10.2.1+ to store users, addresses, balances, etc.
MariaDB is not pre-loaded on Ubuntu 18.04 LTS Server.  To install, first add a GPG key for the MariaDB repository

```sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8```

Then add the MariaDB repository with the following command

```sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] http://ftp.utexas.edu/mariadb/repo/10.3/ubuntu bionic main'```

Update the package list

```sudo apt update```

Install the MariaDB Server

```sudo apt install mariadb-server```

During the installation you will be prompted to enter a root password for MariaDB

Check that the database version is higher than the minimum required of 10.2.1

```mysql --version```


### Step 3: Building the Hub

Clone the source code from GitHub repository

```git clone https://github.com/iotaledger/rpchub.git hub```

Go to the the newly created hub directory

```cd hub```

Build the Hub from source

```bazel build -c opt //hub:hub```

Check that the build completed successfully


### Step 4: Setting up the Database

Create the hub database and add the schema and triggers

```echo "CREATE DATABASE hub" | mysql -uroot -pmyrootpassword```

Load the provided schema from the Hub source into the hub database

```mysql -h127.0.0.1 -uroot -pmyrootpassword hub < schema/schema.sql```

Import the database triggers

```mysql -h127.0.0.1 -uroot -pmyrootpassword hub < schema/triggers.mariadb.sql```


### Step 5: Running the Hub

Hub has quite a few settings.  For easier launch, these can be stored in a shell script. 

```nano start.sh```

First, set the "salt" parameter. Salt is used to generate more secure seeds.  Make sure the salt strings is longer than 20 characters.  Do not share your salt.

Next, set the database name to "hub" and add the database user and password.  
Set the apiAddress to the API address for your IOTA node
For MainNet, set minWeightMagnitude to 14.  For DevNet use 9
By default hub listens on 0.0.0.0:50051.  Modify your firewall accordingly.

Here is a sample shell script:

```
#!/bin/bash

./bazel-bin/hub/hub \
  --salt REPLACETHIS!!! \
  --db hub \
  --dbUser root \
  --dbPassword myrootpassword \
  --apiAddress 127.0.0.1:14265 \
  --minWeightMagnitude 14 \
  --listenAddress 127.0.0.1:50051
```

Change permissions to allow the script to execute

```chmod a+x start.sh```

Run hub

```./start.sh```

Now Hub is running 

## Conclusion

Congratulations you've got the Hub running with a signing server on a Linux server. 

Now that you have this installed and running as a service you can do the following:
- Go straight to testing the Hub by [creating a user](create-user)

