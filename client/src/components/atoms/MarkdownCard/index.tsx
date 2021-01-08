import React, { ReactNode } from "react";
import Link from "../Link";
import { MarkdownProps } from "./MarkdownProps";

class MarkdownCard extends React.Component<MarkdownProps> {
    public render(): ReactNode {
        return (
            <div className="markdown-card">
                <div className="markdown-card--inner">
                    <Link href={this.props.link} id={this.props.id}>
                        <img className="markdown-card--image" src={this.props.img} alt={this.props.alt} />
                        <div className="markdown-card--content">
                            <div className="markdown-card--title">{this.props.title}</div>
                            {this.props.children}
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MarkdownCard;
