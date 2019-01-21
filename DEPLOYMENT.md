# Deployment

## Documentation Site

### Update Content

Remove all the contents from the `./docs` folder.

Get the latest content from the <https://github.com/iotaledger/documentation-markdown> repo and copy it to the `/docs` folder.

### Configuration

Copy the `./src/config.template.json` to `./src/config.json` and populate the fields.

```json
{
  "siteName": "IOTA Documentation", // HTML page title
  "siteRoot": "SITE_ROOT",          // Url for deployed web site e.g. https://docs.domain.com
  "apiEndpoint": "API_ENDPOINT",    // Url for deployed api e.g. https://api.domain.com
  "hotJarId": "HOT_JAR_ID"          // ID for hot jar tracking, optional
}
```

### Build

Build the application.

```shell
npm run build
```

### Deploy

The build is setup to use Zeit/now for hosting, to configure this for production modify `./now.json` to point at where it needs to be deployed to, and then execute.

```shell
cd dist
now --local-config=../now.json
```

## API

### Configuration

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

### Build

Build the application.

```shell
npm run build
```

### Deploy

The build is setup to use Zeit/now for hosting, to configure this for production modify `./api/now.json` to point at where it needs to be deployed to, and then execute.

```shell
cd api
now
```