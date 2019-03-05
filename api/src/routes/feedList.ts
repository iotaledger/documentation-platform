import { IFeedListRequest } from "../models/api/IFeedListRequest";
import { IFeedListResponse } from "../models/api/IFeedListResponse";
import { IConfiguration } from "../models/IConfiguration";
import { IEvent as IEventBriteEvent } from "../models/services/eventBrite/IEvent";
import { IPagination } from "../models/services/eventBrite/IPagination";
import { EventBriteService } from "../services/eventBriteService";

/**
 * Get a list of items from a feed.
 * @param config The configuration.
 * @param request the request.
 * @returns The response.
 */
export async function feedList(config: IConfiguration, request: IFeedListRequest): Promise<IFeedListResponse> {
    let response: IFeedListResponse;

    try {
        const page = request.page === undefined ? 0 : parseInt(request.page, 10);
        const pageSize = Math.max(request.pageSize === undefined ? 10 : parseInt(request.pageSize, 10), 1);
        let items: any[];
        let totalPages = 0;
        let totalItems = 0;

        const feed = config.feeds && config.feeds[request.context];

        if (feed.service === "eventbrite" && feed.config) {
            const eventBriteService = new EventBriteService(feed.config);

            const orgs = await eventBriteService.getOrganizations(0);

            if (orgs.organizations && orgs.organizations.length > 0) {
                const evts: IPagination<IEventBriteEvent> = await eventBriteService.getEvents(orgs.organizations[0].id, page, pageSize);

                if (evts) {
                    if (evts.events) {
                        items = evts.events.map(e => ({
                            title: e.name.text,
                            description: e.description.text,
                            startUtc: e.start.utc,
                            urlDetails: e.url,
                            venueName: e.online_event ? "Online Event" : e.venue && e.venue.name,
                            venueAddress: e.venue && e.venue.address && e.venue.address.localized_multi_line_address_display,
                            venueLongitude: e.venue && parseFloat(e.venue.longitude),
                            venueLatitude: e.venue && parseFloat(e.venue.latitude)
                        }));
                    }
                    if (evts.pagination) {
                        totalPages = evts.pagination.page_count;
                        totalItems = evts.pagination.object_count;
                    }
                }
            }
        }

        response = {
            success: true,
            message: "OK",
            items,
            totalPages,
            totalItems
        };
    } catch (err) {
        response = {
            success: false,
            message: err.toString()
        };
    }

    return response;

}
