import { IHttpRequest } from "../models/app/IHttpRequest";
import { IHttpResponse } from "../models/app/IHttpResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { routes } from "../routes";
import { cors, executeRoute, findRoute } from "../utils/apiHelper";

/**
 * Handle an incoming REST request.
 * @param req Request The request.
 * @param res Response The response.
 * @returns Nothing
 */
export default async function handler(req: IHttpRequest, res: IHttpResponse): Promise<void> {
    try {
        // tslint:disable-next-line: non-literal-require
        const config: IConfiguration = require(`../data/config.${process.env.CONFIG_ID}.json`);

        cors(
            req,
            res,
            process.env.CORS_ALLOW_ORIGINS || config.allowedDomains,
            process.env.CORS_ALLOW_METHODS,
            process.env.CORS_ALLOW_HEADERS
        );

        if (req.method === "OPTIONS") {
            res.status(200).send("OK");
        } else if (!req.url || !req.method) {
            res.status(400).send(`Bad request ${JSON.stringify(req)}`);
        } else {
            const found = findRoute(routes, req.url.split("?")[0], req.method.toLowerCase());

            if (!found) {
                res.status(404).send("Not found");
            } else {
                await executeRoute(req, res, config, found?.route, found?.params);
            }
        }
    } catch (err) {
        console.error(err);
        res.status(400).send("Bad request");
    }
}
