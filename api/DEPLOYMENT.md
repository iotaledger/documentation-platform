# Deployment

## Configuration

Copy the `./api/src/data/config.template.json` to `./api/src/data/config.json` and populate the fields.

```json
{
    "dynamoDbConnection": {
        "region": "AWS-REGION",
        "accessKeyId": "AWS-ACCESS-KEY-ID",
        "secretAccessKey": "AWS-SECRET-ACCESS-KEY"
    }
}
```

## Build

Build the application.

```shell
npm run build
```

## Deploy

The build is setup to use Zeit/now for hosting, to configure this for production modify `./api/now.json` to point at where it needs to be deployed to, and then execute.

```shell
cd api
now
```

## After Deployment

You can check that the api deployment has succeeded by visiting the url of the endpoint e.g. <https://api.my-domain.com>, you should receive a json response with the version number.

```json
{
    "version":"0.1.0"
}
```

To initialise the database visit the `init` path on the api e.g. <https://api.my-domain.com/init>
