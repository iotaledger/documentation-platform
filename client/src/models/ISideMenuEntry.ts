import { ITreeMenuEntry } from "./ITreeMenuEntry";

export interface ISideMenuEntry {
    name: string;
    selected: boolean;
    expanded: boolean;
    items: ITreeMenuEntry[];
}
