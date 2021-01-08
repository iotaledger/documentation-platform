import { ReactNode } from "react";

export interface ScrollInContainerProps {
    children: ReactNode | ReactNode[];
    topOffset?: number;
    bottomOffset?: number;
}
