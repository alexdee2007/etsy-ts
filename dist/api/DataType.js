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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
//methods class
class DataType {
    constructor(client) {
        this.client = client;
    }
    /**
     * Describes the legal values for Listing.occasion.
     */
    describeOccasionEnum(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/types/enum/occasion', parameters, 'GET', options);
        });
    }
    /**
     * Describes the legal values for Listing.recipient.
     */
    describeRecipientEnum(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/types/enum/recipient', parameters, 'GET', options);
        });
    }
    /**
     * Describes the legal values for Listing.when_made.
     */
    describeWhenMadeEnum(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/types/enum/when_made', parameters, 'GET', options);
        });
    }
    /**
     * Describes the legal values for Listing.who_made.
     */
    describeWhoMadeEnum(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/types/enum/who_made', parameters, 'GET', options);
        });
    }
}
exports.DataType = DataType;
