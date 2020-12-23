import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ICart {
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
    listings: any[];
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
    shipping_option: any;
}
export interface IGetAllUserCartsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IAddToCartParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
    personalization?: any;
}
export interface IUpdateCartListingQuantityParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    quantity: number;
    listing_customization_id?: number;
}
export interface IRemoveCartListingParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    listing_customization_id?: number;
}
export interface IGetUserCartParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
}
export interface IUpdateCartParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
    destination_country_id?: number;
    message_to_seller?: string;
    coupon_code?: string;
    shipping_option_id?: string;
    destination_zip?: string;
}
export interface IDeleteCartParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
}
export interface IAddAndSelectShippingForApplePayParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
    second_line?: string;
    city: string;
    state?: string;
    zip: string;
    country_id: number;
}
export interface ISaveListingForLaterParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: number;
    listing_id: number;
    listing_inventory_id?: number;
    listing_customization_id?: number;
}
export interface IGetUserCartForShopParameters extends IStandardParameters {
    user_id: string | number;
    shop_id: string | number;
}
export interface ICreateSingleListingCartParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
    personalization?: any;
}
export declare class Cart {
    /**
     * Get a user's Carts
     */
    static getAllUserCarts<TResult>(parameters: IGetAllUserCartsParameters, options?: IOptions): Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>>;
    /**
     * Add a listing to a cart
     */
    static addToCart<TResult>(parameters: IAddToCartParameters, options?: IOptions): Promise<IStandardResponse<IAddToCartParameters, TResult>>;
    /**
     * Update a cart listing purchase quantity
     */
    static updateCartListingQuantity<TResult>(parameters: IUpdateCartListingQuantityParameters, options?: IOptions): Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>>;
    /**
     * Remove a listing from a cart
     */
    static removeCartListing<TResult>(parameters: IRemoveCartListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveCartListingParameters, TResult>>;
    /**
     * Get a cart
     */
    static getUserCart<TResult>(parameters: IGetUserCartParameters, options?: IOptions): Promise<IStandardResponse<IGetUserCartParameters, TResult>>;
    /**
     * Update a cart
     */
    static updateCart<TResult>(parameters: IUpdateCartParameters, options?: IOptions): Promise<IStandardResponse<IUpdateCartParameters, TResult>>;
    /**
     * Delete a cart
     */
    static deleteCart<TResult>(parameters: IDeleteCartParameters, options?: IOptions): Promise<IStandardResponse<IDeleteCartParameters, TResult>>;
    /**
     * Saves and selects a shipping address for apple pay
     */
    static addAndSelectShippingForApplePay<TResult>(parameters: IAddAndSelectShippingForApplePayParameters, options?: IOptions): Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>>;
    /**
     * Move a listing to Saved for Later
     */
    static saveListingForLater<TResult>(parameters: ISaveListingForLaterParameters, options?: IOptions): Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>>;
    /**
     * Get a cart from a shop ID
     */
    static getUserCartForShop<TResult>(parameters: IGetUserCartForShopParameters, options?: IOptions): Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>>;
    /**
     * Create a single-listing cart from a listing
     */
    static createSingleListingCart<TResult>(parameters: ICreateSingleListingCartParameters, options?: IOptions): Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>>;
}
