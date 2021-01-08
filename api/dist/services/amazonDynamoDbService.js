"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonDynamoDbService = void 0;
var aws = __importStar(require("aws-sdk"));
/**
 * Service to handle db requests.
 */
var AmazonDynamoDbService = /** @class */ (function () {
    function AmazonDynamoDbService(config, tableName, idName) {
        this._config = config;
        this._fullTableName = "" + this._config.dbTablePrefix + tableName;
        this._idName = idName;
    }
    /**
     * Create the table for the items.
     * @returns Log of the table creation.
     */
    AmazonDynamoDbService.prototype.createTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var log, dbConnection, tableParams, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log = "Creating table '" + this._fullTableName + "'\n";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        dbConnection = this.createConnection();
                        tableParams = {
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
                            TableName: this._fullTableName
                        };
                        return [4 /*yield*/, dbConnection.createTable(tableParams).promise()];
                    case 2:
                        _a.sent();
                        log += "Waiting for '" + this._fullTableName + "'\n";
                        return [4 /*yield*/, dbConnection.waitFor("tableExists", {
                                TableName: this._fullTableName
                            }).promise()];
                    case 3:
                        _a.sent();
                        log += "Table '" + this._fullTableName + "' Created Successfully\n";
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        if (err_1.code === "ResourceInUseException") {
                            log += "Table '" + this._fullTableName + "' Already Exists\n";
                        }
                        else {
                            log += "Table '" + this._fullTableName + "' Creation Failed\n" + err_1.toString() + "\n";
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, log];
                }
            });
        });
    };
    /**
     * Get the item.
     * @param id The id of the item to get.
     * @returns The object if it can be found or undefined.
     */
    AmazonDynamoDbService.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var docClient, key, response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        docClient = this.createDocClient();
                        key = {};
                        key[this._idName] = id;
                        return [4 /*yield*/, docClient.get({
                                TableName: this._fullTableName,
                                Key: key
                            }).promise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.Item];
                    case 2:
                        err_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set the item.
     * @param item The item to set.
     */
    AmazonDynamoDbService.prototype.set = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var docClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        docClient = this.createDocClient();
                        return [4 /*yield*/, docClient.put({
                                TableName: this._fullTableName,
                                Item: item
                            }).promise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete the item.
     * @param itemKey The key of the item to remove.
     */
    AmazonDynamoDbService.prototype.remove = function (itemKey) {
        return __awaiter(this, void 0, void 0, function () {
            var docClient, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        docClient = this.createDocClient();
                        key = {};
                        key[this._idName] = itemKey;
                        return [4 /*yield*/, docClient.delete({
                                TableName: this._fullTableName,
                                Key: key
                            }).promise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get all the items.
     * @returns All the items for the table.
     */
    AmazonDynamoDbService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var docClient, response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        docClient = this.createDocClient();
                        return [4 /*yield*/, docClient.scan({
                                TableName: this._fullTableName
                            }).promise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.Items];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create and set the configuration for db.
     * @param config The configuration to use for connection.
     */
    AmazonDynamoDbService.prototype.createAndSetConfig = function () {
        var awsConfig = new aws.Config({
            accessKeyId: this._config.accessKeyId,
            secretAccessKey: this._config.secretAccessKey,
            region: this._config.region
        });
        aws.config.update(awsConfig);
    };
    /**
     * Create a new DB connection.
     * @param config The configuration for the connection.
     * @returns The dynamo db connection.
     */
    AmazonDynamoDbService.prototype.createConnection = function () {
        this.createAndSetConfig();
        return new aws.DynamoDB({ apiVersion: "2012-10-08" });
    };
    /**
     * Create a doc client connection.
     * @param config The configuration to use for connection.
     * @returns The dynamo db document client.
     */
    AmazonDynamoDbService.prototype.createDocClient = function () {
        this.createAndSetConfig();
        return new aws.DynamoDB.DocumentClient({
            apiVersion: "2012-10-08",
            convertEmptyValues: true
        });
    };
    return AmazonDynamoDbService;
}());
exports.AmazonDynamoDbService = AmazonDynamoDbService;
