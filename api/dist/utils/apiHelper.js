"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.cors = exports.executeRoute = exports.findRoute = void 0;
var path_1 = require("path");
var util_1 = require("util");
var initServices_1 = require("../initServices");
/**
 * Find a route to match
 * @param findRoutes The routes to match against.
 * @param url The url to find.
 * @param method The method to find.
 * @returns The matching route if there is one and any extracted params.
 */
function findRoute(findRoutes, url, method) {
    var urlParts = url.replace(/\/$/, "").split("/");
    for (var _i = 0, findRoutes_1 = findRoutes; _i < findRoutes_1.length; _i++) {
        var route = findRoutes_1[_i];
        if (route.method === method) {
            var routeParts = route.path.split("/");
            var params = {};
            var i = void 0;
            for (i = 0; i < urlParts.length && i < routeParts.length; i++) {
                if (routeParts[i] === urlParts[i]) {
                    // This segment matches OK
                }
                else if (routeParts[i].startsWith(":") &&
                    (i < urlParts.length || routeParts[i].endsWith("?"))) {
                    // Its a param match in the url
                    // or an undefined parameter past the end of the match
                    if (i < urlParts.length) {
                        params[routeParts[i].substr(1).replace("?", "")] = urlParts[i];
                    }
                }
                else {
                    break;
                }
            }
            if (i === urlParts.length) {
                return {
                    route: route,
                    params: params
                };
            }
        }
    }
    return undefined;
}
exports.findRoute = findRoute;
/**
 * Execute the route which matches the path.
 * @param req The request.
 * @param res The response.
 * @param config The configuration.
 * @param route The route.
 * @param pathParams The params extracted from the url.
 * @param logHook Optional hook for logging errors.
 */
function executeRoute(req, res, config, route, pathParams, logHook) {
    return __awaiter(this, void 0, void 0, function () {
        var response, start, filteredParams, status, params, body, modulePath, mod, err_1, dataResponse, filename;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = Date.now();
                    status = 400;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 13, , 16]);
                    params = void 0;
                    body = void 0;
                    if (route.dataBody) {
                        body = req.body;
                        params = __assign(__assign({}, pathParams), req.query);
                    }
                    else {
                        params = __assign(__assign(__assign({}, pathParams), req.query), req.body);
                    }
                    filteredParams = logParams(params);
                    console.log("===> " + route.method.toUpperCase() + " " + route.path);
                    console.log(util_1.inspect(filteredParams, false, null, false));
                    if (!route.func) return [3 /*break*/, 8];
                    modulePath = void 0;
                    if (route.folder) {
                        modulePath = path_1.join(__dirname, "..", "routes", route.folder, route.func);
                    }
                    else {
                        modulePath = path_1.join(__dirname, "..", "routes", route.func);
                    }
                    mod = void 0;
                    try {
                        // tslint:disable-next-line:non-literal-require
                        mod = require(modulePath);
                    }
                    catch (err) {
                        console.error(err);
                    }
                    if (!mod) return [3 /*break*/, 6];
                    if (!mod[route.func]) return [3 /*break*/, 4];
                    return [4 /*yield*/, initServices_1.initServices(config)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, mod[route.func](config, params, body, req.headers || {})];
                case 3:
                    response = _a.sent();
                    status = 200;
                    return [3 /*break*/, 5];
                case 4:
                    status = 400;
                    response = {
                        success: false,
                        message: "Route '" + route.path + "' module '" + modulePath + "' does not contain a method '" + route.func + "'"
                    };
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    status = 400;
                    response = { success: false, message: "Route '" + route.path + "' module '" + modulePath + "' failed to load" };
                    _a.label = 7;
                case 7: return [3 /*break*/, 12];
                case 8:
                    if (!(route.inline !== undefined)) return [3 /*break*/, 11];
                    return [4 /*yield*/, initServices_1.initServices(config)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, route.inline(config, params, body, req.headers || {})];
                case 10:
                    response = _a.sent();
                    status = 200;
                    return [3 /*break*/, 12];
                case 11:
                    status = 400;
                    response = { success: false, message: "Route " + route.path + " has no func or inline property set" };
                    _a.label = 12;
                case 12: return [3 /*break*/, 16];
                case 13:
                    err_1 = _a.sent();
                    status = err_1.httpCode || 400;
                    response = { success: false, message: err_1.message };
                    if (!logHook) return [3 /*break*/, 15];
                    return [4 /*yield*/, logHook(err_1.message, status, filteredParams)];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15: return [3 /*break*/, 16];
                case 16:
                    console.log("<=== duration: " + (Date.now() - start) + "ms");
                    console.log(util_1.inspect(response, false, null, false));
                    if (route.dataResponse && status === 200) {
                        dataResponse = response;
                        if (!dataResponse.success) {
                            status = 400;
                        }
                        if (dataResponse.contentType) {
                            res.setHeader("Content-Type", dataResponse.contentType);
                        }
                        filename = "";
                        if (dataResponse.filename) {
                            filename = "; filename=\"" + dataResponse.filename + "\"";
                        }
                        res.setHeader("Content-Disposition", "" + (dataResponse.inline ? "inline" : "attachment") + filename);
                        res.setHeader("Content-Length", dataResponse.data.length);
                        res.status(status).send(dataResponse.data);
                    }
                    else {
                        res.setHeader("Content-Type", "application/json");
                        res.status(status).send(JSON.stringify(response));
                    }
                    res.end();
                    return [2 /*return*/];
            }
        });
    });
}
exports.executeRoute = executeRoute;
/**
 * Convert the params to logable
 * @param obj The object to convert.
 * @returns The converted object.
 */
// tslint:disable: no-any
function logParams(obj) {
    var newobj = {};
    for (var key in obj) {
        if (key.indexOf("pass") >= 0) {
            newobj[key] = "*************";
        }
        else if (key.indexOf("base64") >= 0 || key.indexOf("binaryData") >= 0) {
            newobj[key] = "<base64>";
        }
        else {
            if (obj[key] !== undefined && obj[key] !== null) {
                if (obj[key].constructor.name === "Object") {
                    newobj[key] = logParams(obj[key]);
                }
                else if (Array.isArray(obj[key])) {
                    newobj[key] = obj[key].map(logParams);
                }
                else {
                    newobj[key] = obj[key];
                }
            }
            else {
                newobj[key] = obj[key];
            }
        }
    }
    return newobj;
}
/**
 * Handle cors.
 * @param req Request The request.
 * @param res Response The response.
 * @param allowOrigins The allowed origins.
 * @param allowMethods The allowed methods.
 * @param allowHeaders The allowed headers.
 */
function cors(req, res, allowOrigins, allowMethods, allowHeaders) {
    if (!allowOrigins || allowOrigins === "*") {
        res.setHeader("Access-Control-Allow-Origin", "*");
    }
    else if (allowOrigins) {
        var requestOrigin = req.headers.origin;
        var origins = Array.isArray(allowOrigins) ? allowOrigins : allowOrigins.split(";");
        var isAllowed = void 0;
        for (var _i = 0, origins_1 = origins; _i < origins_1.length; _i++) {
            var origin_1 = origins_1[_i];
            if (requestOrigin === origin_1 || origin_1 === "*") {
                isAllowed = origin_1;
                break;
            }
        }
        if (isAllowed) {
            res.setHeader("Access-Control-Allow-Origin", isAllowed);
        }
    }
    if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Methods", allowMethods || "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", allowHeaders || "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept");
    }
}
exports.cors = cors;
