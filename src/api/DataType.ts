import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
export interface IDescribeOccasionEnumParameters extends IStandardParameters {}

export interface IDescribeRecipientEnumParameters extends IStandardParameters {}

export interface IDescribeWhenMadeEnumParameters extends IStandardParameters {
    include_formatted?: boolean;
}

export interface IDescribeWhoMadeEnumParameters extends IStandardParameters {}

//methods class
export class DataType {
    constructor(private readonly client: Client) {}

    /**
     * Describes the legal values for Listing.occasion.
     */
    async describeOccasionEnum(
        parameters: IDescribeOccasionEnumParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDescribeOccasionEnumParameters, IDataType>> {
        return this.client.request('/types/enum/occasion', parameters, 'GET', options);
    }

    /**
     * Describes the legal values for Listing.recipient.
     */
    async describeRecipientEnum(
        parameters: IDescribeRecipientEnumParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDescribeRecipientEnumParameters, IDataType>> {
        return this.client.request('/types/enum/recipient', parameters, 'GET', options);
    }

    /**
     * Describes the legal values for Listing.when_made.
     */
    async describeWhenMadeEnum(
        parameters: IDescribeWhenMadeEnumParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDescribeWhenMadeEnumParameters, IDataType>> {
        return this.client.request('/types/enum/when_made', parameters, 'GET', options);
    }

    /**
     * Describes the legal values for Listing.who_made.
     */
    async describeWhoMadeEnum(
        parameters: IDescribeWhoMadeEnumParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDescribeWhoMadeEnumParameters, IDataType>> {
        return this.client.request('/types/enum/who_made', parameters, 'GET', options);
    }
}
