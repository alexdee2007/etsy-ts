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
exports.FeaturedTreasury = void 0;
//methods class
class FeaturedTreasury {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all FeaturedTreasuries.
     */
    findAllFeaturedTreasuries(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries', parameters, 'GET', options);
        });
    }
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    getFeaturedTreasuryById(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries/:featured_treasury_id', parameters, 'GET', options);
        });
    }
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    findAllFeaturedTreasuriesByOwner(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries/owner/:owner_id', parameters, 'GET', options);
        });
    }
}
exports.FeaturedTreasury = FeaturedTreasury;
