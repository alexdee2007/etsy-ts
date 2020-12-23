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
exports.ListingFile = void 0;
//methods class
class ListingFile {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all ListingFiles on a Listing
     */
    findAllListingFiles(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/files', parameters, 'GET', options);
        });
    }
    /**
     * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
     of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
     a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
     cause the listing to have free shipping and will remove any variations.
     */
    uploadListingFile(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/files', parameters, 'POST', options);
        });
    }
    /**
     * Finds a ListingFile by ID
     */
    findListingFile(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/files/:listing_file_id', parameters, 'GET', options);
        });
    }
    /**
     * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
     be considered a digital listing.
     */
    deleteListingFile(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/files/:listing_file_id', parameters, 'DELETE', options);
        });
    }
}
exports.ListingFile = ListingFile;
