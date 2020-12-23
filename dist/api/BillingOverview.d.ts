import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IBillingOverview {
    /**
     * True if the user has an overdue balance.
     */
    is_overdue: boolean;
    /**
     * The currency unit in which the user is billed.
     */
    currency_code: string;
    /**
     * The total overdue balance owed by the user.
     */
    overdue_balance: number;
    /**
     * The total amount currently due for payment (including any overdue balance.)
     */
    balance_due: number;
    /**
     * The total amount owed by the user (including fees that are not yet due for payment.)
     */
    total_balance: number;
    /**
     * The date by which the user's balance due must be paid.
     */
    date_due: number;
    /**
     @deprecated
     * The date on which the user's balance became overdue.

     Deprecated: do not use - always returns 0
     */
    date_overdue: number;
}
export interface IGetUserBillingOverviewParameters extends IStandardParameters {
    user_id: string | number;
}
export declare class BillingOverview {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Retrieves the user's current balance.
     */
    getUserBillingOverview(parameters: IGetUserBillingOverviewParameters, options?: IAuthOptions): Promise<any>;
}
