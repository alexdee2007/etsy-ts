import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IForumPost {
    /**
     * Unique identifier of the thread
     */
    thread_id: number;
    /**
     * Id of the individual post
     */
    post_id: number;
    /**
     * The content of the post
     */
    post: string;
    /**
     * Id of the user who created the post
     */
    user_id: string;
    /**
     * When the post was last edited
     */
    last_edit_time: number;
    /**
     * When the post was created
     */
    create_date: number;
}
export interface IFindTreasuryCommentsParameters extends IStandardParameters {
    treasury_key: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IPostTreasuryCommentParameters extends IStandardParameters {
    message: any;
}
export interface IDeleteTreasuryCommentParameters extends IStandardParameters {
}
export declare class ForumPost {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get a Treasury's Comments
     */
    findTreasuryComments(parameters: IFindTreasuryCommentsParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Leave a comment on a Treasury List
     */
    postTreasuryComment(parameters: IPostTreasuryCommentParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Delete a given comment on a Treasury List
     */
    deleteTreasuryComment(parameters: IDeleteTreasuryCommentParameters, options?: IAuthOptions): Promise<any>;
}
