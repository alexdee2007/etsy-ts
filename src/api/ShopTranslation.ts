import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface IShopTranslation {
    /**
     * The numeric ID for the Shop.
     */
    shop_id: number;
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string;
    /**
     * Translation of an announcement to buyers that displays on the shop's homepage.
     */
    announcement: string;
    /**
     * Translation of the introductory text from the top of the seller's policies page (may be blank).
     */
    policy_welcome: string;
    /**
     * Translation of the seller's policy on payment (may be blank).
     */
    policy_payment: string;
    /**
     * Translation of the seller's policy on shipping (may be blank).
     */
    policy_shipping: string;
    /**
     * Translation of the seller's policy on refunds (may be blank).
     */
    policy_refunds: string;
    /**
     * Translation of any additional policy information the seller provides (may be blank).
     */
    policy_additional: string;
    /**
     * Translation of privacy policy information the seller provides (may be blank).
     */
    policy_privacy: string;
    /**
     * Translation of the Shop's Seller information (may be blank).
     */
    policy_seller_info: string;
    /**
     * Translation of a message that is sent to users who buy from this shop.
     */
    sale_message: string;
    /**
     * Translation of a message that is sent to users who buy a digital item from this shop.
     */
    digital_sale_message: string;
    /**
     * Translation of a brief heading for the shop's main page.
     */
    title: string;
    /**
     * Translation of a message to buyers in response to new convos (if Shop.is_vacation is true).
     */
    vacation_autoreply: string;
    /**
     * Translation of a message to buyers (if Shop.is_vacation is true).
     */
    vacation_message: string;
}

//parameters types
export interface IGetShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
}

export interface ICreateShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
    title?: string;
    sale_message?: string;
    announcement?: string;
    policy_welcome?: string;
    policy_payment?: string;
    policy_shipping?: string;
    policy_refunds?: string;
    policy_additional?: string;
    policy_privacy?: string;
    policy_seller_info?: string;
    vacation_autoreply?: string;
    vacation_message?: string;
}

export interface IUpdateShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
    title?: string;
    sale_message?: string;
    announcement?: string;
    policy_welcome?: string;
    policy_payment?: string;
    policy_shipping?: string;
    policy_refunds?: string;
    policy_additional?: string;
    policy_privacy?: string;
    policy_seller_info?: string;
    vacation_autoreply?: string;
    vacation_message?: string;
}

export interface IDeleteShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
}

//methods class
export class ShopTranslation {
    constructor(private readonly client: Client) {}

    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    async getShopTranslation(
        parameters: IGetShopTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetShopTranslationParameters, IShopTranslation>> {
        return this.client.request('/shops/:shop_id/translations/:language', parameters, 'GET', options);
    }

    /**
     * Creates a ShopTranslation by shop_id and language
     */
    async createShopTranslation(
        parameters: ICreateShopTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateShopTranslationParameters, IShopTranslation>> {
        return this.client.request('/shops/:shop_id/translations/:language', parameters, 'POST', options);
    }

    /**
     * Updates a ShopTranslation by shop_id and language
     */
    async updateShopTranslation(
        parameters: IUpdateShopTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateShopTranslationParameters, IShopTranslation>> {
        return this.client.request('/shops/:shop_id/translations/:language', parameters, 'PUT', options);
    }

    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    async deleteShopTranslation(
        parameters: IDeleteShopTranslationParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteShopTranslationParameters, IShopTranslation>> {
        return this.client.request('/shops/:shop_id/translations/:language', parameters, 'DELETE', options);
    }
}
