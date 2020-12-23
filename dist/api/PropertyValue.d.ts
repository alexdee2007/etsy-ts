import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export declare class PropertyValue {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get all of the attributes for a listing
     */
    getAttributes(parameters: IGetAttributesParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Get an attribute for a listing
     */
    getAttribute(parameters: IGetAttributeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Update or populate an attribute for a listing
     */
    updateAttribute(parameters: IUpdateAttributeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Delete an attribute for a listing
     */
    deleteAttribute(parameters: IDeleteAttributeParameters, options?: IAuthOptions): Promise<any>;
}
