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
exports.Guest = void 0;
//methods class
class Guest {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a guest by ID.
     */
    getGuest(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id', parameters, 'GET', options);
        });
    }
    /**
     * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
     */
    generateGuest(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/generator', parameters, 'GET', options);
        });
    }
    /**
     * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
     */
    claimGuest(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/claim', parameters, 'POST', options);
        });
    }
    /**
     * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
     */
    mergeGuest(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/merge', parameters, 'POST', options);
        });
    }
}
exports.Guest = Guest;
