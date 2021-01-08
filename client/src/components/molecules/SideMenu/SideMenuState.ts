import { ISideMenuEntry } from "../../../models/ISideMenuEntry";
import { ITreeMenuEntry } from "../../../models/ITreeMenuEntry";

export interface SideMenuState {
    menuData: ISideMenuEntry[];
    expanded: ITreeMenuEntry;
}
