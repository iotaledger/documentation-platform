import { IAWSDynamoDbConfiguration } from "../models/configuration/IAWSDynamoDbConfiguration";
import { IEmail } from "../models/db/IEmail";
import { AmazonDynamoDbService } from "./amazonDynamoDbService";

/**
 * Service to handle the emails.
 */
export class EmailService extends AmazonDynamoDbService<IEmail> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "email";

    /**
     * Create a new instance of EmailService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSDynamoDbConfiguration) {
        super(config, EmailService.TABLE_NAME, "email");
    }
}
