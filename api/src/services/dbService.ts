import { IAWSConfiguration } from "../models/IAWSConfiguration";
import { DbHelper } from "../utils/dbHelper";

/**
 * Service to handle db requests.
 */
export abstract class DbService<T> {
    /**
     * The name of the database table.
     */
    public _tableName: string;

    /**
     * Configuration to connection to AWS.
     */
    private readonly _config: IAWSConfiguration;

    /**
     * The id field name.
     */
    private readonly _idName: string;

    constructor(config: IAWSConfiguration, tableName: string, idName: string) {
        this._config = config;
        this._tableName = tableName;
        this._idName = idName;
    }

    /**
     * Create the table for the items.
     */
    public async createTable(): Promise<string> {
        let log = `Creating table ${this._tableName}\n`;

        const dbConnection = DbHelper.createConnection(this._config);

        const tableParams = {
            AttributeDefinitions: [
                {
                    AttributeName: this._idName,
                    AttributeType: "S"
                }
            ],
            KeySchema: [
                {
                    AttributeName: this._idName,
                    KeyType: "HASH"
                }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            },
            TableName: this._tableName
        };

        await dbConnection.createTable(tableParams).promise();

        log += `Waiting for ${this._tableName}\n`;

        await dbConnection.waitFor("tableExists", {
            TableName: this._tableName
        }).promise();

        log += `${this._tableName} Created Successfully\n`;

        return log;
    }

    /**
     * Get the item.
     * @param id The id of the item to get.
     */
    public async get(id: string): Promise<T> {
        try {
            const docClient = DbHelper.createDocClient(this._config);

            const key = {};
            key[this._idName] = id;

            const response = await docClient.get({
                TableName: this._tableName,
                Key: key
            }).promise();

            return <T>response.Item;
        } catch (err) {
        }
    }

    /**
     * Set the item.
     * @param item The item to set.
     */
    public async set(item: T): Promise<void> {
        const docClient = DbHelper.createDocClient(this._config);

        await docClient.put({
            TableName: this._tableName,
            Item: item
        }).promise();
    }
}
