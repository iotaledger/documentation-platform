import { IFeedbackCreateRequest } from "../models/api/IFeedbackCreateRequest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { FeedbackService } from "../services/feedbackService";

/**
 * Generate a feedback record from the request.
 */
export async function feedbackCreate(config: IConfiguration, request: IFeedbackCreateRequest): Promise<IResponse> {
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

    return {
        success: true,
        message: "OK"
    };
}
