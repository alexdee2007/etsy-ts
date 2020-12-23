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
exports.FavoriteListing = void 0;
//methods class
class FavoriteListing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    findAllListingFavoredBy(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/favored-by', parameters, 'GET', options);
        });
    }
    /**
     * Finds all favorite listings for a user
     */
    findAllUserFavoriteListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/listings', parameters, 'GET', options);
        });
    }
    /**
     * Finds a favorite listing for a user
     */
    findUserFavoriteListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/listings/:listing_id', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/listings/:listing_id', parameters, 'POST', options);
        });
    }
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/listings/:listing_id', parameters, 'DELETE', options);
        });
    }
}
exports.FavoriteListing = FavoriteListing;
