# Deployment

## Configuration

Copy the `./src/data/config.template.json` to `./src/data/config.dev.json` and populate the fields.

```js
{
    "dynamoDbConnection": {
        "region": "AWS-REGION",                      // AWS Region e.g. eu-central-1"
        "accessKeyId": "AWS-ACCESS-KEY-ID",          // AWS Access Key e.g. AKIAI57SG4YC2ZUCSABC
        "secretAccessKey": "AWS-SECRET-ACCESS-KEY",  // AWS Secret e.g. MUo72/UQWgL97QArGt9HVUA
        "dbTablePrefix": "DATABASE-TABLE-PREFIX"     // Prefix for database table names e.g. docs-dev-
    }
}
```

## Build

Build the application.

```shell
npm run build
```

## Deploy

The build is setup to use Zeit/now for hosting, to configure this for production modify `./now.json` to point at where it needs to be deployed to, and then execute.

If you want to use a different name for the config file you can specify an environment variable of CONFIG_ID, e.g. set CONFIG_ID to dev will load `config.dev.json` instead.

```shell
cd api
now
```

## After Deployment

You can check that the api deployment has succeeded by visiting the url of the endpoint e.g. <https://api.my-domain.com>, you should receive a json response with the version number.

```json
{
    "version":"1.0.0"
}
```

### Database Initialisation

To initialise the database schema and create the default tables visit the `init` path on the api e.g. <https://api.my-domain.com/init>, if the tables already exist they are skipped, so there is no harm in calling this more than once.
