import { History } from "history";

export interface HeaderProps {
    topTitles: {
        name: string;
        href: string;
    }[];
    popularTopics: {
        query: string;
        name: string;
    }[];
    history: History;
    onBurgerClick: () => void;
}
