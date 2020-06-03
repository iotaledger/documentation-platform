import PropTypes from 'prop-types';
import React from 'react';

class GoogleAnalytics extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string
    };

    render() {
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
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${this.props.id}`}></script>
                <script dangerouslySetInnerHTML={{ __html: src }} />
            </React.Fragment>);
    }
}

export default GoogleAnalytics;
