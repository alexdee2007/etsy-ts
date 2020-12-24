import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
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
    constructor(client: Client);
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    getShopSectionTranslation(parameters: IGetShopSectionTranslationParameters, options?: IAuthOptions): Promise<IStandardResponse<IGetShopSectionTranslationParameters, IShopSectionTranslation>>;
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    createShopSectionTranslation(parameters: ICreateShopSectionTranslationParameters, options?: IAuthOptions): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, IShopSectionTranslation>>;
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    updateShopSectionTranslation(parameters: IUpdateShopSectionTranslationParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, IShopSectionTranslation>>;
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    deleteShopSectionTranslation(parameters: IDeleteShopSectionTranslationParameters, options?: IAuthOptions): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, IShopSectionTranslation>>;
}
