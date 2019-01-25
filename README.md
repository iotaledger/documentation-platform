# IOTA Documentation

This repository contains the web application which displays the documentation, the actual content is housed in its own repository `https://github.com/iotaledger/documentation-markdown.git`

## Supporting The Project

If you would like to contribute to the web application, consider posting a [bug report](https://github.com/iotaledger/documentation/issues/new), [feature request](https://github.com/iotaledger/documentation/issues/new) or a [pull request](https://github.com/iotaledger/documentation/pulls/).

For information and issues related to the documentation content please visit the [documentation-markdown repo](https://github.com/iotaledger/documentation-markdown)

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
