import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export declare class Team {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Returns all Teams
     */
    findAllTeams(parameters: IFindAllTeamsParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Returns specified team by ID or team name
     */
    findTeams(parameters: IFindTeamsParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Returns a list of teams for a specific user
     */
    findAllTeamsForUser(parameters: IFindAllTeamsForUserParameters, options?: IAuthOptions): Promise<any>;
}
