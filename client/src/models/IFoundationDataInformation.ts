export interface IFoundationDataInformation {
    /**
     * The label for the information.
     */
    label: string;

    /**
     * The optional value for the information.
     */
    value?: string;

    /**
     * The optional urls.
     */
    urls?: {
        /**
         * The label for the link.
         */
        label: string;
        /**
         * The url to link to.
         */
        url: string;
    }[];
}
