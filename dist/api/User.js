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
exports.User = void 0;
//methods class
class User {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    findAllUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a User by id.
     */
    getUser(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id', parameters, 'GET', options);
        });
    }
    /**
     * Returns a list of users for a specific team
     */
    findAllUsersForTeam(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/teams/:team_id/users/', parameters, 'GET', options);
        });
    }
    /**
     * Returns a list of users who have circled this user
     */
    getCirclesContainingUser(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/circles', parameters, 'GET', options);
        });
    }
    /**
     * Returns details about a connection between users
     */
    getConnectedUser(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/circles/:to_user_id', parameters, 'GET', options);
        });
    }
    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    unconnectUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/circles/:to_user_id', parameters, 'DELETE', options);
        });
    }
    /**
     * Returns a list of users that are in this user's cricle
     */
    getConnectedUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/connected_users', parameters, 'GET', options);
        });
    }
    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    connectUsers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/connected_users', parameters, 'POST', options);
        });
    }
}
exports.User = User;
