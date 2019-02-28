import { IAddress } from "./IAddress";

export interface IVenue {
    /**
     * The name.
     */
    name: string;

    /**
     * The age restriction.
     */
    age_restriction: string;

    /**
     * The capacity.
     */
    capacity: number;

    /**
     * The address.
     */
    address: IAddress;

    /**
     * The resource uri.
     */
    resource_uri: string;

    /**
     * The id.
     */
    id: string;

    /**
     * The latitude.
     */
    latitude: string;

    /**
     * The longitude.
     */
    longitude: string;
}
