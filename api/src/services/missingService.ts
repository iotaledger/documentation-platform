import { IAWSDynamoDbConfiguration } from "../models/configuration/IAWSDynamoDbConfiguration";
import { IMissing } from "../models/db/IMissing";
import { AmazonDynamoDbService } from "./amazonDynamoDbService";

/**
 * Service to handle the missing.
 */
export class MissingService extends AmazonDynamoDbService<IMissing> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "missing";

    /**
     * Create a new instance of MissingService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSDynamoDbConfiguration) {
        super(config, MissingService.TABLE_NAME, "document");
    }
}
