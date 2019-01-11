"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dbService_1 = require("./dbService");
/**
 * Service to handle the emails.
 */
var EmailService = /** @class */ (function (_super) {
    __extends(EmailService, _super);
    /**
     * Create a new instance of EmailService.
     * @param config The configuration for db connection.
     */
    function EmailService(config) {
        return _super.call(this, config, EmailService.TABLE_NAME, "email") || this;
    }
    /**
     * The name of the database table.
     */
    EmailService.TABLE_NAME = "documentation_email";
    return EmailService;
}(dbService_1.DbService));
exports.EmailService = EmailService;
