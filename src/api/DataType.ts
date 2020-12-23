import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

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
    constructor(private readonly client: ClientOauth) {}

    /**
     * Describes the legal values for Listing.occasion.
     */
    async describeOccasionEnum(parameters: IDescribeOccasionEnumParameters, options?: IAuthOptions) {
        return this.client.request('/types/enum/occasion', parameters, 'GET', options);
    }

    /**
     * Describes the legal values for Listing.recipient.
     */
    async describeRecipientEnum(parameters: IDescribeRecipientEnumParameters, options?: IAuthOptions) {
        return this.client.request('/types/enum/recipient', parameters, 'GET', options);
    }

    /**
     * Describes the legal values for Listing.when_made.
     */
    async describeWhenMadeEnum(parameters: IDescribeWhenMadeEnumParameters, options?: IAuthOptions) {
        return this.client.request('/types/enum/when_made', parameters, 'GET', options);
    }

    /**
     * Describes the legal values for Listing.who_made.
     */
    async describeWhoMadeEnum(parameters: IDescribeWhoMadeEnumParameters, options?: IAuthOptions) {
        return this.client.request('/types/enum/who_made', parameters, 'GET', options);
    }
}
