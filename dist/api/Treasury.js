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
exports.Treasury = void 0;
//methods class
class Treasury {
    constructor(client) {
        this.client = client;
    }
    /**
     * Search Treasuries or else List all Treasuries
     */
    findAllTreasuries(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/treasuries', parameters, 'GET', options);
        });
    }
    /**
     * Get a Treasury
     */
    getTreasury(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/treasuries/:treasury_key', parameters, 'GET', options);
        });
    }
    /**
     * Delete a Treasury
     */
    deleteTreasury(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/treasuries/:treasury_key', parameters, 'DELETE', options);
        });
    }
    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    findAllUserTreasuries(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/treasuries', parameters, 'GET', options);
        });
    }
}
exports.Treasury = Treasury;
