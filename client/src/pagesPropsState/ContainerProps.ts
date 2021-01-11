import { History, Location } from "history";
import { ReactNode } from "react";
import { IFoundationData } from "../models/IFoundationData";
import { IProject } from "../models/IProject";

export interface ContainerProps {
    children: ReactNode | ReactNode[];
    projects: IProject[];
    history: History;
    location: Location;
    foundationData: IFoundationData;
}
