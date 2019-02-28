import { ICategory } from "./ICategory";
import { IDateTime } from "./IDateTime";
import { IFormat } from "./IFormat";
import { ILogo } from "./ILogo";
import { IMultipartText } from "./IMultipartText";
import { IOrganizer } from "./IOrganizer";
import { ISubCategory } from "./ISubCategory";
import { ITicketAvailability } from "./ITicketAvailability";
import { IVenue } from "./IVenue";

export interface IEvent {
    /**
     * The id of the event.
     */
    id: string;

    /**
     * The name of the event.
     */
    name: IMultipartText;

    /**
     * The description of the event.
     */
    description: IMultipartText;

    /**
     * The start of the event.
     */
    start: IDateTime;

    /**
     * The end of the event.
     */
    end: IDateTime;

    /**
     * The url on event brite of the event.
     */
    url: string;

    /**
     * The vanity url on event brite of the event.
     */
    vanity_url: string;

    /**
     * When was the event created.
     */
    created: string;

    /**
     * When was the event last changed.
     */
    changed: string;

    /**
     * When was the event last changed.
     */
    status: "draft" | "live" | "started" | "ended" | "completed" | "canceled";

    /**
     * Currency for the event.
     */
    currency: string;

    /**
     * Is this an online event.
     */
    online_event: boolean;

    /**
     * The organization owning the event.
     */
    organization_id: string;

    /**
     * The id organizer of the event.
     */
    organizer_id: string;

    /**
     * The organizer of the event.
     */
    organizer: IOrganizer;

    /**
     * The logo id.
     */
    logo_id: string;

    /**
     * The logo.
     */
    logo: ILogo;

    /**
     * The venue id.
     */
    venue_id: string;

    /**
     * The venue.
     */
    venue: IVenue;

    /**
     * The format id.
     */
    format_id: string;

    /**
     * The format.
     */
    format: IFormat;

    /**
     * The category id.
     */
    category_id: string;

    /**
     * The category.
     */
    category: ICategory;

    /**
     * The sub category id.
     */
    subcategory_id: string;

    /**
     * The sub category.
     */
    subcategory: ISubCategory;

    /**
     * The refund_policy.
     */
    refund_policy: string;

    /**
     * The ticket_availability.
     */
    ticket_availability: ITicketAvailability;

    /**
     * The listed.
     */
    listed: boolean;

    /**
     * The shareable.
     */
    shareable: boolean;

    /**
     * The invite_only.
     */
    invite_only: boolean;

    /**
     * The show_remaining.
     */
    show_remaining: boolean;

    /**
     * The password.
     */
    password: string;

    /**
     * The capacity_is_custom.
     */
    capacity_is_custom: boolean;

    /**
     * The tx_time_limit.
     */
    tx_time_limit: string;

    /**
     * The hide_start_date.
     */
    hide_start_date: boolean;

    /**
     * The hide_end_date.
     */
    hide_end_date: boolean;

    /**
     * The locale.
     */
    locale: string;

    /**
     * The is_locked.
     */
    is_locked: boolean;

    /**
     * The privacy_setting.
     */
    privacy_setting: string;

    /**
     * The is_series.
     */
    is_series: boolean;

    /**
     * The is_series_parent.
     */
    is_series_parent: boolean;

    /**
     * The is_reserved_seating.
     */
    is_reserved_seating: boolean;

    /**
     * The show_pick_a_seat.
     */
    show_pick_a_seat: boolean;

    /**
     * The show_seatmap_thumbnail.
     */
    show_seatmap_thumbnail: boolean;

    /**
     * The show_colors_in_seatmap_thumbnail.
     */
    show_colors_in_seatmap_thumbnail: boolean;

    /**
     * The is_free.
     */
    is_free: boolean;

    /**
     * The source.
     */
    source: string;

    /**
     * The version.
     */
    version: string;

    /**
     * The resource_uri.
     */
    resource_uri: boolean;
}
