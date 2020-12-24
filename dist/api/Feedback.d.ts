import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IFeedback {
    /**
     * The feedback record's numeric ID.
     */
    feedback_id: number;
    /**
     * The transaction's numeric ID.
     */
    transaction_id: number;
    /**
     * The numeric ID of the user who wrote this feedback.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    creator_user_id: number;
    /**
     * The numeric ID of the user who received this feedback.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    target_user_id: number;
    /**
     * The numeric ID of the user who was the seller in this transaction.
     */
    seller_user_id: number;
    /**
     * The numeric ID of the user who was the buyer in this transaction.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    buyer_user_id: number;
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * A message left by the author, explaining the feedback.
     */
    message: string;
    /**
     * The feedback's value; 1 is positive, -1 is negative, and 0 is neutral.
     */
    value: number;
    /**
     * The numeric ID of the feedback's image (if present).  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_feedback_id: number;
    /**
     * The url to a photo provided with the feedback, dimensions 25x25.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_25x25: string;
    /**
     * The url to a photo provided with the feedback, dimensions 155x125.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_155x125: string;
    /**
     * The url to a photo provided with the feedback, dimensions fullxfull.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_fullxfull: string;
}
export interface IFindAllUserFeedbackAsAuthorParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsBuyerParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsSellerParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsSubjectParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllFeedbackFromBuyersParameters extends IStandardParameters {
    user_id?: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllFeedbackFromSellersParameters extends IStandardParameters {
    user_id?: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Feedback {
    private readonly client;
    constructor(client: Client);
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsAuthor(parameters: IFindAllUserFeedbackAsAuthorParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsAuthorParameters, IFeedback>>;
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsBuyer(parameters: IFindAllUserFeedbackAsBuyerParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsBuyerParameters, IFeedback>>;
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSeller(parameters: IFindAllUserFeedbackAsSellerParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsSellerParameters, IFeedback>>;
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSubject(parameters: IFindAllUserFeedbackAsSubjectParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsSubjectParameters, IFeedback>>;
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromBuyers(parameters: IFindAllFeedbackFromBuyersParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllFeedbackFromBuyersParameters, IFeedback>>;
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromSellers(parameters: IFindAllFeedbackFromSellersParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllFeedbackFromSellersParameters, IFeedback>>;
}
