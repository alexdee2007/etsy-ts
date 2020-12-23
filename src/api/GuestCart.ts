import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
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

//parameters types
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

//methods class
export class GuestCart {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Get all guest's carts
     */
    async findAllGuestCarts(parameters: IFindAllGuestCartsParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/carts', parameters, 'GET', options);
    }

    /**
     * Add a listing to guest's cart
     */
    async addToGuestCart(parameters: IAddToGuestCartParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/carts', parameters, 'POST', options);
    }

    /**
     * Update a guest's cart listing purchase quantity
     */
    async updateGuestCartListingQuantity(
        parameters: IUpdateGuestCartListingQuantityParameters,
        options?: IAuthOptions,
    ) {
        return this.client.request('/guests/:guest_id/carts', parameters, 'PUT', options);
    }

    /**
     * Remove a listing from a guest's cart
     */
    async removeGuestCartListing(parameters: IRemoveGuestCartListingParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/carts', parameters, 'DELETE', options);
    }

    /**
     * Get a guest's cart
     */
    async findGuestCart(parameters: IFindGuestCartParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/carts/:cart_id', parameters, 'GET', options);
    }

    /**
     * Update a guest's cart
     */
    async updateGuestCart(parameters: IUpdateGuestCartParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/carts/:cart_id', parameters, 'PUT', options);
    }

    /**
     * Delete a guest's cart
     */
    async deleteGuestCart(parameters: IDeleteGuestCartParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/carts/:cart_id', parameters, 'DELETE', options);
    }
}
