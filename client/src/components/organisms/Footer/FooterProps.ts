import { History, Location } from "history";
import { IFoundationData } from "../../../models/IFoundationData";
import { IProject } from "../../../models/IProject";

export interface FooterProps {
    projects: IProject[];
    history: History;
    location: Location;
    foundationData: IFoundationData;
}
