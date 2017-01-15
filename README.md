<p align="center">
  <img src="https://github.com/HeinrichReimer/iota-docs/blob/master/iota_logo_github.png" alt="IOTA" width="196">
</p>

<p align="center"><b>THE BACKBONE OF IOT IS HERE</b></p>
<p align="center">Scalable, Decentralized, Modular, No Fees</p>

<p align="center"><em>This <a href=https://heinrichreimer.github.io/iota-docs>API docs</a> were created with Slate. Check it out at <a href="https://lord.github.io/slate">lord.github.io/slate</a>.</em></p>

Building this API docs:
-----------------------

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 2.2.5 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Getting Set Up

1. Clone this repository to your hard drive with `git clone https://github.com/HeinrichReimer/iota-docs.git`
2. `cd iota-docs`
3. Initialize and start Slate. You can either do this locally, or with Vagrant:

```shell
# either run this to run locally
bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

You can now see the docs at http://localhost:4567. Whoa! That was fast!

Now that Slate is all set up on your machine, you'll probably want to learn more about [editing Slate markdown](https://github.com/lord/slate/wiki/Markdown-Syntax), or [how to publish your docs](https://github.com/lord/slate/wiki/Deploying-Slate).

If you'd prefer to use Docker, instructions are available [in the wiki](https://github.com/lord/slate/wiki/Docker).
