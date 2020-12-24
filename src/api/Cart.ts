import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

export interface ICartListing {
    /**
     * The numeric ID of the listing
     */
    listing_id: number;
    /**
     * The quantity of the listing being purchased
     */
    purchase_quantity: number;
    /**
     * The purchase state of the listing, possible values: valid, invalid_quantity, invalid_shipping, not_active, edited, invalid_currency, invalid_shipping_currency
     */
    purchase_state: string;
    /**
     * True if this listing is for a digital download.
     */
    is_digital: boolean;
    /**
     * Written description of the files attached to this digital listing.
     */
    file_data: string;
    /**
     * When Variations are present on a listing, this can be used to differentiate multiple instances of the same listing.
     */
    listing_customization_id: number;
    /**
     * Whether Variations are available for this listing.
     */
    variations_available: boolean;
    /**
     * Whether the buyer selected Variations for this listing.
     */
    has_variations: boolean;
    /**
     * An array of selected Variations for this listing.
     */
    selected_variations: any[];
}

export interface IShippingOption {
    /**
     * The ID of the shipping option.
     */
    option_id: string;
    /**
     * The name of the shipping option.
     */
    name: string;
    /**
     * The type of shipping option.
     */
    option_type: number;
    /**
     * The total cart shipping price if the shipping option is selected.
     */
    cost: string;
    /**
     * The ISO (alphabetic) code for the shipping option's currency.
     */
    currency_code: string;
}

//parameters types
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

//methods class
export class Cart {
    constructor(private readonly client: Client) {}

    /**
     * Get a user's Carts
     */
    async getAllUserCarts(
        parameters: IGetAllUserCartsParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetAllUserCartsParameters, ICart>> {
        return this.client.request('/users/:user_id/carts', parameters, 'GET', options);
    }

    /**
     * Add a listing to a cart
     */
    async addToCart(
        parameters: IAddToCartParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IAddToCartParameters, ICart>> {
        return this.client.request('/users/:user_id/carts', parameters, 'POST', options);
    }

    /**
     * Update a cart listing purchase quantity
     */
    async updateCartListingQuantity(
        parameters: IUpdateCartListingQuantityParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateCartListingQuantityParameters, ICart>> {
        return this.client.request('/users/:user_id/carts', parameters, 'PUT', options);
    }

    /**
     * Remove a listing from a cart
     */
    async removeCartListing(
        parameters: IRemoveCartListingParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IRemoveCartListingParameters, ICart>> {
        return this.client.request('/users/:user_id/carts', parameters, 'DELETE', options);
    }

    /**
     * Get a cart
     */
    async getUserCart(
        parameters: IGetUserCartParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetUserCartParameters, ICart>> {
        return this.client.request('/users/:user_id/carts/:cart_id', parameters, 'GET', options);
    }

    /**
     * Update a cart
     */
    async updateCart(
        parameters: IUpdateCartParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateCartParameters, ICart>> {
        return this.client.request('/users/:user_id/carts/:cart_id', parameters, 'PUT', options);
    }

    /**
     * Delete a cart
     */
    async deleteCart(
        parameters: IDeleteCartParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteCartParameters, ICart>> {
        return this.client.request('/users/:user_id/carts/:cart_id', parameters, 'DELETE', options);
    }

    /**
     * Saves and selects a shipping address for apple pay
     */
    async addAndSelectShippingForApplePay(
        parameters: IAddAndSelectShippingForApplePayParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, ICart>> {
        return this.client.request(
            '/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple',
            parameters,
            'POST',
            options,
        );
    }

    /**
     * Move a listing to Saved for Later
     */
    async saveListingForLater(
        parameters: ISaveListingForLaterParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ISaveListingForLaterParameters, ICart>> {
        return this.client.request('/users/:user_id/carts/save', parameters, 'DELETE', options);
    }

    /**
     * Get a cart from a shop ID
     */
    async getUserCartForShop(
        parameters: IGetUserCartForShopParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetUserCartForShopParameters, ICart>> {
        return this.client.request('/users/:user_id/carts/shop/:shop_id', parameters, 'GET', options);
    }

    /**
     * Create a single-listing cart from a listing
     */
    async createSingleListingCart(
        parameters: ICreateSingleListingCartParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateSingleListingCartParameters, ICart>> {
        return this.client.request('/users/:user_id/carts/single_listing', parameters, 'POST', options);
    }
}
