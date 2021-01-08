import React, { ReactNode } from "react";
import Heading from "../../atoms/Heading";
import Text from "../../atoms/Text";
import ProjectTopicsInner from "./ProjectTopicsInner";
import { ProjectTopicsProps } from "./ProjectTopicsProps";

class ProjectTopics extends React.Component<ProjectTopicsProps> {
    public render(): ReactNode {
        return (
            <div className="project" id={this.props.content.name.toLowerCase().replace(/ /g, "_")}>
                <Heading className="project__heading" level={2}>
                    {this.props.content.name}
                </Heading>
                <Text className="project__subheading">
                    {this.props.content.description}
                </Text>
                <ProjectTopicsInner content={this.props.content.links} />
            </div>
        );
    }
}

export default ProjectTopics;
