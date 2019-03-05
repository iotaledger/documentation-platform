export interface IPaginationInfo {
    /**
     * The object_count.
     */
    object_count: number;

    /**
     * The page_number.
     */
    page_number: number;

    /**
     * The page_size.
     */
    page_size: number;

    /**
     * The page_count.
     */
    page_count: number;

    /**
     * The continuation.
     */
    continuation: string;

    /**
     * The has_more_items.
     */
    has_more_items: boolean;
}
