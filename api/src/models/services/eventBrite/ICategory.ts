import { ISubCategory } from "./ISubCategory";

export interface ICategory {
    /**
     * The id.
     */
    id: string;

    /**
     * The resource_uri.
     */
    resource_uri: string;

    /**
     * The name.
     */
    name: string;

    /**
     * The name_localized.
     */
    name_localized: string;

    /**
     * The short_name.
     */
    short_name: string;

    /**
     * The short_name_localized.
     */
    short_name_localized: string;

    /**
     * The sub categories.
     */
    subcategories: ISubCategory[];

}
