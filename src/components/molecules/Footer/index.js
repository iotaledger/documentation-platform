import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';
import Heading from '../../atoms/Heading';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    if (target && target.value) {
      const tab = window.open(target.value, '_self');
      tab.focus();
    }
  }

  render() {
    const { content: { footerSections, footerStaticContent } } = this.props;
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer-top-content">
            {
              footerSections.map(({ heading, links }) =>
                <section key={heading} className="footer-top-content__wrapper">
                  <Heading level={3} text={heading} />
                  {
                    links.map(({ href, text }) =>
                      <Link href={href} key={text} className="footer-top-content__link">
                        <Text className="footer-top-content__item">
                          {text}
                        </Text>
                      </Link>
                    )
                  }
                </section>
              )
            }
          </div>
          <div className="footer-top-content__dropdown-wrapper">
            <Heading level={3} text="Jump to a section" />
            <select onChange={this.handleClick} defaultValue="" className="select footer-top-content__dropdown">
              <option value="">Select a topic</option>
              {
                footerSections.map(({ heading, links }) =>
                  <optgroup key={heading} label={heading}>
                    {
                      links.map(({ href, text }) =>
                        <option key={text} value={href}>{text}</option>
                      )
                    }
                  </optgroup>
                )
              }
            </select>
          </div>
          <div className="footer-bottom-content">
            <section className="footer-bottom-content__wrapper">
              {
                footerStaticContent.address.map(text =>
                  <Text key={text} className="footer-bottom-content__item">
                    {text}
                  </Text>
                )
              }
            </section>
            <section className="footer-bottom-content__wrapper legal">
              {
                footerStaticContent.legal.map(text =>
                  <Text key={text} className="footer-bottom-content__item" html>
                    {text}
                  </Text>
                )
              }
            </section>
            <section className="footer-bottom-content__copyright">
              <Text className="footer-bottom-content__item">
                © 2018 IOTA Foundation
              </Text>
            </section>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  content: PropTypes.exact({
    footerSections: PropTypes.arrayOf(PropTypes.exact({
      heading: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(PropTypes.exact({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })).isRequired
    })),
    footerStaticContent: PropTypes.exact({
      address: PropTypes.arrayOf(PropTypes.string).isRequired,
      legal: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  })
};

export default Footer;
