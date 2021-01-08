export interface IHomeData {
    headerTopLinks: {
        href: string;
        name: string;
    }[];

    popularTopics: {
        query: string;
        name: string;
    }[];

    cards: {
        href: string;
        image: string;
        name: string;
    }[];
}
