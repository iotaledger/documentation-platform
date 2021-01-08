import { IProjectLink } from "../../../models/IProjectLink";

export interface FloatingMenuProps {
    menuItems: IProjectLink[];
    highlightedItem?: string;
}
