import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface ITaxonomy {
    /**
     * The unique ID of this taxonomy node.
     */
    id: number;
    /**
     * Depth in the taxonomy, roots are at level 0.
     */
    level: number;
    /**
     * Human readable name for this taxonomy node.
     */
    name: string;
    /**
     * Path of our parent node.
     */
    parent: string;
    /**
     * ID of our parent node.
     */
    parent_id: number;
    /**
     * Path from the root to this node, separated by periods.
     */
    path: string;
    /**
     * The corresponding ID in Etsy's Category API resource.
     */
    category_id: number;
    /**
     * The child Taxonomy nodes, embedded directly in the response.
     */
    children: any[];
    /**
     * The taxonomy_ids of our child nodes.
     */
    children_ids: number[];
    /**
     * The taxonomy_ids of this node and all its parents. They are listed in order from root to leaf.
     */
    full_path_taxonomy_ids: number[];
}

//parameters types
export interface IGetBuyerTaxonomyParameters extends IStandardParameters {}

export interface IGetSellerTaxonomyParameters extends IStandardParameters {}

export interface IGetSellerTaxonomyVersionParameters extends IStandardParameters {}

//methods class
export class Taxonomy {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    async getBuyerTaxonomy(parameters: IGetBuyerTaxonomyParameters, options?: IAuthOptions) {
        return this.client.request('/taxonomy/buyer/get', parameters, 'GET', options);
    }

    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    async getSellerTaxonomy(parameters: IGetSellerTaxonomyParameters, options?: IAuthOptions) {
        return this.client.request('/taxonomy/seller/get', parameters, 'GET', options);
    }

    /**
     * Get the current version of the seller taxonomy
     */
    async getSellerTaxonomyVersion(parameters: IGetSellerTaxonomyVersionParameters, options?: IAuthOptions) {
        return this.client.request('/taxonomy/seller/version', parameters, 'GET', options);
    }
}
