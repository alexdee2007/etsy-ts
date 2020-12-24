import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
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
    constructor(client: Client);
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    findAllListingFavoredBy(parameters: IFindAllListingFavoredByParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllListingFavoredByParameters, IFavoriteListing>>;
    /**
     * Finds all favorite listings for a user
     */
    findAllUserFavoriteListings(parameters: IFindAllUserFavoriteListingsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, IFavoriteListing>>;
    /**
     * Finds a favorite listing for a user
     */
    findUserFavoriteListings(parameters: IFindUserFavoriteListingsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindUserFavoriteListingsParameters, IFavoriteListing>>;
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteListings(parameters: ICreateUserFavoriteListingsParameters, options?: IAuthOptions): Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, IFavoriteListing>>;
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteListings(parameters: IDeleteUserFavoriteListingsParameters, options?: IAuthOptions): Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, IFavoriteListing>>;
}
