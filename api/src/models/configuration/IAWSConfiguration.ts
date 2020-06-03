/**
 * Definition of AWS configuration.
 */
export interface IAWSConfiguration {
    /**
     * The region for the AWS connection.
     */
    region: string;
    /**
     * The AWS access key.
     */
    accessKeyId: string;
    /**
     * The AWS secret access key.
     */
    secretAccessKey: string;

    /**
     * Prefix for all tables.
     */
    dbTablePrefix: string;
}
