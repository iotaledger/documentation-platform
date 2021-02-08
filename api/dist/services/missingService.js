"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingService = void 0;
var amazonDynamoDbService_1 = require("./amazonDynamoDbService");
/**
 * Service to handle the missing.
 */
var MissingService = /** @class */ (function (_super) {
    __extends(MissingService, _super);
    /**
     * Create a new instance of MissingService.
     * @param config The configuration for db connection.
     */
    function MissingService(config) {
        return _super.call(this, config, MissingService.TABLE_NAME, "document") || this;
    }
    /**
     * The name of the database table.
     */
    MissingService.TABLE_NAME = "missing";
    return MissingService;
}(amazonDynamoDbService_1.AmazonDynamoDbService));
exports.MissingService = MissingService;
