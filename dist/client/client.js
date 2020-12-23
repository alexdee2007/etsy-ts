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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const defaultOptions = {
    baseUrl: "https://www.etsy.com/api/v2/ajax",
    json: true,
};
function request(uri, parameters, method, options) {
    return __awaiter(this, void 0, void 0, function* () {
        options = Object.assign(Object.assign({}, defaultOptions), options);
        let url = options.baseUrl + fillUriPlaceholders(uri, parameters);
        let body;
        switch (method.toUpperCase()) {
            case "GET":
            case "DELETE":
                if (Object.keys(parameters).length > 0) {
                    let encodedParameters = encodePrameters(parameters);
                    url += "?" + encodedParameters;
                }
                break;
            default:
                body = JSON.stringify(parameters);
        }
        let response = yield axios_1.default({
            method: method,
            url: url,
            data: body,
        });
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
        else {
            throw response.statusText;
        }
    });
}
exports.request = request;
function fillUriPlaceholders(uri, parameters) {
    let keys = Object.keys(parameters).filter((key) => uri.indexOf(`/:${key}`) > -1);
    keys.forEach((key) => {
        uri = uri.replace(`/:${key}`, `/${parameters[key]}`);
        delete parameters[key];
    });
    return uri;
}
function encodePrameters(parameters) {
    if (Object.keys(parameters).length > 0) {
        return Object.keys(parameters)
            .map((k) => encodeURIComponent(k) +
            "=" +
            encodeURIComponent(parameters[k]))
            .join("&");
    }
    return "";
}
