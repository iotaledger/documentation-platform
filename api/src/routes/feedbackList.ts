import { IDataResponse } from "../models/api/IDataResponse";
import { IFeedbackListRequest } from "../models/api/IFeedbackListRequest";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { FeedbackService } from "../services/feedbackService";
import { ValidationHelper } from "../utils/validationHelper";

/**
 * Generate a report of all the feedback.
 */
export async function feedbackList(config: IConfiguration, request: IFeedbackListRequest): Promise<IDataResponse> {
    ValidationHelper.string(request.adminKey, "adminKey");

    if (request.adminKey !== config.adminKey) {
        throw new Error("Invalid adminKey");
    }

    const feedbackService = new FeedbackService(config.dynamoDbConnection);

    const all = await feedbackService.getAll();

    const items = [];

    for (const feedback of all) {
        for (const entry of feedback.entries) {
            items.push({
                document: feedback.document,
                wasItUseful: entry.wasItUseful,
                comments: entry.comments,
                timestamp: entry.timestamp
            });
        }
    }

    items.sort((a, b) => b.timestamp - a.timestamp);

    const head = `<html><head><title>Feedback</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></head><body>`;
    const body = `<div class="m-4"><table class="table table-striped"><thead><tr><th>Date</th><th>Document</th><th>Useful?</th><th>Comments</th></tr></thead><tbody>`;
    let tc = "";
    for (const item of items) {
        tc += `<tr><td style="white-space:nowrap">${new Date(item.timestamp).toDateString()}</td><td>${item.document}</td><td>${item.wasItUseful}</td><td style="white-space:pre-line">${item.comments ? item.comments.replace(/<[^>]*>/g, "") : ""}</td></tr>`;
    }
    const foot = `</tbody></table></div></body>`;

    return {
        success: true,
        contentType: "text/html",
        inline: true,
        data: Buffer.from(`${head}${body}${tc}${foot}`)
    };
}
