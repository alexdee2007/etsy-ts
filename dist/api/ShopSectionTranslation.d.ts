import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export declare class ShopSectionTranslation {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    getShopSectionTranslation(parameters: IGetShopSectionTranslationParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    createShopSectionTranslation(parameters: ICreateShopSectionTranslationParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    updateShopSectionTranslation(parameters: IUpdateShopSectionTranslationParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    deleteShopSectionTranslation(parameters: IDeleteShopSectionTranslationParameters, options?: IAuthOptions): Promise<any>;
}
