import { ReactElement } from "react";

export interface TabProps {
    headers: string[];
    contents: ReactElement[];
    source: string[];
}
