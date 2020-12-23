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
exports.Feedback = void 0;
//methods class
class Feedback {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsAuthor(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/feedback/as-author', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsBuyer(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/feedback/as-buyer', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSeller(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/feedback/as-seller', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSubject(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/feedback/as-subject', parameters, 'GET', options);
        });
    }
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromBuyers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/feedback/from-buyers', parameters, 'GET', options);
        });
    }
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromSellers(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/feedback/from-sellers', parameters, 'GET', options);
        });
    }
}
exports.Feedback = Feedback;
