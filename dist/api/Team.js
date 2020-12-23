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
exports.Team = void 0;
//methods class
class Team {
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns all Teams
     */
    findAllTeams(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/teams', parameters, 'GET', options);
        });
    }
    /**
     * Returns specified team by ID or team name
     */
    findTeams(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/teams/:team_ids/', parameters, 'GET', options);
        });
    }
    /**
     * Returns a list of teams for a specific user
     */
    findAllTeamsForUser(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/teams', parameters, 'GET', options);
        });
    }
}
exports.Team = Team;
