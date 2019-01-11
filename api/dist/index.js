"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var emailCreate_1 = require("./routes/emailCreate");
var feedbackCreate_1 = require("./routes/feedbackCreate");
var init_1 = require("./routes/init");
var missingCreate_1 = require("./routes/missingCreate");
// tslint:disable:no-var-requires no-require-imports
var packageJson = require("../package.json");
var config = require("../data/config.json");
var port = process.env.PORT || 4000;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    next();
});
app.get("/", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ version: packageJson.version }));
    res.end();
});
app.get("/init", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var log;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, init_1.init(config)];
            case 1:
                log = _a.sent();
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify({ log: log }));
                res.end();
                return [2 /*return*/];
        }
    });
}); });
app.post("/email", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, emailCreate_1.emailCreate(config, req.body)];
            case 1:
                response = _a.sent();
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(response));
                res.end();
                return [2 /*return*/];
        }
    });
}); });
app.post("/feedback", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, feedbackCreate_1.feedbackCreate(config, req.body)];
            case 1:
                response = _a.sent();
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(response));
                res.end();
                return [2 /*return*/];
        }
    });
}); });
app.post("/missing", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, missingCreate_1.missingCreate(config, req.body)];
            case 1:
                response = _a.sent();
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(response));
                res.end();
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function (err) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (err) {
            throw err;
        }
        console.log("Started API Server on port " + port + " v" + packageJson.version);
        return [2 /*return*/];
    });
}); });
