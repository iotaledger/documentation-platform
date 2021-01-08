import classNames from "classnames";
import React, { ReactNode } from "react";
import Link from "../../atoms/Link";
import Markdown from "../../organisms/Markdown";
import { ProjectTopicsInnerProps } from "./ProjectTopicsInnerProps";

class ProjectTopicsInner extends React.Component<ProjectTopicsInnerProps> {
    public render(): ReactNode {
        return (
            <div className={
                classNames(
                    "project-topics",
                    { "project-topics__compressed": this.props.compressed }
                )
            }
            >
                {
                    this.props.content?.map((item, idx) =>
                        (
                            <div key={idx} className="project-topic__item">
                                {item.link && (
                                    <Link
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : undefined}
                                        className="project-topic__link"
                                    >
                                        <span className={
                                            classNames(
                                                "project-topic__heading",
                                                "text--level6",
                                                { "project-topic__primary-bullet": item.bullet === "primary" },
                                                { "project-topic__secondary-bullet": item.bullet === "secondary" }
                                            )
                                        }
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                )}
                                {!item.link && (
                                    <span className={
                                        classNames(
                                            "project-topic__heading",
                                            "text--level6",
                                            { "project-topic__primary-bullet": item.bullet === "primary" },
                                            { "project-topic__secondary-bullet": item.bullet === "secondary" }
                                        )
                                    }
                                    >
                                        {item.name}
                                    </span>
                                )}
                                <Markdown
                                    // className="project-topic__subheading"
                                    source={item.description}
                                    highlights={this.props.highlights}
                                />
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default ProjectTopicsInner;
