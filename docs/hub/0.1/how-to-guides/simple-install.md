# Hub Installation Guide

This tutorial will cover the installation of the IOTA Hub on a Linux server. For this tutorial we will be using a freshly installed [Ubuntu 18.04 LTS](https://www.ubuntu.com/download/server) Virtual Machine. Everything besides the basic Ubuntu 18.04 LTS Server installation will be installed during the steps we'll follow in this tutorial. At the end of this tutorial you should a have a basic working copy of the IOTA Hub running. 


## Step 1: Installing the dependencies

The IOTA Hub needs to be compiled from source before we can use it, so the first thing we need to do is make sure that we actually have the dependencies installed to compile the Hub application and run the database server. Let's get started!

First we make sure our local apt repository is up-to-date and contains the multiverse repository:

```bash
sudo apt update
```

Next up we need to install a compiler (I picked GCC):

```bash
sudo apt install gcc-7
```
IOTA Hub needs a tool called [Bazel](https://www.bazel.build/) for building/testing. We will install this using the Bazel binary installer, which has some dependencies as well. Let's install those first:
```bash
sudo apt install pkg-config zip g++ zlib1g-dev unzip python
```
Next we download the binary installer for the latest version of Bazel. You can look up the latest release on their [Github page](https://github.com/bazelbuild/bazel/releases), in our case 0.18.0. Using this version number we execute the following command (replace 0.18.0 with the version you want to use):
```bash
wget https://github.com/bazelbuild/bazel/releases/download/0.18.0/bazel-0.18.0-installer-linux-x86_64.sh
```

Next we need to make sure we can execute this script before we can actually run it:
```bash
chmod +x bazel-0.18.0-installer-linux-x86_64.sh
```

After doing this we can install Bazel. We will install it under your currently active user using the `--user` flag:

```bash
./bazel-0.18.0-installer-linux-x86_64.sh --user
```

We still need 1 more dependency to build the Hub, the `pyparsing` package for python. For convenience we use the package from the Ubuntu repositories instead of installing it through `pip`:

```bash
sudo apt install python-pyparsing
```

If you are running the non-server version of Ubuntu 18.04 LTS you might not have Git installed by default. We need Git to clone the Hub repository later on:

```bash
sudo apt install git
```

## Step 2: Installing the database server

The IOTA Hub needs a database (MariaDB 10.2.1+) as well to store things like users, addresses, balances, etc. Ubuntu's 18.04 LTS default repositories don't provide a package that meets this criteria by default so we need to install a custom PPA for the official MariaDB repository. To do this we need to add a GPG key first for that repository:

```bash
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
```

Once that is done we can add the MariaDB repository with the following command:
	
```bash
sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] http://ftp.utexas.edu/mariadb/repo/10.3/ubuntu bionic main'
```

Now we update our package list:

```bash
sudo apt update
```

And finally we install the MariaDB Server:

```bash
sudo apt install mariadb-server
```

During the installation you will be prompted to enter a root password for MariaDB. Pick a secure password and remember it. You will need it later on:

![MariaDB password prompt](../mariapassword.png "Choose your password")

Once this is done we can check if it all went right by checking the MySQL version

```bash
mysql --version
```

It should return something like `mysql  Ver 15.1 Distrib 10.3.10-MariaDB, for debian-linux-gnu (x86_64) using readline 5.2` - Here we can see it uses MariaDB with a version 10.3.10 which is a higher version than the minimum of 10.2.1, so we should be good.

## Step 3: Building the Hub

After setting up all these dependencies it's time to install the Hub. First we need to get the source code to compile. We do this by cloning the GitHub repository:

```bash
git clone https://github.com/iotaledger/rpchub.git hub
```

Next we go to the newly created `hub` directory:

```bash
cd hub
```

Now it's finally time to build the Hub from source:

```bash
bazel build -c opt //hub:hub
```

This process can take a while depending on the hardware/VM you are using; a good moment to grab yourself a beverage of choice. Once this process is complete the last couple of output lines should look similar to this:

```bash
Target //hub:hub up-to-date:
	bazel-bin/hub/hub
INFO: Elapsed time: 1531.342s, Critical Path: 208.27s
INFO: 1377 processes: 1377 linux-sandbox.
INFO: Build completed successfully, 1811 total actions
```

## Step 4: Setting up the database

Now that we've got the Hub application installed we are almost ready to run it, but first we need to make sure our database has the tables created for storing the data the Hub provides. Luckily this is a very straightforward process. Please make sure you replace `myrootpassword` in these commands with the root password you've chosen while installing MariaDB. First we need a database. We'll create one with the name `hub`:

```bash
echo "CREATE DATABASE hub" | mysql -uroot -pmyrootpassword
```

Next up we just load the provided schema from the Hub source into our database using the following command:

```bash
mysql -h127.0.0.1 -uroot -pmyrootpassword hub < schema/schema.sql
```

We need to import some database triggers as well using a very similar command:

```bash
mysql -h127.0.0.1 -uroot -pmyrootpassword hub < schema/triggers.mariadb.sql
```

If you see no errors everything should've gone well and our database should be good to go.

## Step 5: Running the Hub

After setting up the database we are ready to start running the Hub. To run the Hub we execute a binary created by the building process. This binary is located in `./bazel-bin/hub/hub`. You can't just run it like that though since it needs some configuration. To make it easier on ourselves we will create a shell script so we don't have to type it all out each time we want to start it again. Create a file with your favorite editor called `start.sh`:

```bash
nano start.sh
```

And add the following to this file:

```bash
#!/bin/bash
	
./bazel-bin/hub/hub \
	--salt REPLACETHIS!!!REPLACETHIS!!!REPLACETHIS!!! \
	--db hub \
	--dbUser root \
	--dbPassword myrootpassword \
	--apiAddress 127.0.0.1:14265 \
	--minWeightMagnitude 14 \
	--listenAddress 127.0.0.1:50051
```

Please take a bit of time to see what's going on here. We are calling the hub command with some parameters. More available parameters are visible when you execute:

```bash
./bazel-bin/hub/hub --help
```

We need to change a couple of things here:
 
 - First up is the `salt` parameter. This parameter is used to generate seeds; you want to make sure your salt is very long, very unique and very much private. 
 - You will need to make sure your `dbPassword` argument has the right MariaDB password as well. 
 - The `apiAddress` argument points to the API address of an IOTA node. It is highly recommended to use your own IOTA node here but if you want to test without your own node you can connect it to a public node with the right API methods exposed as well for testing.
 - `minWeightMagnitude` should be set to `14` for MainNet use, or `9` for the DevNet. If you forget this argument you won't be able to use the Hub on MainNet since the default is `9` and the MainNet requires you to use a `minWeightMagnitude` of at least `14`.
 - The `listenAddress` listens on `0.0.0.0:50051` by default, which would indicate that Hub can be approached from outside the current machine if the firewall is not configured correctly. You might want to restrict this to the local machine like I'm doing here; if not, at least make sure you have your firewall set-up well so your Hub can't be reached by others.
 - All the other possible arguments are left at their defaults. You can tweak them as you please.

Once you've double checked all arguments and made sure the IOTA node you are connecting to is available, you are ready to make the shell script executable:

```bash
chmod a+x start.sh
```

And, finally, run it:

```bash
./start.sh
```

If no error message pops up now, the Hub is running in your console. Great! 

### Running as a service

Please note that you are currently running the Hub in your shell session. If you close this session it will stop the Hub. The shell session itself isn't 
available any more to work in so, to test it out, you would need to open up another session. This is okay for testing but you might want to consider running
the Hub in a screen/tmux session, a system wide service or a supervised process. For this tutorial we will use `supervisor` to make sure the Hub always runs and automatically restarts after a reboot or a potential crash of the application. First we need to install supervisor (You can exit the currently running Hub application using the `CTRL+C` key combination):

```bash
sudo apt install supervisor
```

Now we need to configure supervisor. Open up a new configuration file in your favorite editor first:

```bash
sudo nano /etc/supervisor/conf.d/hub.conf
```

We will enter the following configuration in this file:

```
[program:hub]
command=/home/dave/hub/start.sh
directory=/home/dave/hub/
user=dave
autostart=true
autorestart=true
stderr_logfile=/home/dave/hub/err.log
stdout_logfile=/home/dave/hub/info.log
```

Please make sure the `user` entry in this log file has the username of the linux account you are using. Also make sure the `command`, `directory`, `stderr_logfile` and `stdout_logfile` paths are correct. Once this is done save the file and reload supervisor:

```bash
sudo supervisorctl reload
```

Hub should now be running in the background and should automatically start again after a server reboot or if the Hub itself crashes for some reason. To see if it actually is running we check the supervisor status:

```bash
sudo supervisorctl status
```

This should return something like this:

```bash
hub                              RUNNING   pid 9983, uptime 0:01:22
```


## Conclusion

Congratulations you've got the Hub running on a Linux server. 

Now that you have this installed and running as a service you can do the following:
- Go straight to testing the Hub by [creating a user](create-user)
- Improve the security of your Hub by adding the [signing server](signing-server)
