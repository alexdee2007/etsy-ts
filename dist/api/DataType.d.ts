import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IDataType {
    type: string;
    values: string[];
}
export interface IDescribeOccasionEnumParameters extends IStandardParameters {
}
export interface IDescribeRecipientEnumParameters extends IStandardParameters {
}
export interface IDescribeWhenMadeEnumParameters extends IStandardParameters {
    include_formatted?: boolean;
}
export interface IDescribeWhoMadeEnumParameters extends IStandardParameters {
}
export declare class DataType {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Describes the legal values for Listing.occasion.
     */
    describeOccasionEnum<TResult>(parameters: IDescribeOccasionEnumParameters): Promise<IStandardResponse<IDescribeOccasionEnumParameters, TResult>>;
    /**
     * Describes the legal values for Listing.recipient.
     */
    describeRecipientEnum<TResult>(parameters: IDescribeRecipientEnumParameters): Promise<IStandardResponse<IDescribeRecipientEnumParameters, TResult>>;
    /**
     * Describes the legal values for Listing.when_made.
     */
    describeWhenMadeEnum<TResult>(parameters: IDescribeWhenMadeEnumParameters): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, TResult>>;
    /**
     * Describes the legal values for Listing.who_made.
     */
    describeWhoMadeEnum<TResult>(parameters: IDescribeWhoMadeEnumParameters): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, TResult>>;
}