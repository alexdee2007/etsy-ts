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
exports.UserAddress = void 0;
//methods class
class UserAddress {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    findAllUserAddresses(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/addresses', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    createUserAddress(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/addresses/', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a UserAddress by id.
     */
    getUserAddress(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/addresses/:user_address_id', parameters, 'GET', options);
        });
    }
    /**
     * Deletes the UserAddress with the given id.
     */
    deleteUserAddress(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/addresses/:user_address_id', parameters, 'DELETE', options);
        });
    }
}
exports.UserAddress = UserAddress;
