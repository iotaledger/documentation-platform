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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var searchQueryService_1 = require("../services/searchQueryService");
var validationHelper_1 = require("../utils/validationHelper");
/**
 * Search the documents.
 * @param config The configuration.
 * @param request the request.
 * @returns The response.
 */
function search(config, request) {
    return __awaiter(this, void 0, void 0, function () {
        var items, q, searchQueryService, existing, err_1, solrQuery, queries, queryParts, boostMultiplier, i, escapedQuery, solrOptions, endPoint, solrExec, options, res, resData, i, matches, searchResultItem, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    validationHelper_1.ValidationHelper.string(request.query, "query");
                    items = [];
                    q = validationHelper_1.ValidationHelper.stripHtml(request.query || "").trim();
                    if (!q) {
                        return [2 /*return*/, {
                                success: true,
                                message: "OK",
                                items: []
                            }];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    searchQueryService = new searchQueryService_1.SearchQueryService(config.dynamoDbConnection);
                    return [4 /*yield*/, searchQueryService.get(q)];
                case 2:
                    existing = _a.sent();
                    if (existing) {
                        existing.count++;
                    }
                    else {
                        existing = {
                            query: q,
                            count: 1
                        };
                    }
                    return [4 /*yield*/, searchQueryService.set(existing)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 5];
                case 5:
                    solrQuery = "q=";
                    queries = [q];
                    queryParts = q.split(" ");
                    if (queryParts.length > 1) {
                        queries = queries.concat(queryParts);
                    }
                    boostMultiplier = 5;
                    for (i = 0; i < queries.length; i++) {
                        escapedQuery = "\"" + queries[i] + "\"";
                        solrQuery += "tags:" + escapedQuery + "^" + 100 * boostMultiplier + " "; // Boost if exact match found in tags
                        solrQuery += "title:" + escapedQuery + "^" + 10 * boostMultiplier + " "; // Boost if exact match found in title
                        solrQuery += "id:" + escapedQuery + "^" + 10 * boostMultiplier + " "; // Boost if exact match found in id
                        solrQuery += "body:" + escapedQuery + "^" + 5 * boostMultiplier + " "; // Boost if exact match found in body
                        solrQuery += "tags:" + escapedQuery + "~2 "; // Fuzzy search in tags, 2 changes from original query
                        solrQuery += "title:" + escapedQuery + "~2 "; // Fuzzy search in title, 2 changes from original query
                        solrQuery += "body:" + escapedQuery + "~2"; // Fuzzy search in body, 2 changes from original query
                        boostMultiplier = 1;
                    }
                    solrOptions = "hl=true&hl.fl=title,body&hl.fragsize=0&hl.method=unified&rows=50";
                    endPoint = config.search.endpoint;
                    if (!endPoint.endsWith("/")) {
                        endPoint += "/";
                    }
                    if (!endPoint.endsWith("solr/")) {
                        endPoint += "solr/";
                    }
                    solrExec = "" + endPoint + config.search.core + "/select?" + solrQuery + "&" + solrOptions;
                    options = {
                        headers: {}
                    };
                    if (config.search.authorization) {
                        options.headers.Authorization = "Basic " + config.search.authorization;
                    }
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 10, , 11]);
                    return [4 /*yield*/, node_fetch_1.default(solrExec, options)];
                case 7:
                    res = _a.sent();
                    if (!(res.status === 200)) return [3 /*break*/, 9];
                    return [4 /*yield*/, res.json()];
                case 8:
                    resData = _a.sent();
                    if (resData.response && resData.response.docs) {
                        for (i = 0; i < resData.response.docs.length; i++) {
                            matches = [];
                            if (resData.highlighting && resData.highlighting[resData.response.docs[i].id]) {
                                if (resData.highlighting[resData.response.docs[i].id].title) {
                                    extractMatches(resData.highlighting[resData.response.docs[i].id].title[0], matches);
                                }
                                if (resData.highlighting[resData.response.docs[i].id].body) {
                                    extractMatches(resData.highlighting[resData.response.docs[i].id].body[0], matches);
                                }
                            }
                            if (!resData.response.docs[i].status || resData.response.docs[i].status[0] !== "deprecated") {
                                searchResultItem = {
                                    id: resData.response.docs[i].id,
                                    title: resData.response.docs[i].title[0],
                                    snippet: resData.response.docs[i].snippet[0],
                                    matches: matches
                                };
                                // Boost overview pages to the start of the list if they contain the query
                                if (searchResultItem.id.toLowerCase().indexOf(request.query.toLowerCase()) >= 0 &&
                                    searchResultItem.id.endsWith("overview")) {
                                    items.unshift(searchResultItem);
                                }
                                else {
                                    items.push(searchResultItem);
                                }
                            }
                        }
                        // Sort the results so that different versions of the same document always show
                        // the newest one first
                        items.sort(function (a, b) {
                            var aParts = a.id.split("/");
                            var bParts = b.id.split("/");
                            var aVersion = parseFloat(aParts.splice(2, 1)[0]);
                            var bVersion = parseFloat(bParts.splice(2, 1)[0]);
                            // If the id without the version section is the same, then do a comparison of versions
                            if (aParts.join("/") === bParts.join("/")) {
                                return bVersion - aVersion;
                            }
                            // Otherwise just keep the original ordering
                            return 0;
                        });
                    }
                    _a.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    err_2 = _a.sent();
                    console.error("solr Query Failed", err_2);
                    throw new Error("Unable to query the search engine");
                case 11: return [2 /*return*/, {
                        success: true,
                        message: "OK",
                        items: items
                    }];
            }
        });
    });
}
exports.search = search;
/**
 * Extract matches from data.
 * @param field The field to extact from.
 * @param matches The matches list.
 */
function extractMatches(field, matches) {
    var highlightMatch = /<em>(.*?)<\/em>/g;
    var match;
    do {
        match = highlightMatch.exec(field);
        if (match && matches.indexOf(match[1]) < 0) {
            matches.push(match[1]);
        }
    } while (match);
}
