import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
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

//parameters types
export interface IFindAllRegionParameters extends IStandardParameters {}

export interface IGetRegionParameters extends IStandardParameters {
    region_id: number[];
}

export interface IFindEligibleRegionsParameters extends IStandardParameters {}

//methods class
export class Region {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Finds all Region.
     */
    async findAllRegion(parameters: IFindAllRegionParameters, options?: IAuthOptions) {
        return this.client.request('/regions', parameters, 'GET', options);
    }

    /**
     * Retrieves a Region by id.
     */
    async getRegion(parameters: IGetRegionParameters, options?: IAuthOptions) {
        return this.client.request('/regions/:region_id', parameters, 'GET', options);
    }

    /**
     *
     */
    async findEligibleRegions(parameters: IFindEligibleRegionsParameters, options?: IAuthOptions) {
        return this.client.request('/regions/eligible', parameters, 'GET', options);
    }
}
