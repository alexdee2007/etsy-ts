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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOauth = exports.HttpError = void 0;
const oauth = __importStar(require("oauth"));
const Transaction_1 = require("./../api/Transaction");
const axios_1 = __importDefault(require("axios"));
class HttpError extends Error {
    constructor(message, statusCode, headers) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.headers = headers;
    }
}
exports.HttpError = HttpError;
class ClientOauth {
    constructor(options) {
        this.baseUrl = options.baseUrl || 'https://openapi.etsy.com/v2';
        this.requestUrl = options.requestUrl || 'https://openapi.etsy.com/v2/oauth/request_token';
        this.accessUrl = options.accessUrl || 'https://openapi.etsy.com/v2/oauth/access_token';
        this.consumerKey = options.consumerKey;
        this.consumerSecret = options.consumerSecret;
        this.version = options.version || '1.0';
        this.authorizeCallback = options.authorizeCallback || null;
        this.signatureMethod = options.signatureMethod || 'HMAC-SHA1';
        this.etsyOAuth = new oauth.OAuth(this.requestUrl, this.accessUrl, this.consumerKey, this.consumerSecret, this.version, this.authorizeCallback, this.signatureMethod);
        this.Transaction = new Transaction_1.Transaction(this);
    }
    request(uri, parameters, method, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.baseUrl + this.fillUriPlaceholders(uri, parameters);
            let data;
            switch (method.toUpperCase()) {
                case 'GET':
                case 'DELETE':
                    if (Object.keys(parameters).length > 0) {
                        let encodedParameters = this.encodePrameters(parameters);
                        url += '?' + encodedParameters;
                    }
                    break;
                default:
                    data = JSON.stringify(parameters);
            }
            let headers = {};
            if (options && options.token && options.tokenSecret) {
                headers = { Authorization: this.etsyOAuth.authHeader(url, options.token, options.tokenSecret) };
            }
            let response = yield axios_1.default({ method, url, data, headers });
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            else {
                throw response.statusText;
            }
        });
    }
    fillUriPlaceholders(uri, parameters) {
        let keys = Object.keys(parameters).filter((key) => uri.indexOf(`/:${key}`) > -1);
        keys.forEach((key) => {
            uri = uri.replace(`/:${key}`, `/${parameters[key]}`);
            delete parameters[key];
        });
        return uri;
    }
    encodePrameters(parameters) {
        if (Object.keys(parameters).length > 0) {
            return Object.keys(parameters)
                .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
                .join('&');
        }
        return '';
    }
}
exports.ClientOauth = ClientOauth;
