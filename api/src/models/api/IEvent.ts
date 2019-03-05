export interface IEvent {
    /**
     * The title of the event.
     */
    title: string;

    /**
     * The description of the event.
     */
    description: string;

    /**
     * The start time/date in utc.
     */
    startUtc: string;

    /**
     * The url for more details.
     */
    urlDetails?: string;

    /**
     * Venue name.
     */
    venueName?: string;

    /**
     * Venue address.
     */
    venueAddress?: string[];

    /**
     * Venue latitude.
     */
    venueLatitude?: number;

    /**
     * Venue longitude.
     */
    venueLongitude?: number;
}
