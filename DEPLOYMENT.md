# Deployment

## Update Content

Remove all the contents from the `./docs` folder.

Get the latest content from the <https://github.com/iotaledger/documentation> repo and copy it to the `/docs` folder.

## Configuration

Copy the `./src/config.template.json` to `./src/config.dev.json` and populate the fields.

```js
{
  "siteName": "IOTA Documentation", /* HTML page title */
  "siteRoot": "SITE_ROOT",          /* Url for deployed web site e.g. https://docs.domain.com */
  "apiEndpoint": "API_ENDPOINT",    /* Url for deployed api e.g. https://api.domain.com */
  "hotJarId": "HOT_JAR_ID",         /* ID for hot jar tracking, optional */
  "googleAnalyticsId": "GOOGLE_ANALYTICS_ID"    /* ID for google analytics, optional */
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
cd dist
now --local-config=../now.json
```

## API

See [./api/DEPLOYMENT.md](./api/DEPLOYMENT.md) for api deployment instructions.
