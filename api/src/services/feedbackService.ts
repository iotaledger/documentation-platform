import { IFeedback } from "../models/db/IFeedback";
import { IAWSConfiguration } from "../models/IAWSConfiguration";
import { DbService } from "./dbService";

/**
 * Service to handle the feedback.
 */
export class FeedbackService extends DbService<IFeedback> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "feedback";

    /**
     * Create a new instance of FeedbackService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSConfiguration) {
        super(config, FeedbackService.TABLE_NAME, "document");
    }
}
