import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IFavoriteListing {
    /**
     * The listings numeric ID.
     */
    listing_id: number;
    /**
     * The user's numeric ID.  Note: This field may be absent, depending on the user's privacy settings.
     */
    user_id: number;
    /**
     * The state of the listing.
     */
    listing_state: string;
    /**
     * The date and time that the listing was favorited.
     */
    create_date: number;
}

//parameters types
export interface IFindAllListingFavoredByParameters extends IStandardParameters {
    listing_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IFindAllUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IFindUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
}

export interface ICreateUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
}

export interface IDeleteUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
}

//methods class
export class FavoriteListing {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    async findAllListingFavoredBy(parameters: IFindAllListingFavoredByParameters, options?: IAuthOptions) {
        return this.client.request('/listings/:listing_id/favored-by', parameters, 'GET', options);
    }

    /**
     * Finds all favorite listings for a user
     */
    async findAllUserFavoriteListings(parameters: IFindAllUserFavoriteListingsParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/favorites/listings', parameters, 'GET', options);
    }

    /**
     * Finds a favorite listing for a user
     */
    async findUserFavoriteListings(parameters: IFindUserFavoriteListingsParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/favorites/listings/:listing_id', parameters, 'GET', options);
    }

    /**
     * Creates a new favorite listing for a user
     */
    async createUserFavoriteListings(parameters: ICreateUserFavoriteListingsParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/favorites/listings/:listing_id', parameters, 'POST', options);
    }

    /**
     * Delete a favorite listing for a user
     */
    async deleteUserFavoriteListings(parameters: IDeleteUserFavoriteListingsParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/favorites/listings/:listing_id', parameters, 'DELETE', options);
    }
}
