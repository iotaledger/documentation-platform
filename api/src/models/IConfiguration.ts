import { IAWSConfiguration } from "./IAWSConfiguration";

/**
 * Definition of configuration file.
 */
export interface IConfiguration {
    /**
     * The dynamic db connection.
     */
    dynamoDbConnection: IAWSConfiguration;

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
}
