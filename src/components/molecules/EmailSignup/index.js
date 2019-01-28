import PropTypes from 'prop-types';
import React from 'react';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import './email.css';
import InputRegister from './InputRegister';

class EmailSignup extends React.PureComponent {
    static propTypes = {
        apiEndpoint: PropTypes.string.isRequired
    };

    render() {
        return (<section className="email-signup">
            <div className="email-signup__wrapper">
                <div className="email-signup__content">
                    <Heading level={2} text="Stay up-to-date" />
                    <Paragraph>Get the latest IOTA development news straight to your mailbox</Paragraph>
                </div>
                <InputRegister apiEndpoint={this.props.apiEndpoint} />
            </div>
        </section>);
    }
}

export default EmailSignup;
