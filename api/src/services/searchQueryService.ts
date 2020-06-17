import { IAWSConfiguration } from "../models/configuration/IAWSConfiguration";
import { ISearchQuery } from "../models/db/ISearchQuery";
import { DbService } from "./dbService";

/**
 * Service to handle the queries.
 */
export class SearchQueryService extends DbService<ISearchQuery> {
    /**
     * The name of the database table.
     */
    public static readonly TABLE_NAME: string = "search-query";

    /**
     * Create a new instance of SearchQueryService.
     * @param config The configuration for db connection.
     */
    constructor(config: IAWSConfiguration) {
        super(config, SearchQueryService.TABLE_NAME, "query");
    }
}
