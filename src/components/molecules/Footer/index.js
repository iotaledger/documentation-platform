import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';
import Heading from '../../atoms/Heading';
import './footer.css'

const Footer = ({ content: { footerSections, footerStaticContent } }) => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer-top-content">
        {
          footerSections.map(({ heading, links }) =>
            <section className="footer-top-content__wrapper">
              <Heading level={3} text={heading} />
              {
                links.map(({ href, text }) =>
                  <Link href={href} key={text} target="_blank" className="footer-top-content__link">
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
      <div className="footer-bottom-content">
        <section className="footer-bottom-content__wrapper">
          {
            footerStaticContent.address.map(text =>
              <Text className="footer-bottom-content__item">
                {text}
              </Text>
            )
          }
        </section>
        <section className="footer-bottom-content__wrapper">
          {
            footerStaticContent.legal.map(text =>
              <Text className="footer-bottom-content__item" html>
                {text}
              </Text>
            )
          }
        </section>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  content: PropTypes.exact({
    footerSections: PropTypes.arrayOf(PropTypes.exact({
      header: PropTypes.string.isRequired,
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
