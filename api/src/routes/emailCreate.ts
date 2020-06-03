import { IEmailCreateRequest } from "../models/api/IEmailCreateRquest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { EmailService } from "../services/emailService";

/**
 * Generate an email record from the request.
 */
export async function emailCreate(config: IConfiguration, request: IEmailCreateRequest): Promise<IResponse> {
    if (!request.email) {
        throw new Error("Parameter email is missing");
    }

    const emailService = new EmailService(config.dynamoDbConnection);

    await emailService.set({
        email: request.email,
        timestamp: Date.now()
    });

    return {
        success: true,
        message: "Thank you for signing up!"
    };
}
