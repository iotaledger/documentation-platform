import { IAWSConfiguration } from "./IAWSConfiguration";

/**
 * Definition of configuration file.
 */
export interface IConfiguration {
    /**
     * The dynamic db connection.
     */
    dynamoDbConnection: IAWSConfiguration;
}
