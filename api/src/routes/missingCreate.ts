import { IMissingCreateRequest } from "../models/api/IMissingCreateRequest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { MissingService } from "../services/missingService";

/**
 * Generate a missing record from the request.
 */
export async function missingCreate(config: IConfiguration, request: IMissingCreateRequest): Promise<IResponse> {
    if (!request.document) {
        throw new Error("Parameter document is missing");
    }

    const missingService = new MissingService(config.dynamoDbConnection);

    let documentMissing = await missingService.get(request.document);

    if (!documentMissing) {
        documentMissing = {
            document: request.document,
            fromDocument: []
        };
    }

    if (request.fromDocument && documentMissing.fromDocument.indexOf(request.fromDocument) < 0) {
        documentMissing.fromDocument.push(request.fromDocument);
    }

    await missingService.set(documentMissing);

    return {
        success: true,
        message: "OK"
    };
}
