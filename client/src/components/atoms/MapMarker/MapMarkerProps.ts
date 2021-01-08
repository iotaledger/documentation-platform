import { ReactNode } from "react";

export interface MapMarkerProps {
    lat: number;
    lng: number;
    children: ReactNode | ReactNode[];
}
