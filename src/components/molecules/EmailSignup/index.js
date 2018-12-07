import React from 'react';
import PropTypes from 'prop-types';
import InputRegister from './InputRegister';
import Paragraph from '../../atoms/Paragraph';
import Heading from '../../atoms/Heading';
import './email.css'

const EmailSignup = () => (
  <section className="email-signup">
    <div className="email-signup__wrapper">
      <div className="email-signup__content">
        <Heading level={2} text="Stay up-to-date" />
        <Paragraph>Get the latest IOTA development news straight to your mailbox</Paragraph>
      </div>
      <InputRegister />
    </div>
  </section>
);

export default EmailSignup;
