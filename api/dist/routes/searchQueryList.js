"use strict";
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
exports.searchQueryList = void 0;
var searchQueryService_1 = require("../services/searchQueryService");
var validationHelper_1 = require("../utils/validationHelper");
/**
 * Generate a report of all the search queries.
 */
function searchQueryList(config, request) {
    return __awaiter(this, void 0, void 0, function () {
        var searchQueryService, items, head, body, tc, _i, items_1, item, foot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    validationHelper_1.ValidationHelper.string(request.adminKey, "adminKey");
                    if (request.adminKey !== config.adminKey) {
                        throw new Error("Invalid adminKey");
                    }
                    searchQueryService = new searchQueryService_1.SearchQueryService(config.dynamoDbConnection);
                    return [4 /*yield*/, searchQueryService.getAll()];
                case 1:
                    items = _a.sent();
                    items.sort(function (a, b) { return b.count - a.count; });
                    head = "<html><head><title>Search Queries</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css\" integrity=\"sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I\" crossorigin=\"anonymous\"></head><body>";
                    body = "<div class=\"m-4\"><table class=\"table table-striped\"><thead><tr><th>Query</th><th>Count</th></tr></thead><tbody>";
                    tc = "";
                    for (_i = 0, items_1 = items; _i < items_1.length; _i++) {
                        item = items_1[_i];
                        tc += "<tr><td>" + item.query + "</td><td>" + item.count + "</td><td></tr>";
                    }
                    foot = "</tbody></table></div></body>";
                    return [2 /*return*/, {
                            success: true,
                            contentType: "text/html",
                            inline: true,
                            data: Buffer.from("" + head + body + tc + foot)
                        }];
            }
        });
    });
}
exports.searchQueryList = searchQueryList;
