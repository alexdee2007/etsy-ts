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
const api = __importStar(require("../index"));
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
        this.ApiMethod = new api.ApiMethod(this);
        this.Avatar = new api.Avatar(this);
        this.BillCharge = new api.BillCharge(this);
        this.BillingOverview = new api.BillingOverview(this);
        this.BillPayment = new api.BillPayment(this);
        this.Cart = new api.Cart(this);
        this.Country = new api.Country(this);
        this.Coupon = new api.Coupon(this);
        this.DataType = new api.DataType(this);
        this.FavoriteListing = new api.FavoriteListing(this);
        this.FavoriteUser = new api.FavoriteUser(this);
        this.FeaturedTreasury = new api.FeaturedTreasury(this);
        this.Feedback = new api.Feedback(this);
        this.ForumPost = new api.ForumPost(this);
        this.Guest = new api.Guest(this);
        this.GuestCart = new api.GuestCart(this);
        this.ImageType = new api.ImageType(this);
        this.Ledger = new api.Ledger(this);
        this.LedgerEntry = new api.LedgerEntry(this);
        this.Listing = new api.Listing(this);
        this.ListingFile = new api.ListingFile(this);
        this.ListingImage = new api.ListingImage(this);
        this.ListingInventory = new api.ListingInventory(this);
        this.ListingOffering = new api.ListingOffering(this);
        this.ListingProduct = new api.ListingProduct(this);
        this.ListingTranslation = new api.ListingTranslation(this);
        this.ListingVariationImage = new api.ListingVariationImage(this);
        this.Payment = new api.Payment(this);
        this.PaymentAccountLedgerEntry = new api.PaymentAccountLedgerEntry(this);
        this.PaymentAdjustment = new api.PaymentAdjustment(this);
        this.PaymentAdjustmentItem = new api.PaymentAdjustmentItem(this);
        this.PaymentTemplate = new api.PaymentTemplate(this);
        this.PropertyValue = new api.PropertyValue(this);
        this.Receipt = new api.Receipt(this);
        this.Region = new api.Region(this);
        this.ShippingInfo = new api.ShippingInfo(this);
        this.ShippingTemplate = new api.ShippingTemplate(this);
        this.ShippingTemplateEntry = new api.ShippingTemplateEntry(this);
        this.ShippingUpgrade = new api.ShippingUpgrade(this);
        this.Shop = new api.Shop(this);
        this.ShopAbout = new api.ShopAbout(this);
        this.ShopSection = new api.ShopSection(this);
        this.ShopSectionTranslation = new api.ShopSectionTranslation(this);
        this.ShopTranslation = new api.ShopTranslation(this);
        this.Style = new api.Style(this);
        this.Taxonomy = new api.Taxonomy(this);
        this.TaxonomyNodeProperty = new api.TaxonomyNodeProperty(this);
        this.Team = new api.Team(this);
        this.Transaction = new api.Transaction(this);
        this.Treasury = new api.Treasury(this);
        this.TreasuryListing = new api.TreasuryListing(this);
        this.User = new api.User(this);
        this.UserAddress = new api.UserAddress(this);
        this.UserProfile = new api.UserProfile(this);
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
