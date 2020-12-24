import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IDataType {
    /**
     * Base type of data
     */
    type: string;
    /**
     * Allowable values (for an enum.)
     */
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
    private readonly client;
    constructor(client: Client);
    /**
     * Describes the legal values for Listing.occasion.
     */
    describeOccasionEnum(parameters: IDescribeOccasionEnumParameters, options?: IAuthOptions): Promise<IStandardResponse<IDescribeOccasionEnumParameters, IDataType>>;
    /**
     * Describes the legal values for Listing.recipient.
     */
    describeRecipientEnum(parameters: IDescribeRecipientEnumParameters, options?: IAuthOptions): Promise<IStandardResponse<IDescribeRecipientEnumParameters, IDataType>>;
    /**
     * Describes the legal values for Listing.when_made.
     */
    describeWhenMadeEnum(parameters: IDescribeWhenMadeEnumParameters, options?: IAuthOptions): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, IDataType>>;
    /**
     * Describes the legal values for Listing.who_made.
     */
    describeWhoMadeEnum(parameters: IDescribeWhoMadeEnumParameters, options?: IAuthOptions): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, IDataType>>;
}
