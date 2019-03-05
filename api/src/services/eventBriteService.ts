import axios from "axios";
import { IEventBriteConfiguration } from "../models/IEventBriteConfiguration";
import { IEvent } from "../models/services/eventBrite/IEvent";
import { IOrganization } from "../models/services/eventBrite/IOrganization";
import { IPagination } from "../models/services/eventBrite/IPagination";

/**
 * Class to manage Eventbrite communications.
 */
export class EventBriteService {
    /**
     * The endpoint for the service.
     */
    private static readonly API_ENDPOINT: string = "https://www.eventbriteapi.com/v3/";

    /**
     * The configuration for the service.
     */
    private readonly _config: IEventBriteConfiguration;

    /**
     * Create a new instance of EventBriteService.
     * @param config The configuration to use.
     */
    constructor(config: IEventBriteConfiguration) {
        this._config = config;
    }

    /**
     * Get the list of organizations for the current user.
     * @param page The page number of the organizations to get.
     * @returns Paginated info for the organizations.
     */
    public async getOrganizations(page: number): Promise<IPagination<IOrganization>> {
        const ax = axios.create({ baseURL: EventBriteService.API_ENDPOINT });
        let response: IPagination<IOrganization>;

        const params = {
            page: page + 1
        };

        const axiosResponse = await ax.get<IPagination<IOrganization>>(`users/me/organizations/`, {
            headers: this.buildHeaders(),
            params
        });

        response = axiosResponse.data;

        return response;
    }

    /**
     * Get the event for the organization.
     * @param organizationId The id of the organization to get events for,
     * @param page The page of items to get.
     * @param pageSize The size of the pages.
     * @returns The paginated events.
     */
    public async getEvents(organizationId: string, page: number, pageSize: number): Promise<IPagination<IEvent>> {
        const ax = axios.create({ baseURL: EventBriteService.API_ENDPOINT });
        let response: IPagination<IEvent>;

        const now = new Date();

        const month = `0${now.getMonth() + 1}`.substr(-2);
        const day = `0${now.getDate()}`.substr(-2);

        const params = {
            page: page + 1,
            page_size: pageSize,
            order_by: "start_asc",
            "start_date.range_start": `${now.getFullYear()}-${month}-${day}`,
            "start_date.range_end": `${now.getFullYear() + 10}-${month}-${day}`,
            expand: "venue"
        };

        const axiosResponse = await ax.get<IPagination<IEvent>>(`organizations/${organizationId}/events/`, {
            headers: this.buildHeaders(),
            params
        });

        response = axiosResponse.data;

        return response;
    }

    /**
     * Build headers for the requests.
     * @returns The headers to include in the requests.
     */
    private buildHeaders(): { [id: string]: string } {
        return {
            Authorization: `Bearer ${this._config.oauthToken}`
        };
    }
}
