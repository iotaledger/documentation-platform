import React, { ReactNode } from "react";
import { getNextPage, getPreviousPage, parseProjectUrl } from "../../../utils/projects";
import Link from "../../atoms/Link";
import { NavigatorProps } from "./NavigatorProps";
import { NavigatorState } from "./NavigatorState";

class Navigator extends React.Component<NavigatorProps, NavigatorState> {
    constructor(props: NavigatorProps) {
        super(props);
        this.state = {
            nextTitle: "",
            nextUrl: "",
            previousTitle: "",
            previousUrl: ""
        };
    }

    public componentDidMount(): void {
        const projectUrlParts = parseProjectUrl(this.props.pathname);
        const nextIndexItem = getNextPage(projectUrlParts, this.props.projects);
        const previousIndexItem = getPreviousPage(projectUrlParts, this.props.projects);

        this.setState({
            nextTitle: nextIndexItem ? nextIndexItem.name.replace(/\//g, " / ") : "",
            nextUrl: nextIndexItem ? nextIndexItem.link : "",
            previousTitle: previousIndexItem ? previousIndexItem.name.replace(/\//g, " / ") : "",
            previousUrl: previousIndexItem ? previousIndexItem.link : ""
        });
    }

    public render(): ReactNode {
        return (
            <section className="navigator">
                <Link href={this.state.previousUrl} className="navigator__back" disabled={!this.state.previousUrl}>
                    <div className="navigator__label">Prev</div>
                    <span className="navigator__title">{this.state.previousTitle}</span>
                </Link>
                <Link href={this.state.nextUrl} className="navigator__next" disabled={!this.state.nextUrl}>
                    <div className="navigator__label">Next</div>
                    <span className="navigator__title">{this.state.nextTitle}</span>
                </Link>
            </section>
        );
    }
}
export default Navigator;
