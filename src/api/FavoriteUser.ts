import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
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

//methods class
export class FavoriteUser {
    constructor(private readonly client: Client) {}

    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    async findAllUserFavoredBy(
        parameters: IFindAllUserFavoredByParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllUserFavoredByParameters, IFavoriteUser>> {
        return this.client.request('/users/:user_id/favored-by', parameters, 'GET', options);
    }

    /**
     * Finds all favorite users for a user
     */
    async findAllUserFavoriteUsers(
        parameters: IFindAllUserFavoriteUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, IFavoriteUser>> {
        return this.client.request('/users/:user_id/favorites/users', parameters, 'GET', options);
    }

    /**
     * Finds a favorite user for a user
     */
    async findUserFavoriteUsers(
        parameters: IFindUserFavoriteUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, IFavoriteUser>> {
        return this.client.request('/users/:user_id/favorites/users/:target_user_id', parameters, 'GET', options);
    }

    /**
     * Creates a new favorite listing for a user
     */
    async createUserFavoriteUsers(
        parameters: ICreateUserFavoriteUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, IFavoriteUser>> {
        return this.client.request('/users/:user_id/favorites/users/:target_user_id', parameters, 'POST', options);
    }

    /**
     * Delete a favorite listing for a user
     */
    async deleteUserFavoriteUsers(
        parameters: IDeleteUserFavoriteUsersParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, IFavoriteUser>> {
        return this.client.request('/users/:user_id/favorites/users/:target_user_id', parameters, 'DELETE', options);
    }
}
