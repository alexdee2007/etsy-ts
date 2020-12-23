import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
    feedback_info: any;
    /**
     * The total number of transactions the user has available for a new review.
     */
    awaiting_feedback_count: number;
    /**
     * Should this user's listings be created or edited using the new Inventory endpoints?
     */
    use_new_inventory_endpoints: boolean;
}
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
    status?: "active" | "invited" | "pending";
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
export declare class User {
    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    static findAllUsers<TResult>(parameters: IFindAllUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUsersParameters, TResult>>;
    /**
     * Retrieves a User by id.
     */
    static getUser<TResult>(parameters: IGetUserParameters, options?: IOptions): Promise<IStandardResponse<IGetUserParameters, TResult>>;
    /**
     * Returns a list of users for a specific team
     */
    static findAllUsersForTeam<TResult>(parameters: IFindAllUsersForTeamParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>;
    /**
     * Returns a list of users who have circled this user
     */
    static getCirclesContainingUser<TResult>(parameters: IGetCirclesContainingUserParameters, options?: IOptions): Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>;
    /**
     * Returns details about a connection between users
     */
    static getConnectedUser<TResult>(parameters: IGetConnectedUserParameters, options?: IOptions): Promise<IStandardResponse<IGetConnectedUserParameters, TResult>>;
    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    static unconnectUsers<TResult>(parameters: IUnconnectUsersParameters, options?: IOptions): Promise<IStandardResponse<IUnconnectUsersParameters, TResult>>;
    /**
     * Returns a list of users that are in this user's cricle
     */
    static getConnectedUsers<TResult>(parameters: IGetConnectedUsersParameters, options?: IOptions): Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>>;
    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    static connectUsers<TResult>(parameters: IConnectUsersParameters, options?: IOptions): Promise<IStandardResponse<IConnectUsersParameters, TResult>>;
}
