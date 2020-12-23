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
exports.FavoriteUser = void 0;
//methods class
class FavoriteUser {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    findAllUserFavoredBy(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favored-by', parameters, 'GET', options);
        });
    }
    /**
     * Finds all favorite users for a user
     */
    findAllUserFavoriteUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/users', parameters, 'GET', options);
        });
    }
    /**
     * Finds a favorite user for a user
     */
    findUserFavoriteUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/users/:target_user_id', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/users/:target_user_id', parameters, 'POST', options);
        });
    }
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/favorites/users/:target_user_id', parameters, 'DELETE', options);
        });
    }
}
exports.FavoriteUser = FavoriteUser;
