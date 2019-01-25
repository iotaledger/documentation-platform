export interface IMissingCreateRequest {
    /**
     * The document that was missing.
     */
    document: string;

    /**
     * Where the document was linked from.
     */
    fromDocument?: string;
}
