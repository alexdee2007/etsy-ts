import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
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

//methods class
export class ListingTranslation {
    constructor(private readonly client: Client) {}

    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    async getListingTranslation(
        parameters: IGetListingTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetListingTranslationParameters, IListingTranslation>> {
        return this.client.request('/listings/:listing_id/translations/:language', parameters, 'GET', options);
    }

    /**
     * Creates a ListingTranslation by listing_id and language
     */
    async createListingTranslation(
        parameters: ICreateListingTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateListingTranslationParameters, IListingTranslation>> {
        return this.client.request('/listings/:listing_id/translations/:language', parameters, 'POST', options);
    }

    /**
     * Updates a ListingTranslation by listing_id and language
     */
    async updateListingTranslation(
        parameters: IUpdateListingTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateListingTranslationParameters, IListingTranslation>> {
        return this.client.request('/listings/:listing_id/translations/:language', parameters, 'PUT', options);
    }

    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    async deleteListingTranslation(
        parameters: IDeleteListingTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteListingTranslationParameters, IListingTranslation>> {
        return this.client.request('/listings/:listing_id/translations/:language', parameters, 'DELETE', options);
    }
}
