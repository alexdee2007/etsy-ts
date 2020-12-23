import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IFeaturedTreasury {
    /**
     * The string key to identify the Treasury
     */
    treasury_key: string;
    /**
     * The numeric ID for this FeaturedTreasury.
     */
    treasury_id: number;
    /**
     * The user ID of the FeaturedTreasury owner.
     */
    treasury_owner_id: number;
    /**
     * The url to the FeaturedTreasury
     */
    url: string;
    /**
     * The region for which this FeaturedTreasury is active.
     */
    region: string;
    /**
     * The time this FeaturedTreasury is made active on the homepage
     */
    active_date: number;
}

//parameters types
export interface IFindAllFeaturedTreasuriesParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    region?: string;
}

export interface IGetFeaturedTreasuryByIdParameters extends IStandardParameters {
    featured_treasury_id: number;
}

export interface IFindAllFeaturedTreasuriesByOwnerParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    owner_id: number;
}

//methods class
export class FeaturedTreasury {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Finds all FeaturedTreasuries.
     */
    async findAllFeaturedTreasuries(parameters: IFindAllFeaturedTreasuriesParameters, options?: IAuthOptions) {
        return this.client.request('/featured_treasuries', parameters, 'GET', options);
    }

    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    async getFeaturedTreasuryById(parameters: IGetFeaturedTreasuryByIdParameters, options?: IAuthOptions) {
        return this.client.request('/featured_treasuries/:featured_treasury_id', parameters, 'GET', options);
    }

    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    async findAllFeaturedTreasuriesByOwner(
        parameters: IFindAllFeaturedTreasuriesByOwnerParameters,
        options?: IAuthOptions,
    ) {
        return this.client.request('/featured_treasuries/owner/:owner_id', parameters, 'GET', options);
    }
}
