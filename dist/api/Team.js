"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const client_1 = require("../client/client");
//methods class
class Team {
    /**
     * Returns all Teams
     */
    static findAllTeams(parameters, options) {
        return client_1.request("/teams", parameters, "GET", options);
    }
    /**
     * Returns specified team by ID or team name
     */
    static findTeams(parameters, options) {
        return client_1.request("/teams/:team_ids/", parameters, "GET", options);
    }
    /**
     * Returns a list of teams for a specific user
     */
    static findAllTeamsForUser(parameters, options) {
        return client_1.request("/users/:user_id/teams", parameters, "GET", options);
    }
}
exports.Team = Team;
