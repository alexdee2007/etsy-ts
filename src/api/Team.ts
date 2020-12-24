import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface ITeam {
    /**
     * The team's numeric ID.
     */
    group_id: number;
    /**
     * The team's name.
     */
    name: string;
    /**
     * The date and time the team was created in Epoch seconds.
     */
    create_date: number;
    /**
     * The date and time the team was last updated in Epoch seconds.
     */
    update_date: number;
    /**
     * A list of tags describing the team.
     */
    tags: string[];
}

//parameters types
export interface IFindAllTeamsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IFindTeamsParameters extends IStandardParameters {
    team_ids: (string | number)[];
}

export interface IFindAllTeamsForUserParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

//methods class
export class Team {
    constructor(private readonly client: Client) {}

    /**
     * Returns all Teams
     */
    async findAllTeams(
        parameters: IFindAllTeamsParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllTeamsParameters, ITeam>> {
        return this.client.request('/teams', parameters, 'GET', options);
    }

    /**
     * Returns specified team by ID or team name
     */
    async findTeams(
        parameters: IFindTeamsParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindTeamsParameters, ITeam>> {
        return this.client.request('/teams/:team_ids/', parameters, 'GET', options);
    }

    /**
     * Returns a list of teams for a specific user
     */
    async findAllTeamsForUser(
        parameters: IFindAllTeamsForUserParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllTeamsForUserParameters, ITeam>> {
        return this.client.request('/users/:user_id/teams', parameters, 'GET', options);
    }
}
