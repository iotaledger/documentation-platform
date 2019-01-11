import * as aws from "aws-sdk";
import { IAWSConfiguration } from "../models/IAWSConfiguration";

/**
 * Class to helper with database.
 */
export class DbHelper {
    /**
     * Create and set the configuration for db.
     * @param config The configuration to use for connection.
     */
    public static createAndSetConfig(config: IAWSConfiguration): void {
        const awsConfig = new aws.Config({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: config.region
        });

        aws.config.update(awsConfig);
    }

    /**
     * Create a new DB connection.
     * @param config The configuration for the connection.
     */
    public static createConnection(config: IAWSConfiguration): aws.DynamoDB {
        DbHelper.createAndSetConfig(config);

        return new aws.DynamoDB({ apiVersion: "2012-10-08" });
    }

    /**
     * Create a doc client connection.
     * @param config The configuration to use for connection.
     */
    public static createDocClient(config: IAWSConfiguration): aws.DynamoDB.DocumentClient {
        DbHelper.createAndSetConfig(config);

        return new aws.DynamoDB.DocumentClient({
            apiVersion: "2012-10-08",
            convertEmptyValues: true
        });
    }

    /**
     * List tables in the database.
     * @param config The configuration to use for connection.
     */
    public static async listTables(config: IAWSConfiguration): Promise<string[]> {
        const dbConnection = DbHelper.createConnection(config);

        const res = await dbConnection.listTables().promise();
        return res.TableNames;
    }
}
