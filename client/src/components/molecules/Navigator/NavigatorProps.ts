import { IProject } from "../../../models/IProject";

export interface NavigatorProps {
    projects: IProject[];
    pathname: string;
}
