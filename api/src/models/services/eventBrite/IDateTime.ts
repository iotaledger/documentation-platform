export interface IDateTime {
    /**
     * The timezone.
     */
    timezone: string;

    /**
     * The utc version of the date/time.
     */
    utc: string;

    /**
     * The local version of the date/time.
     */
    local: string;
}
