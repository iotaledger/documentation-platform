import React, { ReactNode } from "react";
import { GoogleAnalyticsProps } from "./GoogleAnalyticsProps";

class GoogleAnalytics extends React.PureComponent<GoogleAnalyticsProps> {
    public render(): ReactNode {
        if (!this.props.id || this.props.id.trim().length === 0) {
            return null;
        }

        const src = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${this.props.id}');
`;

        return (
            <React.Fragment>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${this.props.id}`} />
                <script dangerouslySetInnerHTML={{ __html: src }} />
            </React.Fragment>);
    }
}

export default GoogleAnalytics;
