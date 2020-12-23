import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IShopSectionTranslation {
    /**
     * The numeric ID for the ShopSection.
     */
    shop_section_id: number;
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string;
    /**
     * Translation of title of ShopSection.
     */
    title: string;
}

//parameters types
export interface IGetShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
}

export interface ICreateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
    title?: string;
}

export interface IUpdateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
    title?: string;
}

export interface IDeleteShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
}

//methods class
export class ShopSectionTranslation {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async getShopSectionTranslation(parameters: IGetShopSectionTranslationParameters, options?: IAuthOptions) {
        return this.client.request(
            '/shops/:shop_id/sections/:shop_section_id/translations/:language',
            parameters,
            'GET',
            options,
        );
    }

    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async createShopSectionTranslation(parameters: ICreateShopSectionTranslationParameters, options?: IAuthOptions) {
        return this.client.request(
            '/shops/:shop_id/sections/:shop_section_id/translations/:language',
            parameters,
            'POST',
            options,
        );
    }

    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async updateShopSectionTranslation(parameters: IUpdateShopSectionTranslationParameters, options?: IAuthOptions) {
        return this.client.request(
            '/shops/:shop_id/sections/:shop_section_id/translations/:language',
            parameters,
            'PUT',
            options,
        );
    }

    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async deleteShopSectionTranslation(parameters: IDeleteShopSectionTranslationParameters, options?: IAuthOptions) {
        return this.client.request(
            '/shops/:shop_id/sections/:shop_section_id/translations/:language',
            parameters,
            'DELETE',
            options,
        );
    }
}
