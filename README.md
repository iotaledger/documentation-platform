# IOTA Documentation

All IOTA documentation can be viewed on our websites:

- [iota.org](https://iota.org)
- [docs.iota.org](https://docs.iota.org)

## Accepting Contributions

If you'd like to help us build missing content, please see [open issues](https://github.com/iotaledger/documentation/issues) and filter by the `Help Wanted` label. We'll be adding more of these issues in the coming weeks as we identify more content to be added. Before writing new content, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md).

Use our [Discord](https://discordapp.com/invite/fNGZXvh) to join the discussion in the #Documentation channel and ask questions.

## Development

The documentation application is created as a React Static application. If you wish to do any development work on the app you should perform the following steps.

```shell
git clone https://github.com/iotaledger/documentation.git
npm install
```

You will then need to add the content from the `https://github.com/iotaledger/documentation-markdown.git` repository to the `/docs` folder.

Once you have the content in the `docs` folder you need to index all the documents, you can do this by running:

```shell
npm run build-index
```

Only once the steps above are completed can you build and run the app:

```shell
npm run start
```

There is also an associated API for the application for more details on that see [./api/README.md](./api/README.md)

## Deployment

See [./DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.
