import { ReactNode } from "react";

export interface MessageBoxProps {
    type: string;
    title: string;
    content: ReactNode | ReactNode[];
}
