import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IListingTranslation {
    /**
     * The numeric ID for the Listing.
     */
    listing_id: number;
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string;
    /**
     * The title of the Listing of this Translation.
     */
    title: string;
    /**
     * The description of the Listing of this Translation.
     */
    description: string;
    /**
     * The tags of the Listing of this Translation.
     */
    tags: string[];
}
export interface IGetListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
}
export interface ICreateListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IUpdateListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IDeleteListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
}
export declare class ListingTranslation {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    getListingTranslation(parameters: IGetListingTranslationParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    createListingTranslation(parameters: ICreateListingTranslationParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    updateListingTranslation(parameters: IUpdateListingTranslationParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    deleteListingTranslation(parameters: IDeleteListingTranslationParameters, options?: IAuthOptions): Promise<any>;
}
