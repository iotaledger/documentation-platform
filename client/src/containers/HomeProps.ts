import { RouteComponentProps } from "react-router";
import { IFoundationData } from "../models/IFoundationData";
import { IHomeData } from "../models/IHomeData";
import { IProject } from "../models/IProject";

export interface HomeProps extends RouteComponentProps {
    apiEndpoint: string;
    homeData: IHomeData;
    hideSignup: string;
    projects: IProject[];
    foundationData: IFoundationData;
}
