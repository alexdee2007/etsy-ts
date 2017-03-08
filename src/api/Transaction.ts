import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ITransaction {
    transaction_id: number,
    title: string,
    description: string,
    seller_user_id: number,
    buyer_user_id: number,
    creation_tsz: number,
    paid_tsz: number,
    shipped_tsz: number,
    price: number,
    currency_code: string,
    quantity: number,
    tags: string[],
    materials: string[],
    image_listing_id: number,
    receipt_id: number,
    shipping_cost: number,
    is_digital: boolean,
    file_data: string,
    listing_id: number,
    is_quick_sale: boolean,
    seller_feedback_id: number,
    buyer_feedback_id: number,
    transaction_type: string,
    url: string,
    variations: any[]
}

//parameters types

export interface IGetShopTransactionParameters extends IStandardParameters {
    transaction_id: number[]
}
export interface IFindAllListingTransactionsParameters extends IStandardParameters {
    listing_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShopReceipt2TransactionsParameters extends IStandardParameters {
    receipt_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllShopTransactionsParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserBuyerTransactionsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods

/**
 * Retrieves a Shop_Transaction by id.
 */
export function getShop_Transaction <TResult>(parameters: IGetShopTransactionParameters): Promise<IStandardResponse<IGetShopTransactionParameters, TResult>> {
    return request<IGetShopTransactionParameters, TResult>("/transactions/:transaction_id", parameters, "GET");
}
/**
 * Retrieves a set of Transaction objects associated to a Listing.
 */
export function findAllListingTransactions <TResult>(parameters: IFindAllListingTransactionsParameters): Promise<IStandardResponse<IFindAllListingTransactionsParameters, TResult>> {
    return request<IFindAllListingTransactionsParameters, TResult>("/listings/:listing_id/transactions", parameters, "GET");
}
/**
 * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
 */
export function findAllShop_Receipt2Transactions <TResult>(parameters: IFindAllShopReceipt2TransactionsParameters): Promise<IStandardResponse<IFindAllShopReceipt2TransactionsParameters, TResult>> {
    return request<IFindAllShopReceipt2TransactionsParameters, TResult>("/receipts/:receipt_id/transactions", parameters, "GET");
}
/**
 * Retrieves a set of Transaction objects associated to a Shop.
 */
export function findAllShopTransactions <TResult>(parameters: IFindAllShopTransactionsParameters): Promise<IStandardResponse<IFindAllShopTransactionsParameters, TResult>> {
    return request<IFindAllShopTransactionsParameters, TResult>("/shops/:shop_id/transactions", parameters, "GET");
}
/**
 * Retrieves a set of Transaction objects associated to a User.
 */
export function findAllUserBuyerTransactions <TResult>(parameters: IFindAllUserBuyerTransactionsParameters): Promise<IStandardResponse<IFindAllUserBuyerTransactionsParameters, TResult>> {
    return request<IFindAllUserBuyerTransactionsParameters, TResult>("/users/:user_id/transactions", parameters, "GET");
}

export const Transaction = {
    getShop_Transaction,
    findAllListingTransactions,
    findAllShop_Receipt2Transactions,
    findAllShopTransactions,
    findAllUserBuyerTransactions
};
