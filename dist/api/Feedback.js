"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const client_1 = require("../client/client");
//methods class
class Feedback {
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    static findAllUserFeedbackAsAuthor(parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-author", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    static findAllUserFeedbackAsBuyer(parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-buyer", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    static findAllUserFeedbackAsSeller(parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-seller", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    static findAllUserFeedbackAsSubject(parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-subject", parameters, "GET", options);
    }
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    static findAllFeedbackFromBuyers(parameters, options) {
        return client_1.request("/users/:user_id/feedback/from-buyers", parameters, "GET", options);
    }
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    static findAllFeedbackFromSellers(parameters, options) {
        return client_1.request("/users/:user_id/feedback/from-sellers", parameters, "GET", options);
    }
}
exports.Feedback = Feedback;
