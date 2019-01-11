import { IConfiguration } from "../models/IConfiguration";
import { EmailService } from "../services/emailService";
import { FeedbackService } from "../services/feedbackService";
import { MissingService } from "../services/missingService";
import { DbHelper } from "../utils/dbHelper";

/**
 * Initialise the database.
 */
export async function init(config: IConfiguration): Promise<string> {
    let log = "Initializing database\n";

    try {
        const tables = await DbHelper.listTables(config.dynamoDbConnection);

        if (tables.indexOf(EmailService.TABLE_NAME) < 0) {
            log += await new EmailService(config.dynamoDbConnection).createTable();
        }
        if (tables.indexOf(FeedbackService.TABLE_NAME) < 0) {
            log += await new FeedbackService(config.dynamoDbConnection).createTable();
        }
        if (tables.indexOf(MissingService.TABLE_NAME) < 0) {
            log += await new MissingService(config.dynamoDbConnection).createTable();
        }
        log += "Database initialized Successfully\n";
    } catch (err) {
        log += `Error initializing database ${err}\n`;
    }

    return log;
}
