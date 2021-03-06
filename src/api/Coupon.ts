import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface ICoupon {
    /**
     * The numeric ID of the coupon
     */
    coupon_id: number;
    /**
     * The alphanumeric coupon code
     */
    coupon_code: string;
    /**
     * True if the coupon is active
     */
    seller_active: boolean;
    /**
     * The discount percent (null for free shipping coupons)
     */
    pct_discount: number;
    /**
     * True if the coupon applies free shipping
     */
    free_shipping: boolean;
    /**
     * True if the coupon free shipping applies to domestic addresses only
     */
    domestic_only: boolean;
    /**
     * The 3 letter currency code relating to currency values if any. fixed_discount or minimum_purchase_price
     */
    currency_code: string;
    /**
     * Discount amount the coupon should take. For currency information see currency_code
     */
    fixed_discount: string;
    /**
     * The minimum amount in a cart before tax or shipping needed in order to apply the coupon. For currency information see currency_code
     */
    minimum_purchase_price: string;
    /**
     * A epoch time (UTC) on which the coupon can no longer be applied
     */
    expiration_date: number;
    /**
     * The type of coupon: fixed_discount, pct_discount, free_shipping for example
     */
    coupon_type: string;
}

//parameters types
export interface IFindAllShopCouponsParameters extends IStandardParameters {
    shop_id: string | number;
}

export interface ICreateCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_code: string;
    pct_discount?: number;
    seller_active?: boolean;
    free_shipping?: boolean;
    domestic_only?: boolean;
    currency_code?: string;
    fixed_discount?: string;
    minimum_purchase_price?: string;
    expiration_date?: number;
}

export interface IFindCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
}

export interface IUpdateCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
    seller_active?: boolean;
}

export interface IDeleteCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
}

//methods class
export class Coupon {
    constructor(private readonly client: Client) {}

    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    async findAllShopCoupons(
        parameters: IFindAllShopCouponsParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllShopCouponsParameters, ICoupon>> {
        return this.client.request('/shops/:shop_id/coupons', parameters, 'GET', options);
    }

    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    async createCoupon(
        parameters: ICreateCouponParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateCouponParameters, ICoupon>> {
        return this.client.request('/shops/:shop_id/coupons', parameters, 'POST', options);
    }

    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    async findCoupon(
        parameters: IFindCouponParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindCouponParameters, ICoupon>> {
        return this.client.request('/shops/:shop_id/coupons/:coupon_id', parameters, 'GET', options);
    }

    /**
     * Updates a coupon
     */
    async updateCoupon(
        parameters: IUpdateCouponParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateCouponParameters, ICoupon>> {
        return this.client.request('/shops/:shop_id/coupons/:coupon_id', parameters, 'PUT', options);
    }

    /**
     * Deletes a coupon
     */
    async deleteCoupon(
        parameters: IDeleteCouponParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteCouponParameters, ICoupon>> {
        return this.client.request('/shops/:shop_id/coupons/:coupon_id', parameters, 'DELETE', options);
    }
}
