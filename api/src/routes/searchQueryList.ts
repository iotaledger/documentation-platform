import { IDataResponse } from "../models/api/IDataResponse";
import { ISearchQueryListRequest } from "../models/api/ISearchQueryListRequest";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { SearchQueryService } from "../services/searchQueryService";
import { ValidationHelper } from "../utils/validationHelper";

/**
 * Generate a report of all the search queries.
 */
export async function searchQueryList(config: IConfiguration, request: ISearchQueryListRequest): Promise<IDataResponse> {
    ValidationHelper.string(request.adminKey, "adminKey");

    if (request.adminKey !== config.adminKey) {
        throw new Error("Invalid adminKey");
    }

    const searchQueryService = new SearchQueryService(config.dynamoDbConnection);

    const items = await searchQueryService.getAll();

    items.sort((a, b) => b.count - a.count);

    const head = `<html><head><title>Search Queries</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></head><body>`;
    const body = `<div class="m-4"><table class="table table-striped"><thead><tr><th>Query</th><th>Count</th></tr></thead><tbody>`;
    let tc = "";
    for (const item of items) {
        tc += `<tr><td>${item.query}</td><td>${item.count}</td><td></tr>`;
    }
    const foot = `</tbody></table></div></body>`;

    return {
        success: true,
        contentType: "text/html",
        inline: true,
        data: Buffer.from(`${head}${body}${tc}${foot}`)
    };
}
