import { IAWSDynamoDbConfiguration } from "../models/configuration/IAWSDynamoDbConfiguration";
import { IFeedback } from "../models/db/IFeedback";
import { AmazonDynamoDbService } from "./amazonDynamoDbService";

/**
 * Service to handle the feedback.
 */
export class FeedbackService extends AmazonDynamoDbService<IFeedback> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "feedback";

    /**
     * Create a new instance of FeedbackService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSDynamoDbConfiguration) {
        super(config, FeedbackService.TABLE_NAME, "document");
    }
}
