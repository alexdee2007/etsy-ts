import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IPaymentAdjustmentItem {
    /**
     * The payment adjustment item's numeric ID.
     */
    payment_adjustment_item_id: number;
    /**
     * The payment adjustment's numeric ID.
     */
    payment_adjustment_id: number;
    /**
     * A human readable string describing the area being refundedOne of: TRANS, TAX, or SHIP
     */
    adjustment_type: string;
    /**
     * The total amount of the payment adjustment item.
     */
    amount: number;
    /**
     * The numerice ID of the Credit Card Transaction
     */
    transaction_id: number;
    /**
     * The date and time the payment adjustment item was created in Epoch seconds.
     */
    create_date: number;
}
export interface IFindPaymentAdjustmentItemsParameters extends IStandardParameters {
    payment_id: number;
    payment_adjustment_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindPaymentAdjustmentItemParameters extends IStandardParameters {
    payment_id: number;
    payment_adjustment_id: number;
    payment_adjustment_item_id: number;
}
export declare class PaymentAdjustmentItem {
    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    static findPaymentAdjustmentItems<TResult>(parameters: IFindPaymentAdjustmentItemsParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentItemsParameters, TResult>>;
    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    static findPaymentAdjustmentItem<TResult>(parameters: IFindPaymentAdjustmentItemParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>>;
}
