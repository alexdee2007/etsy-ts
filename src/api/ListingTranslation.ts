import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IListingTranslation {
    listing_id: number,
    language: string,
    title: string,
    description: string,
    tags: string[]
}

//parameters types
export interface IGetListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string
}
export interface ICreateListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}
export interface IUpdateListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}
export interface IDeleteListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string
}

//methods
/**
 * Retrieves a ListingTranslation by listing_id and language
 */
function getListingTranslation <TResult>(parameters: IGetListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>> {
    return request<IGetListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ListingTranslation by listing_id and language
 */
function createListingTranslation <TResult>(parameters: ICreateListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>> {
    return request<ICreateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ListingTranslation by listing_id and language
 */
function updateListingTranslation <TResult>(parameters: IUpdateListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>> {
    return request<IUpdateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ListingTranslation by listing_id and language
 */
function deleteListingTranslation <TResult>(parameters: IDeleteListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>> {
    return request<IDeleteListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
}

export const ListingTranslation = {
    getListingTranslation,
    createListingTranslation,
    updateListingTranslation,
    deleteListingTranslation
};
