export interface ITreeMenuEntry {
    type?: "section-link" | "section-header" | "section-header-item" | "section-header-sub";
    name: string;
    link?: string;
    selected?: boolean;
    expanded?: boolean;
    items?: ITreeMenuEntry[];
}
