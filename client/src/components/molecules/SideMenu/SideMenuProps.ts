import { IProject } from "../../../models/IProject";

export interface SideMenuProps {
    projects: IProject[];
    isMenuOpen: boolean;
    highlightedItem?: string;
    onCloseClick: () => void;
}
