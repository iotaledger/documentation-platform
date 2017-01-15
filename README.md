<p align="center">
  <img src="https://github.com/HeinrichReimer/iota-docs/blob/gh-pages/images/iota_logo_github.png" alt="IOTA" width="196">
</p>

<p align="center"><b>THE BACKBONE OF IOT IS HERE</b></p>
<p align="center">Scalable, Decentralized, Modular, No Fees</p>

<p align="center"><em>This <a href=https://heinrichreimer.github.io/iota-docs>API docs</a> were created with Slate. Check it out at <a href="https://github.com/lord/slate/">github.com/lord/slate/</a>.</em></p>

Building this API docs:
-----------------------

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 2.2.5 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Changing colors

You can change any color or size by modifying [*_variables.scss*](https://github.com/HeinrichReimer/iota-docs/blob/master/source/stylesheets/_variables.scss). As long as you don't change any unit everything should work as expected.

### Editing markdown

Basically everything is Github Flavored Markdown. You can find a more detailed documentation of what's possible [here](https://github.com/lord/slate/wiki/Markdown-Syntax).

### Testing locally

1. Clone this repository to your hard drive with `git clone https://github.com/yourusername/iota-docs.git`
2. `cd iota-docs`
3. Initialize and start Slate. You can either do this locally, or with Vagrant:

```shell
bundle install
bundle exec middleman server
```

You can now see the docs at <a href="http://localhost:4567" target="_blank">http://localhost:4567</a>. Whoa! That was fast!

### Publishing using GitHub Pages

 1. Make sure your `origin` is a Slate fork in your own account, not the original repo.
 1. Commit your changes to the markdown source: `git commit -a -m "Update index.md"`!
 2. Push the *markdown source* changes to Github: `git push`
 3. Run `./deploy.sh`

Done! Your changes should now be live on http://yourusername.github.io/iota-docs, and the main branch should be updated with your edited markdown. Note that if this is your first time publishing Slate, it can sometimes take ten minutes or so before your content is available online.

#### Custom domains

See the original [Slate documentation](https://github.com/lord/slate/wiki/Deploying-Slate#custom-domains-with-github).

### Publishing on your own server

Read more about how to publish the docs to your own server in the original [Slate documentation](https://github.com/lord/slate/wiki/Deploying-Slate#publishing-your-docs-to-your-own-server).
