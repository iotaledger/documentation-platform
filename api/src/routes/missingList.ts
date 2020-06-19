import { IDataResponse } from "../models/api/IDataResponse";
import { IMissingListRequest } from "../models/api/IMissingListRequest";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { MissingService } from "../services/missingService";
import { ValidationHelper } from "../utils/validationHelper";

/**
 * Generate a report of all the missing.
 */
export async function missingList(config: IConfiguration, request: IMissingListRequest): Promise<IDataResponse> {
    ValidationHelper.string(request.adminKey, "adminKey");

    if (request.adminKey !== config.adminKey) {
        throw new Error("Invalid adminKey");
    }

    const missingService = new MissingService(config.dynamoDbConnection);

    const all = await missingService.getAll();

    const items = [];

    for (const mising of all) {
        if (mising.fromDocument) {
            for (const fromDocument of mising.fromDocument) {
                items.push({
                    document: mising.document,
                    fromDocument: fromDocument,
                    timestamp: 0
                });
            }
        }
        if (mising.fromDocumentTime) {
            for (const fromDocument of mising.fromDocumentTime) {
                items.push({
                    document: mising.document,
                    fromDocument: fromDocument.document,
                    timestamp: fromDocument.timestamp
                });
            }
        }
    }

    items.sort((a, b) => b.timestamp - a.timestamp);

    const head = `<html><head><title>Missing</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></head><body>`;
    const body = `<div class="m-4"><table class="table table-striped"><thead><tr><th>Date</th><th>Document</th><th>Referenced From</th></tr></thead><tbody>`;
    let tc = "";
    for (const item of items) {
        tc += `<tr><td style="white-space:nowrap">${item.timestamp === 0 ? "" : new Date(item.timestamp).toDateString()}</td><td>${item.document}</td><td>${item.fromDocument}</td></tr>`;
    }
    const foot = `</tbody></table></div></body>`;

    return {
        success: true,
        contentType: "text/html",
        inline: true,
        data: Buffer.from(`${head}${body}${tc}${foot}`)
    };
}
