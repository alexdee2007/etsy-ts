import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IReceipt {
    /**
     * The receipt's numeric ID.
     */
    receipt_id: number;
    /**
     * The enum of the order type this receipt is associated with.
     */
    receipt_type: number;
    /**
     * The numeric ID of the order this receipt is associated with.
     */
    order_id: number;
    /**
     * The numeric ID of the seller for this receipt.
     */
    seller_user_id: number;
    /**
     * The numeric ID of the buyer for this receipt.
     */
    buyer_user_id: number;
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * Whether or not a refund is allowed for this Receipt.
     */
    can_refund: boolean;
    /**
     * Last modification time, in epoch seconds.
     */
    last_modified_tsz: number;
    /**
     * The name portion of the buyer's address.
     */
    name: string;
    /**
     * The first line of the buyer's address.
     */
    first_line: string;
    /**
     * The second line of the buyer's address.
     */
    second_line: string;
    /**
     * The city for the buyer's address.
     */
    city: string;
    /**
     * The state for the buyer's address.
     */
    state: string;
    /**
     * The zip code of the buyer's address.
     */
    zip: string;
    /**
     * The locally formatted address strng of the buyer's shipping address.
     */
    formatted_address: string;
    /**
     * The numeric ID of the buyer's country.
     */
    country_id: number;
    /**
     * The payment method used. May be pp, cc, ck, mo, or other (stands for paypal, credit card, check, money order, other).
     */
    payment_method: string;
    /**
     * The email address where payment confirmation is sent.
     */
    payment_email: string;
    /**
     * An optional message from the seller.
     */
    message_from_seller: string;
    /**
     * An optional message from the buyer.
     */
    message_from_buyer: string;
    /**
     * True if the receipt was paid.
     */
    was_paid: boolean;
    /**
     * The total sales tax of the receipt.
     */
    total_tax_cost: number;
    /**
     * The total VAT of the receipt.
     */
    total_vat_cost: number;
    /**
     * Sum of the individual listings' (price * quantity). Does not included tax or shipping costs.
     */
    total_price: number;
    /**
     * The total shipping cost of the receipt.
     */
    total_shipping_cost: number;
    /**
     * The ISO code (alphabetic) for the seller's native currency.
     */
    currency_code: string;
    /**
     * The machine generated acknowledgement from the payment system.
     */
    message_from_payment: string;
    /**
     * True if the items in the receipt were shipped.
     */
    was_shipped: boolean;
    /**
     * The email address of the buyer. Access to this field is granted on a case by case basis for third-party integrations that require full access. Sellers using private apps to manage their shops can still access this field.
     */
    buyer_email: string;
    /**
     * The email address of the seller.
     */
    seller_email: string;
    /**
     * Whether the buyer marked item as a gift.
     */
    is_gift: boolean;
    /**
     * Whether the buyer purchased gift wrap.
     */
    needs_gift_wrap: boolean;
    /**
     * The message the buyer wants sent with the gift.
     */
    gift_message: string;
    /**
     * The gift wrap price of the receipt.
     */
    gift_wrap_price: number;
    /**
     * The total discount for the receipt, if using a discount (percent or fixed) Coupon. Free shipping Coupons are not reflected here.
     */
    discount_amt: number;
    /**
     * total_price minus coupon discounts. Does not included tax or shipping costs.
     */
    subtotal: number;
    /**
     * total_price minus coupon discount plus tax and shipping costs.
     */
    grandtotal: number;
    /**
     * grand total after payment adjustments.
     */
    adjusted_grandtotal: number;
    /**
     * grand total after payment adjustments from the buyer's perspective
     */
    buyer_adjusted_grandtotal: number;
    /**
     * Shipment information associated to this receipt.
     */
    shipments: IReceiptShipment[];
}
export interface IReceiptShipment {
    /**
     * Shipping carrier name.
     */
    carrier_name: string;
    /**
     * Receipt shipping id used internally
     */
    receipt_shipping_id: number;
    /**
     * Tracking code for carrier.
     */
    tracking_code: string;
    /**
     * Tracking URL for carrier's website.
     */
    tracking_url: string;
    /**
     * Optional note sent to buyer.
     */
    buyer_note: string;
    /**
     * Date the notification was sent.
     */
    notification_date: number;
}
export interface IGetShopReceipt2Parameters extends IStandardParameters {
    receipt_id: number[];
}
export interface IUpdateReceiptParameters extends IStandardParameters {
    receipt_id: number;
    was_paid?: boolean;
    was_shipped?: boolean;
}
export interface IFindAllShopReceiptsParameters extends IStandardParameters {
    shop_id: string | number;
    min_created?: number;
    max_created?: number;
    min_last_modified?: number;
    max_last_modified?: number;
    limit?: number;
    offset?: number;
    page?: number;
    was_paid?: boolean;
    was_shipped?: boolean;
}
export interface ISubmitTrackingParameters extends IStandardParameters {
    tracking_code: string;
    carrier_name: string;
    send_bcc?: boolean;
}
export interface IFindAllShopReceiptsByStatusParameters extends IStandardParameters {
    shop_id: string | number;
    status: 'open' | 'unshipped' | 'unpaid' | 'completed' | 'processing' | 'all';
    limit?: number;
    offset?: number;
    page?: number;
}
export interface ISearchAllShopReceiptsParameters extends IStandardParameters {
    shop_id: string | number;
    search_query: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserBuyerReceiptsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Receipt {
    private readonly client;
    constructor(client: Client);
    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    getShop_Receipt2(parameters: IGetShopReceipt2Parameters, options?: IAuthOptions): Promise<IStandardResponse<IGetShopReceipt2Parameters, IReceipt>>;
    /**
     * Updates a Shop_Receipt2
     */
    updateReceipt(parameters: IUpdateReceiptParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateReceiptParameters, IReceipt>>;
    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    findAllShopReceipts(parameters: IFindAllShopReceiptsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllShopReceiptsParameters, IReceipt>>;
    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    submitTracking(parameters: ISubmitTrackingParameters, options?: IAuthOptions): Promise<IStandardResponse<ISubmitTrackingParameters, IReceipt>>;
    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    findAllShopReceiptsByStatus(parameters: IFindAllShopReceiptsByStatusParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllShopReceiptsByStatusParameters, IReceipt>>;
    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    searchAllShopReceipts(parameters: ISearchAllShopReceiptsParameters, options?: IAuthOptions): Promise<IStandardResponse<ISearchAllShopReceiptsParameters, IReceipt>>;
    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    findAllUserBuyerReceipts(parameters: IFindAllUserBuyerReceiptsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserBuyerReceiptsParameters, IReceipt>>;
}
