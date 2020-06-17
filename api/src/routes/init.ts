import { IConfiguration } from "../models/configuration/IConfiguration";
import { EmailService } from "../services/emailService";
import { FeedbackService } from "../services/feedbackService";
import { MissingService } from "../services/missingService";
import { SearchQueryService } from "../services/searchQueryService";
import { DbHelper } from "../utils/dbHelper";

/**
 * Initialise the database.
 */
export async function init(config: IConfiguration): Promise<string> {
    let log = "Initializing database\n";

    try {
        const tables = await DbHelper.listTables(config.dynamoDbConnection);

        if (tables.indexOf(`${config.dynamoDbConnection.dbTablePrefix}${EmailService.TABLE_NAME}`) < 0) {
            log += await new EmailService(config.dynamoDbConnection).createTable();
        }
        if (tables.indexOf(`${config.dynamoDbConnection.dbTablePrefix}${FeedbackService.TABLE_NAME}`) < 0) {
            log += await new FeedbackService(config.dynamoDbConnection).createTable();
        }
        if (tables.indexOf(`${config.dynamoDbConnection.dbTablePrefix}${MissingService.TABLE_NAME}`) < 0) {
            log += await new MissingService(config.dynamoDbConnection).createTable();
        }
        if (tables.indexOf(`${config.dynamoDbConnection.dbTablePrefix}${SearchQueryService.TABLE_NAME}`) < 0) {
            log += await new SearchQueryService(config.dynamoDbConnection).createTable();
        }
        log += "Database initialized Successfully\n";
    } catch (err) {
        log += `Error initializing database ${err}\n`;
    }

    return log;
}
