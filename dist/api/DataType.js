"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
const client_1 = require("../client/client");
//methods class
class DataType {
    /**
     * Describes the legal values for Listing.occasion.
     */
    static describeOccasionEnum(parameters, options) {
        return client_1.request("/types/enum/occasion", parameters, "GET", options);
    }
    /**
     * Describes the legal values for Listing.recipient.
     */
    static describeRecipientEnum(parameters, options) {
        return client_1.request("/types/enum/recipient", parameters, "GET", options);
    }
    /**
     * Describes the legal values for Listing.when_made.
     */
    static describeWhenMadeEnum(parameters, options) {
        return client_1.request("/types/enum/when_made", parameters, "GET", options);
    }
    /**
     * Describes the legal values for Listing.who_made.
     */
    static describeWhoMadeEnum(parameters, options) {
        return client_1.request("/types/enum/who_made", parameters, "GET", options);
    }
}
exports.DataType = DataType;
