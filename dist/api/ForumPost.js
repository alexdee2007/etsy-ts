"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPost = void 0;
const client_1 = require("../client/client");
//methods class
class ForumPost {
    /**
     * Get a Treasury's Comments
     */
    static findTreasuryComments(parameters, options) {
        return client_1.request("/treasuries/:treasury_key/comments", parameters, "GET", options);
    }
    /**
     * Leave a comment on a Treasury List
     */
    static postTreasuryComment(parameters, options) {
        return client_1.request("/treasuries/:treasury_key/comments", parameters, "POST", options);
    }
    /**
     * Delete a given comment on a Treasury List
     */
    static deleteTreasuryComment(parameters, options) {
        return client_1.request("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE", options);
    }
}
exports.ForumPost = ForumPost;
