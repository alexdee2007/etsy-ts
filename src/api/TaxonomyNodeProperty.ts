import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface ITaxonomyNodeProperty {
    /**
     * The ID of the property.
     */
    property_id: number;
    /**
     * The name of the property.
     */
    name: string;
    /**
     * The name used in user interfaces.
     */
    display_name: string;
    /**
     * A list of available scales.
     */
    scales: ITaxonomyPropertyScale[];
    /**
     * Is this attribute required for listings in this category?
     */
    is_required: boolean;
    /**
     * Can this property be used in listing attributes?
     */
    supports_attributes: boolean;
    /**
     * Can this property be used in listing variations?
     */
    supports_variations: boolean;
    /**
     * Can this property have multiple values?
     */
    is_multivalued: boolean;
    /**
     * A list of allowed values.
     */
    possible_values: ITaxonomyPropertyValue[];
    /**
     * A list of values that are always selected for the given category.
     */
    selected_values: ITaxonomyPropertyValue[];
}

export interface ITaxonomyPropertyScale {
    /**
     * The ID of the scale.
     */
    scale_id: number;
    /**
     * How to label the scale.
     */
    display_name: string;
    /**
     * A description of the scale.
     */
    description: string;
}

export interface ITaxonomyPropertyValue {
    /**
     * The numeric ID of this value.
     */
    value_id: number;
    /**
     * How to display the value.
     */
    name: string;
    /**
     * The ID of the scale this belongs to (if any).
     */
    scale_id: number;
    /**
     * The order of this value under its property
     */
    order: number;
    /**
     * The list of values this value is equal to (if any).
     */
    equal_to: number[];
}

//parameters types
export interface IGetTaxonomyNodePropertiesParameters extends IStandardParameters {
    taxonomy_id: number;
}

//methods class
export class TaxonomyNodeProperty {
    constructor(private readonly client: Client) {}

    /**
     * Get the possible properties of a taxonomy node
     */
    async getTaxonomyNodeProperties(
        parameters: IGetTaxonomyNodePropertiesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, ITaxonomyNodeProperty>> {
        return this.client.request('/taxonomy/seller/:taxonomy_id/properties', parameters, 'GET', options);
    }
}
