# Documentation API

This package facilitates all the services required by `documentation` Web UI.

It is a set of services running on NodeJS connecting to AWS DynamoDB.

## Pre-requisites

```shell
npm install
```

## Development

This will run the Web UI at <http://localhost:4000>

```shell
npm run start-dev
```

## Deployment

The `api` package is setup to be deployed to zeit/now, you should modify the config in `./now.json` to suit your own requirements.

To configure the `api` you should copy `./data/config.template.json` to `./data/config.json` and modify the content.

```json
{
    "dynamoDbConnection": {
        "region": "AWS-REGION",
        "accessKeyId": "AWS-ACCESS-KEY-ID",
        "secretAccessKey": "AWS-SECRET-ACCESS-KEY"
    }
}
```

```shell
npm run build
npm run deploy
```
