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
exports.Listing = void 0;
//methods class
class Listing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new Listing.
     */
    createListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings', parameters, 'POST', options);
        });
    }
    /**
     * Finds all FeaturedTreasury listings.
     */
    findAllFeaturedListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries/listings', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a Listing by id.
     */
    getListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a Listing
     */
    updateListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes a Listing
     */
    deleteListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id', parameters, 'DELETE', options);
        });
    }
    /**
     * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
     */
    findAllListingActive(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/active', parameters, 'GET', options);
        });
    }
    /**
     * Collects the list of interesting listings
     */
    getInterestingListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/interesting', parameters, 'GET', options);
        });
    }
    /**
     * Collects the list of listings used to generate the trending listing page
     */
    getTrendingListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/trending', parameters, 'GET', options);
        });
    }
    /**
     * Finds all listings for a certain FeaturedTreasury.
     */
    findAllListingsForFeaturedTreasuryId(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries/:featured_treasury_id/listings', parameters, 'GET', options);
        });
    }
    /**
     * Finds all active listings for a certain FeaturedTreasury.
     */
    findAllActiveListingsForFeaturedTreasuryId(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries/:featured_treasury_id/listings/active', parameters, 'GET', options);
        });
    }
    /**
     * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
     */
    findAllCurrentFeaturedListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/featured_treasuries/listings/homepage_current', parameters, 'GET', options);
        });
    }
    /**
     * Finds all listings in a receipt
     */
    findAllReceiptListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/receipts/:receipt_id/listings', parameters, 'GET', options);
        });
    }
    /**
     * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
     */
    findAllShopListingsActive(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/active', parameters, 'GET', options);
        });
    }
    /**
     * Finds all of a Shop's draft listings
     */
    findAllShopListingsDraft(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/draft', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves Listings associated to a Shop that are expired
     */
    findAllShopListingsExpired(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/expired', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    getShopListingExpired(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/expired/:listing_id', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves Listings associated to a Shop that are featured
     */
    findAllShopListingsFeatured(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/featured', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves Listings associated to a Shop that are inactive
     */
    findAllShopListingsInactive(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/inactive', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    getShopListingInactive(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/listings/inactive/:listing_id', parameters, 'GET', options);
        });
    }
    /**
     * Finds all listings within a shop section
     */
    findAllShopSectionListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id/listings', parameters, 'GET', options);
        });
    }
    /**
     * Finds all listings within a shop section
     */
    findAllShopSectionListingsActive(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id/listings/active', parameters, 'GET', options);
        });
    }
    /**
     * Finds all listings in a given Cart
     */
    findAllCartListings(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/:cart_id/listings', parameters, 'GET', options);
        });
    }
}
exports.Listing = Listing;
