import React, { ReactNode } from "react";
import { getDocumentTitle, getNextPage, getPreviousPage, getProjectTitle, parseProjectUrl } from "../../../utils/projects";
import Link from "../../atoms/Link";
import { SubHeaderProps } from "./SubHeaderProps";
import { SubHeaderState } from "./SubHeaderState";

class SubHeader extends React.Component<SubHeaderProps, SubHeaderState> {
    constructor(props: SubHeaderProps) {
        super(props);

        this.state = {
            currProject: "",
            currTitle: "",
            nextUrl: "",
            previousUrl: ""
        };
    }

    public componentDidMount(): void {
        const projectUrlParts = parseProjectUrl(this.props.pathname);
        const nextIndexItem = getNextPage(projectUrlParts, this.props.projects);
        const previousIndexItem = getPreviousPage(projectUrlParts, this.props.projects);

        this.setState({
            currProject: getProjectTitle(projectUrlParts, this.props.projects),
            currTitle: getDocumentTitle(projectUrlParts, this.props.projects),
            nextUrl: nextIndexItem ? nextIndexItem.link : "",
            previousUrl: previousIndexItem ? previousIndexItem.link : ""
        });
    }

    public render(): ReactNode {
        return (
            <section className="sub-header__wrapper">
                <section className="sub-header">
                    <span className="sub-header__title">{this.state.currProject}</span>
                    <section className="sub-header__body">
                        <Link
                            href={this.state.previousUrl}
                            className="arrow-button arrow-button--left"
                            disabled={!this.state.previousUrl}
                        />
                        <span className="sub-header__bottom-title">{this.state.currTitle}</span>
                        <Link
                            href={this.state.nextUrl}
                            className="arrow-button arrow-button--right"
                            disabled={!this.state.nextUrl}
                        />
                    </section>
                </section>
            </section>
        );
    }
}
export default SubHeader;
