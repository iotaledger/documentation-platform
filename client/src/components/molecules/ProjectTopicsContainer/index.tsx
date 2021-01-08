import React, { ReactNode } from "react";
import ProjectTopics from "./ProjectTopics";
import { ProjectTopicsContainerProps } from "./ProjectTopicsContainerProps";

class ProjectTopicsContainer extends React.Component<ProjectTopicsContainerProps> {
    public render(): ReactNode {
        return (
            <div className="project__wrapper">
                {
                    this.props.content.map((c, idx) =>
                        <ProjectTopics key={idx} content={c} />
                    )
                }
            </div>
        );
    }
}

export default ProjectTopicsContainer;
