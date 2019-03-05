import { IPaginationInfo } from "./IPaginationInfo";

export interface IPagination<T> {
    /**
     * The pagination info.
     */
    pagination: IPaginationInfo;

    /**
     * The events.
     */
    events?: T[];

    /**
     * The organizations.
     */
    organizations?: T[];
}
