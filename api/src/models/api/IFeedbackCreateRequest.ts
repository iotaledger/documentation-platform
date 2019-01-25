export interface IFeedbackCreateRequest {
    /**
     * The document the feedback was provided for.
     */
    document: string;
    /**
     * The was it useful response.
     */
    wasItUseful: string;
    /**
     * Any additional comments.
     */
    comments: string;
}
