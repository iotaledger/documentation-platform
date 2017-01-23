<p align="center">
  <img src="./source/images/iota-logo.png" alt="IOTA" width="550">
</p>

<p align="center"><b>Central Documentation Repository</b></p>


Purpose of this Repository
-----------------------
The purpose of this repository is to be the central repository for all the IOTA related documentation websites. Each documentation is a different branch in this repository and will be maintained by the developers and contributors. We are using Slate, check it out at <a href="https://github.com/lord/slate/">github.com/lord/slate/</a>. More information will follow soon.


Building this API docs
-----------------------

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 2.2.5 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Changing colors

You can change any color or size by modifying [*_variables.scss*](./source/stylesheets/_variables.scss). As long as you don't change any unit everything should work as expected.

### Editing markdown

Basically everything is Github Flavored Markdown. You can find a more detailed documentation of what's possible [here](https://github.com/lord/slate/wiki/Markdown-Syntax).

### Testing locally

1. Clone this repository to your hard drive with `git clone https://github.com/iotaledger/documentation.git`
2. `cd documentation`
3. Initialize and start Slate. You can either do this locally, or with Vagrant:

```shell
bundle install
bundle exec middleman server
```

You can now see the docs at <a href="http://localhost:4567" target="_blank">http://localhost:4567</a>. Whoa! That was fast!
