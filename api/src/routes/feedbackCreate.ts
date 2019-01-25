import { IFeedbackCreateRequest } from "../models/api/IFeedbackCreateRequest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/IConfiguration";
import { FeedbackService } from "../services/feedbackService";

/**
 * Generate a feedback record from the request.
 */
export async function feedbackCreate(config: IConfiguration, request: IFeedbackCreateRequest): Promise<IResponse> {
    let response: IResponse;

    try {
        if (!request.document) {
            throw new Error("Parameter document is missing");
        }

        const feedbackService = new FeedbackService(config.dynamoDbConnection);

        let documentFeedback = await feedbackService.get(request.document);

        if (!documentFeedback) {
            documentFeedback = {
                document: request.document,
                entries: []
            };
        }

        documentFeedback.entries.push({
            wasItUseful: request.wasItUseful,
            comments: request.comments,
            timestamp: Date.now()
        });

        await feedbackService.set(documentFeedback);

        response = {
            success: true,
            message: "OK"
        };

    } catch (err) {
        response = {
            success: false,
            message: err.toString()
        };
    }

    return response;
}
