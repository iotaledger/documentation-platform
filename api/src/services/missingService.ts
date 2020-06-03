import { IAWSConfiguration } from "../models/configuration/IAWSConfiguration";
import { IMissing } from "../models/db/IMissing";
import { DbService } from "./dbService";

/**
 * Service to handle the missing.
 */
export class MissingService extends DbService<IMissing> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "missing";

    /**
     * Create a new instance of MissingService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSConfiguration) {
        super(config, MissingService.TABLE_NAME, "document");
    }
}
