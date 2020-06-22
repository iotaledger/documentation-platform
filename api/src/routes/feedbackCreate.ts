import { IFeedbackCreateRequest } from "../models/api/IFeedbackCreateRequest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { FeedbackService } from "../services/feedbackService";
import { ValidationHelper } from "../utils/validationHelper";

/**
 * Generate a feedback record from the request.
 */
export async function feedbackCreate(config: IConfiguration, request: IFeedbackCreateRequest): Promise<IResponse> {
    ValidationHelper.string(request.document, "document");

    const feedbackService = new FeedbackService(config.dynamoDbConnection);

    const docName = ValidationHelper.stripHtml(request.document);

    let documentFeedback = await feedbackService.get(docName);

    if (!documentFeedback) {
        documentFeedback = {
            document: docName,
            entries: []
        };
    }

    documentFeedback.entries.push({
        wasItUseful: request.wasItUseful,
        comments: ValidationHelper.stripHtml(request.comments.substr(4096)),
        timestamp: Date.now()
    });

    await feedbackService.set(documentFeedback);

    return {
        success: true,
        message: "OK"
    };
}
