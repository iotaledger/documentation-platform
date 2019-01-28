import bodyParser from "body-parser";
import express from "express";
import { IConfiguration } from "./models/IConfiguration";
import { emailCreate } from "./routes/emailCreate";
import { feedbackCreate } from "./routes/feedbackCreate";
import { init } from "./routes/init";
import { missingCreate } from "./routes/missingCreate";

// tslint:disable:no-var-requires no-require-imports
const port = process.env.PORT || 4000;
const configId = process.env.CONFIG_ID || "dev";

const packageJson = require("../package.json");
// tslint:disable-next-line:non-literal-require
const config: IConfiguration = require(`./data/config.${configId}.json`);

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", `*`);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");

    next();
});

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ version: packageJson.version }));
    res.end();
});

app.get("/init", async (req, res) => {
    const log = await init(config);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ log }));
    res.end();
});

app.post("/email", async (req, res) => {
    const response = await emailCreate(config, req.body);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
    res.end();
});

app.post("/feedback", async (req, res) => {
    const response = await feedbackCreate(config, req.body);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
    res.end();
});

app.post("/missing", async (req, res) => {
    const response = await missingCreate(config, req.body);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
    res.end();
});

app.listen(port, async err => {
    if (err) {
        throw err;
    }

    console.log(`Started API Server on port ${port} v${packageJson.version}`);
});
