import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface IUser {
    /**
     * The user's numeric ID. This is also valid as the user's shop ID.
     */
    user_id: number;
    /**
     * The user's login name.
     */
    login_name: string;
    /**
     * The user's primary email address.
     */
    primary_email: string;
    /**
     * The date and time the user was created, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * The numeric ID of the user that referred this user.
     */
    referred_by_user_id: number;
    /**
     * An associative array of feedback totals for the user.
     */
    feedback_info: IFeedbackInfo;
    /**
     * The total number of transactions the user has available for a new review.
     */
    awaiting_feedback_count: number;
    /**
     * Should this user's listings be created or edited using the new Inventory endpoints?
     */
    use_new_inventory_endpoints: boolean;
}

export interface IFeedbackInfo {
    /**
     * The number of feedbacks.
     */
    count: number;
    /**
     * The feedback score percentage.
     */
    score: number;
}

//parameters types
export interface IFindAllUsersParameters extends IStandardParameters {
    keywords?: string;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IGetUserParameters extends IStandardParameters {
    user_id: (string | number)[];
}

export interface IFindAllUsersForTeamParameters extends IStandardParameters {
    team_id: number;
    status?: 'active' | 'invited' | 'pending';
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IGetCirclesContainingUserParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IGetConnectedUserParameters extends IStandardParameters {
    user_id: string | number;
    to_user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IUnconnectUsersParameters extends IStandardParameters {
    user_id: string | number;
    to_user_id: string | number;
}

export interface IGetConnectedUsersParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IConnectUsersParameters extends IStandardParameters {
    user_id: string | number;
    to_user_id: string | number;
}

//methods class
export class User {
    constructor(private readonly client: Client) {}

    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    async findAllUsers(
        parameters: IFindAllUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllUsersParameters, IUser>> {
        return this.client.request('/users', parameters, 'GET', options);
    }

    /**
     * Retrieves a User by id.
     */
    async getUser(
        parameters: IGetUserParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetUserParameters, IUser>> {
        return this.client.request('/users/:user_id', parameters, 'GET', options);
    }

    /**
     * Returns a list of users for a specific team
     */
    async findAllUsersForTeam(
        parameters: IFindAllUsersForTeamParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllUsersForTeamParameters, IUser>> {
        return this.client.request('/teams/:team_id/users/', parameters, 'GET', options);
    }

    /**
     * Returns a list of users who have circled this user
     */
    async getCirclesContainingUser(
        parameters: IGetCirclesContainingUserParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetCirclesContainingUserParameters, IUser>> {
        return this.client.request('/users/:user_id/circles', parameters, 'GET', options);
    }

    /**
     * Returns details about a connection between users
     */
    async getConnectedUser(
        parameters: IGetConnectedUserParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetConnectedUserParameters, IUser>> {
        return this.client.request('/users/:user_id/circles/:to_user_id', parameters, 'GET', options);
    }

    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    async unconnectUsers(
        parameters: IUnconnectUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUnconnectUsersParameters, IUser>> {
        return this.client.request('/users/:user_id/circles/:to_user_id', parameters, 'DELETE', options);
    }

    /**
     * Returns a list of users that are in this user's cricle
     */
    async getConnectedUsers(
        parameters: IGetConnectedUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetConnectedUsersParameters, IUser>> {
        return this.client.request('/users/:user_id/connected_users', parameters, 'GET', options);
    }

    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    async connectUsers(
        parameters: IConnectUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IConnectUsersParameters, IUser>> {
        return this.client.request('/users/:user_id/connected_users', parameters, 'POST', options);
    }
}
