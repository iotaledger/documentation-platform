import React from 'react';
import PropTypes from 'prop-types';
import InputRegister from './InputRegister';
import Paragraph from '../../atoms/Paragraph';
import Heading from '../../atoms/Heading';
import './email.css'

class EmailSignup extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick({ target }) {
  //
  // }

  render() {
    // const { content: { footerSections, footerStaticContent } } = this.props;
    return (
      <section className="email-signup">
        <div className="email-signup__wrapper">
          <div className="email-signup__content">
            <Heading level={2} text="Stay up-to-date" />
            <Paragraph>Get the latest IOTA development news straight to your mailbox</Paragraph>
          </div>
          <InputRegister />
        </div>
      </section>
    )
  }
}

// EmailSignup.propTypes = {
//   href: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default EmailSignup;
