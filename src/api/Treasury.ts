import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface ITreasury {
    /**
     * Unique id of the collection
     */
    id: string;
    /**
     * Title of the collection
     */
    title: string;
    /**
     * Description of the collection
     */
    description: string;
    /**
     * If the Treasury was featured on the homepage, the time in seconds since the epoch that it was featured
     */
    homepage: number;
    /**
     * Whether the Treasury has been flagged mature or not
     */
    mature: boolean;
    /**
     * Whether the Treasury has been set to private
     */
    private: boolean;
    /**
     * Language/Locale of the collection
     */
    locale: string;
    /**
     * The number of comments on this Treasury
     */
    comment_count: number;
    /**
     * The tags associated with this Treasury
     */
    tags: string[];
    /**
    
     * Clicks, views, shares, and reports metrics of this collection
     */
    counts: ITreasuryCounts;
    /**
     * The algorithmic ranking value assigned to this collection
     */
    hotness: number;
    /**
     * The algorithmic ranking value shown as a color (color hexadecimal)
     */
    hotness_color: string;
    /**
     * ID of the user (curator) of the collection
     */
    user_id: number;
    /**
     * Name of the user (curator) of the collection
     */
    user_name: string;
    /**
     * ID of the user's (curator's) avatar
     */
    user_avatar_id: number;
    /**
     * The listings that are in this collection
     */
    listings: any[];
    /**
     * Time this collection was created, in epoch seconds
     */
    creation_tsz: number;
    /**
     * The time that this treasury was published, in epoch seconds
     */
    became_public_date: number;
}

export interface ITreasuryCounts {
    /**
     * The number of times the Treasury has been clicked on
     */
    clicks: number;
    /**
     * The number of times the Treasury has been viewed
     */
    views: number;
    /**
     * The number of times the Treasury has been shared
     */
    shares: number;
    /**
     * The number of times the Treasury has been reported
     */
    reports: number;
}

//parameters types
export interface IFindAllTreasuriesParameters extends IStandardParameters {
    keywords?: string;
    sort_on?: 'hotness' | 'created';
    sort_order?: 'up' | 'down';
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IGetTreasuryParameters extends IStandardParameters {
    treasury_key: string;
}

export interface IDeleteTreasuryParameters extends IStandardParameters {}

export interface IFindAllUserTreasuriesParameters extends IStandardParameters {
    user_id: string | number;
    sort_on?: 'hotness' | 'created';
    sort_order?: 'up' | 'down';
    include_private?: boolean;
    limit?: number;
    offset?: number;
    page?: number;
}

//methods class
export class Treasury {
    constructor(private readonly client: Client) {}

    /**
     * Search Treasuries or else List all Treasuries
     */
    async findAllTreasuries(
        parameters: IFindAllTreasuriesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllTreasuriesParameters, ITreasury>> {
        return this.client.request('/treasuries', parameters, 'GET', options);
    }

    /**
     * Get a Treasury
     */
    async getTreasury(
        parameters: IGetTreasuryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetTreasuryParameters, ITreasury>> {
        return this.client.request('/treasuries/:treasury_key', parameters, 'GET', options);
    }

    /**
     * Delete a Treasury
     */
    async deleteTreasury(
        parameters: IDeleteTreasuryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteTreasuryParameters, ITreasury>> {
        return this.client.request('/treasuries/:treasury_key', parameters, 'DELETE', options);
    }

    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    async findAllUserTreasuries(
        parameters: IFindAllUserTreasuriesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllUserTreasuriesParameters, ITreasury>> {
        return this.client.request('/users/:user_id/treasuries', parameters, 'GET', options);
    }
}
