import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IFavoriteUser {
    /**
     * The user's numeric ID.  Note: This field may be absent, depending on the user's privacy settings.
     */
    user_id: number;
    /**
     @deprecated
     * The numberic ID of this favorite user association.

     Deprecated: do not use.
     */
    favorite_user_id: number;
    /**
     * The targeted favorite user's numeric ID.
     */
    target_user_id: number;
    /**
     * The date and time that the user was favorited.
     */
    creation_tsz: number;
}
export interface IFindAllUserFavoredByParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export interface ICreateUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export interface IDeleteUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export declare class FavoriteUser {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    findAllUserFavoredBy(parameters: IFindAllUserFavoredByParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Finds all favorite users for a user
     */
    findAllUserFavoriteUsers(parameters: IFindAllUserFavoriteUsersParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Finds a favorite user for a user
     */
    findUserFavoriteUsers(parameters: IFindUserFavoriteUsersParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteUsers(parameters: ICreateUserFavoriteUsersParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteUsers(parameters: IDeleteUserFavoriteUsersParameters, options?: IAuthOptions): Promise<any>;
}
