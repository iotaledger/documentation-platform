import { IConfiguration } from "../models/configuration/IConfiguration";
import { EmailService } from "../services/emailService";
import { FeedbackService } from "../services/feedbackService";
import { MissingService } from "../services/missingService";
import { SearchQueryService } from "../services/searchQueryService";

/**
 * Initialise the database.
 */
export async function init(config: IConfiguration): Promise<string[]> {
    let log = "Initializing\n";

    try {
        log += await new EmailService(config.dynamoDbConnection).createTable();
        log += await new FeedbackService(config.dynamoDbConnection).createTable();
        log += await new MissingService(config.dynamoDbConnection).createTable();
        log += await new SearchQueryService(config.dynamoDbConnection).createTable();
    } catch (err) {
        log += `Failed\n${err.toString()}\n`;
    }

    if (log.indexOf("Failed") < 0) {
        log += "Initialization Succeeded";
    } else {
        log += "Initialization Failed";
    }

    return log.split("\n");
}
