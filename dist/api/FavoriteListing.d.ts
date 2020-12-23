import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export declare class FavoriteListing {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    findAllListingFavoredBy(parameters: IFindAllListingFavoredByParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Finds all favorite listings for a user
     */
    findAllUserFavoriteListings(parameters: IFindAllUserFavoriteListingsParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Finds a favorite listing for a user
     */
    findUserFavoriteListings(parameters: IFindUserFavoriteListingsParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteListings(parameters: ICreateUserFavoriteListingsParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteListings(parameters: IDeleteUserFavoriteListingsParameters, options?: IAuthOptions): Promise<any>;
}
