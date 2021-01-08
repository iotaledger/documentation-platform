"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHelper = void 0;
/**
 * Helper functions for validating input.
 */
var ValidationHelper = /** @class */ (function () {
    function ValidationHelper() {
    }
    /**
     * Does the string have some content.
     * @param str The string to validate.
     * @param name The parameter name.
     */
    ValidationHelper.string = function (str, name) {
        if (str === undefined || str === null || str.trim().length === 0) {
            throw new Error("The parameter '" + name + "' has an invalid value.");
        }
    };
    /**
     * Does the number have a value.
     * @param num The number to validate.
     * @param name The parameter name.
     */
    ValidationHelper.number = function (num, name) {
        if (num === undefined || num === null || typeof num !== "number") {
            throw new Error("The parameter '" + name + "' has an invalid value.");
        }
    };
    /**
     * Is the value of one the specified items.
     * @param val The value to validate.
     * @param options The possible options.
     * @param name The parameter name.
     */
    ValidationHelper.oneOf = function (val, options, name) {
        if (options.indexOf(val) < 0) {
            throw new Error("The parameter '" + name + "' has an invalid value.");
        }
    };
    /**
     * Is the value trytes.
     * @param str The string to validate.
     * @param length The length to match.
     * @param name The parameter name.
     */
    ValidationHelper.trytes = function (str, length, name) {
        if (!new RegExp("^[A-Z9]{" + length + "}$").test(str)) {
            throw new Error("The parameter '" + name + "' has an invalid value.");
        }
    };
    /**
     * Strip any HTML entities from the content.
     * @param content The content to process.
     * @returns The content with html entities removed.
     */
    ValidationHelper.stripHtml = function (content) {
        return content ? content.replace(/<[^>]*>/g, "") : content;
    };
    return ValidationHelper;
}());
exports.ValidationHelper = ValidationHelper;
