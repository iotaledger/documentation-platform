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
exports.FeedbackService = void 0;
var amazonDynamoDbService_1 = require("./amazonDynamoDbService");
/**
 * Service to handle the feedback.
 */
var FeedbackService = /** @class */ (function (_super) {
    __extends(FeedbackService, _super);
    /**
     * Create a new instance of FeedbackService.
     * @param config The configuration for db connection.
     */
    function FeedbackService(config) {
        return _super.call(this, config, FeedbackService.TABLE_NAME, "document") || this;
    }
    /**
     * The name of the database table.
     */
    FeedbackService.TABLE_NAME = "feedback";
    return FeedbackService;
}(amazonDynamoDbService_1.AmazonDynamoDbService));
exports.FeedbackService = FeedbackService;
