import { ILogo } from "./ILogo";
import { IMultipartText } from "./IMultipartText";

export interface IOrganizer {
    /**
     * The name.
     */
    name: string;

    /**
     * The description.
     */
    description: IMultipartText;

    /**
     * The long description.
     */
    long_description: IMultipartText;

    /**
     * Logo id
     */
    logo_id: string;

    /**
     * Organizer logo.
     */
    logo: ILogo;

    /**
     * Resource uri.
     */
    resource_uri: string;

    /**
     * Id.
     */
    id: string;

    /**
     * Url.
     */
    url: string;

    /**
     * The number of past events.
     */
    num_past_events: number;

    /**
     * The number of future events.
     */
    num_future_events: number;

    /**
     * Twitter handle.
     */
    twitter: number;

    /**
     * Facebook page.
     */
    facebook: number;
}
