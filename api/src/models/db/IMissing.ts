export interface IMissing {
    /**
     * The document that was missing.
     */
    document: string;

    /**
     * Where the document was linked from.
     */
    fromDocument?: string[];

    /**
     * Where the document was linked from.
     */
    fromDocumentTime?: {
        /**
         * The document linked.
         */
        document: string;
        /**
         * The date of the missing.
         */
        timestamp: number;
    }[];
}
