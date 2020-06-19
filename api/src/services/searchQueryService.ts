import { IAWSDynamoDbConfiguration } from "../models/configuration/IAWSDynamoDbConfiguration";
import { ISearchQuery } from "../models/db/ISearchQuery";
import { AmazonDynamoDbService } from "./amazonDynamoDbService";

/**
 * Service to handle the queries.
 */
export class SearchQueryService extends AmazonDynamoDbService<ISearchQuery> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "search-query";

    /**
     * Create a new instance of SearchQueryService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSDynamoDbConfiguration) {
        super(config, SearchQueryService.TABLE_NAME, "query");
    }
}
