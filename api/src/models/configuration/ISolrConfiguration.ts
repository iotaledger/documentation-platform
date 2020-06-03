/**
 * Definition of Solr configuration.
 */
export interface ISolrConfiguration {
    /**
     * The endpoint for the solr server.
     */
    endpoint: string;

    /**
     * Authorization.
     */
    authorization?: string;

    /**
     * The document core.
     */
    core: string;
}
