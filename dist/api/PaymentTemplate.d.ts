import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IPaymentTemplate {
    /**
     * The numeric ID for this payment template
     */
    payment_template_id: number;
    /**
     * True if the seller accepts bank transfers for payment
     */
    allow_bt: boolean;
    /**
     * True if the seller accepts checks for payment
     */
    allow_check: boolean;
    /**
     * True if the seller accepts money order payments
     */
    allow_mo: boolean;
    /**
     * True if the seller accepts other payments
     */
    allow_other: boolean;
    /**
     * True if the seller accepts paypal
     */
    allow_paypal: boolean;
    /**
     * True if the seller accepts credit cards
     */
    allow_cc: boolean;
    /**
     * The users paypal email address.
     */
    paypal_email: string;
    /**
     * The name of the seller.
     */
    name: string;
    /**
     * The first line of the seller's address.
     */
    first_line: string;
    /**
     * The second line of the seller's address.
     */
    second_line: string;
    /**
     * The seller's city.
     */
    city: string;
    /**
     * The seller's state.
     */
    state: string;
    /**
     * The seller's zip code.
     */
    zip: string;
    /**
     * The seller's country.
     */
    country_id: number;
    /**
     * The user's numeric ID.
     */
    user_id: number;
    /**
     * Provided for backward compatibility to ListingPayment. This will return the same value as payment_template_id.
     */
    listing_payment_id: number;
}
export interface IFindShopPaymentTemplatesParameters extends IStandardParameters {
    shop_id: string | number;
}
export interface ICreateShopPaymentTemplateParameters extends IStandardParameters {
    shop_id: string | number;
    allow_check?: boolean;
    allow_mo?: boolean;
    allow_other?: boolean;
    allow_paypal?: boolean;
    allow_cc?: boolean;
    paypal_email?: string;
    name?: string;
    first_line?: string;
    second_line?: string;
    city?: string;
    state?: string;
    zip?: string;
    country_id?: number;
}
export interface IUpdateShopPaymentTemplateParameters extends IStandardParameters {
    shop_id: string | number;
    allow_check?: boolean;
    allow_mo?: boolean;
    allow_other?: boolean;
    allow_paypal?: boolean;
    allow_cc?: boolean;
    paypal_email?: string;
    name?: string;
    first_line?: string;
    second_line?: string;
    city?: string;
    state?: string;
    zip?: string;
    country_id?: number;
    payment_template_id: number;
}
export interface IFindAllUserPaymentTemplatesParameters extends IStandardParameters {
    user_id: string | number;
}
export declare class PaymentTemplate {
    private readonly client;
    constructor(client: Client);
    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    findShopPaymentTemplates(parameters: IFindShopPaymentTemplatesParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindShopPaymentTemplatesParameters, IPaymentTemplate>>;
    /**
     * Creates a new PaymentTemplate
     */
    createShopPaymentTemplate(parameters: ICreateShopPaymentTemplateParameters, options?: IAuthOptions): Promise<IStandardResponse<ICreateShopPaymentTemplateParameters, IPaymentTemplate>>;
    /**
     * Updates a PaymentTemplate
     */
    updateShopPaymentTemplate(parameters: IUpdateShopPaymentTemplateParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateShopPaymentTemplateParameters, IPaymentTemplate>>;
    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    findAllUserPaymentTemplates(parameters: IFindAllUserPaymentTemplatesParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserPaymentTemplatesParameters, IPaymentTemplate>>;
}
