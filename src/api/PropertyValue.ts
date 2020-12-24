import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface IPropertyValue {
    /**
     * The numeric ID of this property.
     */
    property_id: number;
    /**
     * The name of the property, in the requested locale language.
     */
    property_name: string;
    /**
     * The numeric ID of the scale (if any).
     */
    scale_id: number;
    /**
     * The label used to describe the chosen scale (if any).
     */
    scale_name: string;
    /**
     * The numeric IDs of the values.
     */
    value_ids: number[];
    /**
     * The literal values of the value.
     */
    values: string[];
}

//parameters types
export interface IGetAttributesParameters extends IStandardParameters {
    listing_id: number;
}

export interface IGetAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
}

export interface IUpdateAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
    value_ids?: number[];
    values?: string[];
    scale_id?: number;
}

export interface IDeleteAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
}

//methods class
export class PropertyValue {
    constructor(private readonly client: Client) {}

    /**
     * Get all of the attributes for a listing
     */
    async getAttributes(
        parameters: IGetAttributesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetAttributesParameters, IPropertyValue>> {
        return this.client.request('/listings/:listing_id/attributes', parameters, 'GET', options);
    }

    /**
     * Get an attribute for a listing
     */
    async getAttribute(
        parameters: IGetAttributeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetAttributeParameters, IPropertyValue>> {
        return this.client.request('/listings/:listing_id/attributes/:property_id', parameters, 'GET', options);
    }

    /**
     * Update or populate an attribute for a listing
     */
    async updateAttribute(
        parameters: IUpdateAttributeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateAttributeParameters, IPropertyValue>> {
        return this.client.request('/listings/:listing_id/attributes/:property_id', parameters, 'PUT', options);
    }

    /**
     * Delete an attribute for a listing
     */
    async deleteAttribute(
        parameters: IDeleteAttributeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteAttributeParameters, IPropertyValue>> {
        return this.client.request('/listings/:listing_id/attributes/:property_id', parameters, 'DELETE', options);
    }
}
