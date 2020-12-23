import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
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

//parameters types
export interface IGetUserBillingOverviewParameters extends IStandardParameters {
    user_id: string | number;
}

//methods class
export class BillingOverview {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieves the user's current balance.
     */
    async getUserBillingOverview(parameters: IGetUserBillingOverviewParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/billing/overview', parameters, 'GET', options);
    }
}
