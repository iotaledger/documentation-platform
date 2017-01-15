# Installation


## Getting Started with Nostalgia

A simplistic User Interface (Nostalgia), is provided to help community members get started with using IOTA. The actual 
GUI wallet will be released in a few days, so if you don't feel comfortable with Nostalgia, we suggest you to wait 
until the wallet is ready.

### 1. Download Nostalgia

As a first step, you should download Nostalgia from our [GitHub](https://github.com/domschiener/nostalgia):

<aside class="success">
    <b>Download Nostalgia</b><br>
    <a href="https://github.com/domschiener/nostalgia">https://github.com/domschiener/nostalgia</a>
</aside>

```shell--no-tab
git clone https://github.com/domschiener/nostalgia
```

If you are on Linux/Mac, you can simply open your console and clone the project:


Otherwise you can also simply download the zipped version from here: 
[https://github.com/domschiener/nostalgia/archive/master.zip](https://github.com/domschiener/nostalgia/archive/master.zip)

### 2. Download the latest IRI

Now obviously in order to get running, you need the IOTA Core. At the time of writing, the latest version happens to 
be 1.1.0 which is available [here](http://85.93.93.110/IRI-1.1.0.jar):

<aside class="success">
    <b>Download IRI</b><br>
    <a href="http://85.93.93.110/IRI-1.1.0.jar">http://85.93.93.110/IRI-1.1.0.jar</a>
</aside>

For this IRI version you need to start completely from scratch, so either start in a new folder, or delete your 
database (all files with `.iri` extensions).

### 3. Find Neighbors

In order to run IRI, you need to have neighbors which want to pair with you. The easiest and fastest way to get 
neighbors is through our [Slack](https://slack.iotatoken.com/), where you can join the *#nodesharing* channel to find 
neighbors.

It should be noted that you have to share your own IP and port with your neighbors as well, because IOTA relies on 
mutual tethering for the data exchange. If you need help simply ask on Slack.

### 4. Start IRI

Once you have a list of neighbors, you have to start IRI.

#### On Linux/Mac

```shell--no-tab
sudo java -jar IRI.jar YOURPORT udp://NODE1:PORT udp://NODE2:PORT
```

Now for Linux/Mac users, simply open up the terminal and type in:

#### On Windows

Follow the tutorial from here: 
[http://iotasupport.com/headlessnode.shtml#headless-node-on-windows](http://iotasupport.com/headlessnode.shtml#headless-node-on-windows)

### 5. Run Nostalgia

Now in order to run nostalgia, all you need to do is open up the `nostalgia.html` file in your web browser.

<aside class="notice">
    If you are using a different port than <b>14265</b>, change line 18 in <code>nostalgia.html</code> to the correct 
    port.
</aside>

Now all you have to do is type in your seed and hit enter in order to login. You should now see an empty screen and you 
can start sending transactions and generating addresses.

If you have already made transactions, Nostalgia will mark sent transactions in red (as in the picture below), so that 
you know to which address you have sent tokens.

![Tangle](images/iota_installation_nostalgia.png)

In addition to that, you can also take a look at the entire bundle by clicking on "Show Bundle". The transactions form 
the bundle will be marked in blue. If you click on "Show Bundle" again they will disappear.

![Tangle](images/iota_installation_nostalgia_show_bundle.png)
