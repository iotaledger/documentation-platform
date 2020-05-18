import React from 'react';
import Cookies from 'universal-cookie';
import './disclaimer.css';

class Disclaimer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ackCookies: true
        };
    }

    /**
     * The component mounted.
     */
    componentDidMount() {
        const cookies = new Cookies();
        const cookieAck = cookies.get('cookieAck');
        this.setState({ ackCookies: cookieAck === 'yes' ? true : false });

        // If the cookie was already acknowledged extend its lifespan
        if (cookieAck === 'yes') {
            cookies.set('cookieAck', 'yes', { maxAge: 31536000, path: '/' });
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    render() {
        return this.state.ackCookies ? null : (
            <div className="disclaimer">
                <span>This website uses cookies to ensure you get the best experience.&nbsp;
                    <a href="https://www.iota.org/research/privacy-policy" target="_blank" rel="noopener noreferrer">Learn more.</a>
                </span>
                <button onClick={() => this.dismiss()} className="button">Dismiss</button>
            </div>
        );
    }

    /**
     * Dismiss the disclaimer.
     */
    dismiss() {
        const cookies = new Cookies();
        cookies.set('cookieAck', 'yes', { maxAge: 31536000, path: '/' });
        this.setState({ ackCookies: true });
    }
}

export default Disclaimer;
