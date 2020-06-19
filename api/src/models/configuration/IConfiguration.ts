import { IAWSDynamoDbConfiguration } from "./IAWSDynamoDbConfiguration";
import { ISolrConfiguration } from "./ISolrConfiguration";

/**
 * Definition of configuration file.
 */
export interface IConfiguration {
    /**
     * The dynamic db connection.
     */
    dynamoDbConnection: IAWSDynamoDbConfiguration;

    /**
     * The feeds configurations.
     */
    feeds: {
        [id: string]: {
            /**
             * The service for the feed.
             */
            service: string;
            /**
             * The config for the service.
             */
            config: any;
        };
    };

    /**
     * Configuration for search.
     */
    search: ISolrConfiguration;

    /**
     * Key for admin routes.
     */
    adminKey: string;

    /**
     * A list of domains allowed to access the api.
     */
    allowedDomains: string[];
}
