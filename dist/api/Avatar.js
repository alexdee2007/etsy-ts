"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const client_1 = require("../client/client");
//methods class
class Avatar {
    /**
     * Upload a new user avatar image
     */
    static uploadAvatar(parameters, options) {
        return client_1.request("/users/:user_id/avatar", parameters, "POST", options);
    }
    /**
     * Get avatar image source
     */
    static getAvatarImgSrc(parameters, options) {
        return client_1.request("/users/:user_id/avatar/src", parameters, "GET", options);
    }
}
exports.Avatar = Avatar;
