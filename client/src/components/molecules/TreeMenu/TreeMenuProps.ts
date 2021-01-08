import { IProjectVersionPage } from "../../../models/IProjectVersionPage";

export interface TreeMenuProps {
    menuItems: IProjectVersionPage[];
    highlightedItem?: string;
}
