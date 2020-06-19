import { IMissingCreateRequest } from "../models/api/IMissingCreateRequest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { MissingService } from "../services/missingService";
import { ValidationHelper } from "../utils/validationHelper";

/**
 * Generate a missing record from the request.
 */
export async function missingCreate(config: IConfiguration, request: IMissingCreateRequest): Promise<IResponse> {
    ValidationHelper.string(request.document, "document");

    const missingService = new MissingService(config.dynamoDbConnection);

    let documentMissing = await missingService.get(request.document);

    if (!documentMissing) {
        documentMissing = {
            document: request.document
        };
    }

    documentMissing.fromDocumentTime = documentMissing.fromDocumentTime || [];

    if (!request.fromDocument) {
        request.fromDocument = "Unknown source";
    }

    const current = documentMissing.fromDocumentTime.find(f => f.document === request.fromDocument);

    if (current) {
        current.timestamp = Date.now();
    } else {
        documentMissing.fromDocumentTime.push({
            document: request.fromDocument,
            timestamp: Date.now()
        });
    }

    await missingService.set(documentMissing);

    return {
        success: true,
        message: "OK"
    };
}
