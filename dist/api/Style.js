"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const client_1 = require("../client/client");
//methods class
class Style {
    /**
     * Retrieve all suggested styles.
     */
    static findSuggestedStyles(parameters, options) {
        return client_1.request("/taxonomy/styles", parameters, "GET", options);
    }
}
exports.Style = Style;
