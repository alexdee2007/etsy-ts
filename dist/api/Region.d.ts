import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IRegion {
    /**
     * The numeric ID of this region.
     */
    region_id: number;
    /**
     * The name of the region.
     */
    region_name: string;
    /**
     * The eligibilty of this region to be used
     */
    is_dead: boolean;
}
export interface IFindAllRegionParameters extends IStandardParameters {
}
export interface IGetRegionParameters extends IStandardParameters {
    region_id: number[];
}
export interface IFindEligibleRegionsParameters extends IStandardParameters {
}
export declare class Region {
    private readonly client;
    constructor(client: Client);
    /**
     * Finds all Region.
     */
    findAllRegion(parameters: IFindAllRegionParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllRegionParameters, IRegion>>;
    /**
     * Retrieves a Region by id.
     */
    getRegion(parameters: IGetRegionParameters, options?: IAuthOptions): Promise<IStandardResponse<IGetRegionParameters, IRegion>>;
    /**
     *
     */
    findEligibleRegions(parameters: IFindEligibleRegionsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindEligibleRegionsParameters, IRegion>>;
}
