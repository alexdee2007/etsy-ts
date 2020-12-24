import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
import { ICartListing, IShippingOption } from './Cart';
export interface IGuestCart {
    /**
     * The numeric ID of the cart
     */
    cart_id: number;
    /**
     * The shop name
     */
    shop_name: string;
    /**
     * The message to the seller
     */
    message_to_seller: string;
    /**
     * The numeric ID of the destination country
     */
    destination_country_id: number;
    /**
     @deprecated
     * The alphanumeric coupon code applied to the cart

     Deprecated: The Etsy API no longer supports coupons.
     */
    coupon_code: string;
    /**
     * The ISO (alphabetic) code for the currency
     */
    currency_code: string;
    /**
     * The total price
     */
    total: string;
    /**
     * The subtotal price
     */
    subtotal: string;
    /**
     * The shipping cost
     */
    shipping_cost: string;
    /**
     * The tax cost
     */
    tax_cost: string;
    /**
     * The line-item discount amount (does not include tax or shipping)
     */
    discount_amount: string;
    /**
     * The shipping discount amount
     */
    shipping_discount_amount: string;
    /**
     * The tax discount amount
     */
    tax_discount_amount: string;
    /**
     * The full URL to the cart page on Etsy
     */
    url: string;
    /**
     * An array of purchase information for the listings
     */
    listings: ICartListing[];
    /**
     * The cart is download only
     */
    is_download_only: boolean;
    /**
     * The cart has VAT tax
     */
    has_vat: boolean;
    /**
     * The selected shipping option identifier for the cart
     */
    shipping_option: IShippingOption;
}
export interface IFindAllGuestCartsParameters extends IStandardParameters {
    guest_id: any;
}
export interface IAddToGuestCartParameters extends IStandardParameters {
    guest_id: any;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
    personalization?: any;
}
export interface IUpdateGuestCartListingQuantityParameters extends IStandardParameters {
    guest_id: any;
    listing_id: number;
    quantity: number;
    listing_customization_id?: number;
}
export interface IRemoveGuestCartListingParameters extends IStandardParameters {
    guest_id: any;
    listing_id: number;
    listing_customization_id?: number;
}
export interface IFindGuestCartParameters extends IStandardParameters {
    guest_id: any;
    cart_id: string | number;
}
export interface IUpdateGuestCartParameters extends IStandardParameters {
    guest_id: any;
    cart_id: string | number;
    destination_country_id?: number;
    message_to_seller?: string;
    coupon_code?: string;
    shipping_option_id?: string;
    destination_zip?: string;
}
export interface IDeleteGuestCartParameters extends IStandardParameters {
    guest_id: any;
    cart_id: string | number;
}
export declare class GuestCart {
    private readonly client;
    constructor(client: Client);
    /**
     * Get all guest's carts
     */
    findAllGuestCarts(parameters: IFindAllGuestCartsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllGuestCartsParameters, IGuestCart>>;
    /**
     * Add a listing to guest's cart
     */
    addToGuestCart(parameters: IAddToGuestCartParameters, options?: IAuthOptions): Promise<IStandardResponse<IAddToGuestCartParameters, IGuestCart>>;
    /**
     * Update a guest's cart listing purchase quantity
     */
    updateGuestCartListingQuantity(parameters: IUpdateGuestCartListingQuantityParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateGuestCartListingQuantityParameters, IGuestCart>>;
    /**
     * Remove a listing from a guest's cart
     */
    removeGuestCartListing(parameters: IRemoveGuestCartListingParameters, options?: IAuthOptions): Promise<IStandardResponse<IRemoveGuestCartListingParameters, IGuestCart>>;
    /**
     * Get a guest's cart
     */
    findGuestCart(parameters: IFindGuestCartParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindGuestCartParameters, IGuestCart>>;
    /**
     * Update a guest's cart
     */
    updateGuestCart(parameters: IUpdateGuestCartParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateGuestCartParameters, IGuestCart>>;
    /**
     * Delete a guest's cart
     */
    deleteGuestCart(parameters: IDeleteGuestCartParameters, options?: IAuthOptions): Promise<IStandardResponse<IDeleteGuestCartParameters, IGuestCart>>;
}
