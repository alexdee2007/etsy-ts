import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
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
    constructor(client: Client);
    /**
     * Returns all Teams
     */
    findAllTeams(parameters: IFindAllTeamsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllTeamsParameters, ITeam>>;
    /**
     * Returns specified team by ID or team name
     */
    findTeams(parameters: IFindTeamsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindTeamsParameters, ITeam>>;
    /**
     * Returns a list of teams for a specific user
     */
    findAllTeamsForUser(parameters: IFindAllTeamsForUserParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllTeamsForUserParameters, ITeam>>;
}
