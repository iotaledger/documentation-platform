import { IAWSConfiguration } from "../models/configuration/IAWSConfiguration";
import { IEmail } from "../models/db/IEmail";
import { DbService } from "./dbService";

/**
 * Service to handle the emails.
 */
export class EmailService extends DbService<IEmail> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "email";

    /**
     * Create a new instance of EmailService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSConfiguration) {
        super(config, EmailService.TABLE_NAME, "email");
    }
}
