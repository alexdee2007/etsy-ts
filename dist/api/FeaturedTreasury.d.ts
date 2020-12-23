import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export declare class FeaturedTreasury {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Finds all FeaturedTreasuries.
     */
    findAllFeaturedTreasuries(parameters: IFindAllFeaturedTreasuriesParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    getFeaturedTreasuryById(parameters: IGetFeaturedTreasuryByIdParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    findAllFeaturedTreasuriesByOwner(parameters: IFindAllFeaturedTreasuriesByOwnerParameters, options?: IAuthOptions): Promise<any>;
}
