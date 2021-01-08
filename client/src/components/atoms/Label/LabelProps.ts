import { ReactNode } from "react";

export interface LabelProps {
    id: string;
    text: ReactNode;
    className?: string;
    children?: ReactNode | ReactNode[];
}
