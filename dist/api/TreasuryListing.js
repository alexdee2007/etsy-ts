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
exports.TreasuryListing = void 0;
//methods class
class TreasuryListing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Add listing to a Treasury
     */
    addTreasuryListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/treasuries/:treasury_key/listings', parameters, 'POST', options);
        });
    }
    /**
     * Remove listing from a Treasury
     */
    removeTreasuryListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/treasuries/:treasury_key/listings/:listing_id', parameters, 'DELETE', options);
        });
    }
}
exports.TreasuryListing = TreasuryListing;
