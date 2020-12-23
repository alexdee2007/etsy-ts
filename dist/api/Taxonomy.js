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
exports.Taxonomy = void 0;
//methods class
class Taxonomy {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    getBuyerTaxonomy(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/taxonomy/buyer/get', parameters, 'GET', options);
        });
    }
    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    getSellerTaxonomy(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/taxonomy/seller/get', parameters, 'GET', options);
        });
    }
    /**
     * Get the current version of the seller taxonomy
     */
    getSellerTaxonomyVersion(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/taxonomy/seller/version', parameters, 'GET', options);
        });
    }
}
exports.Taxonomy = Taxonomy;
