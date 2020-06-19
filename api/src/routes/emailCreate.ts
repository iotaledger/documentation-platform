import { IEmailCreateRequest } from "../models/api/IEmailCreateRquest";
import { IResponse } from "../models/api/IResponse";
import { IConfiguration } from "../models/configuration/IConfiguration";
import { EmailService } from "../services/emailService";
import { ValidationHelper } from "../utils/validationHelper";

/**
 * Generate an email record from the request.
 */
export async function emailCreate(config: IConfiguration, request: IEmailCreateRequest): Promise<IResponse> {
    ValidationHelper.string(request.email, "email");

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
