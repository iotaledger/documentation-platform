import { ReactNode } from "react";

export interface BottomStickyProps {
    children: ReactNode | ReactNode[];
    horizontalOffset?: number;
    horizontalAlign?: "left" | "right";
    bottomOffset?: number;
    zIndex: number;
}
