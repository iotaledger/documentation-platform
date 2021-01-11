import { RouteComponentProps } from "react-router";
import { IFoundationData } from "../models/IFoundationData";
import { IHomeData } from "../models/IHomeData";
import { IProject } from "../models/IProject";

export interface SearchProps extends RouteComponentProps {
    apiEndpoint: string;
    homeData: IHomeData;
    projects: IProject[];
    foundationData: IFoundationData;
}
