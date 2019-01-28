# Documentation API

This package facilitates all the services required by `documentation` Web UI.

It is a set of services running on NodeJS connecting to AWS DynamoDB.

## Prerequisites

```shell
npm install
```

## Development

You will need to create a `./src/data/config.dev.json` file based on the `./src/data.config.template.json`, see the [DEPLOYMENT.md](./DEPLOYMENT.md) for more details.

By running the following command the web API will be available at <http://localhost:4000>

```shell
npm run start-dev
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.