import { RouteComponentProps } from "react-router";
import { IFoundationData } from "../models/IFoundationData";
import { IProject } from "../models/IProject";

export interface DocProps extends RouteComponentProps {
    title: string;
    apiEndpoint: string;
    googleMapsKey: string;
    markdown: string;
    projects: IProject[];
    foundationData: IFoundationData;
}
