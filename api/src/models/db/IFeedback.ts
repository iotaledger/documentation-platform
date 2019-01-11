export interface IFeedback {
    /**
     * The document the feedback was provided for.
     */
    document: string;

    /**
     * Feedback entries for the document.
     */
    entries: {
        /**
         * The was it useful response.
         */
        wasItUseful: string;
        /**
         * Any additional comments.
         */
        comments: string;

        /** The date of the feedback */
        timestamp: number;
    }[];
}
