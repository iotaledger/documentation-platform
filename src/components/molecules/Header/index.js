import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';

const Header = ({ className, logo, topLinks }) => (
  <header className={`header ${className}`}>
    <div className="top-header">
        <div className="top-header__background">
        </div>
        <div className="top-header__items">
          {
            topLinks.map(item =>
              <Link href={item.href}>
                <Text className="top-header__item">
                  {item.text}
                </Text>
              </Link>
            )
          }
        </div>
    </div>
    <div className="header__wrapper">
      <section className="header__head">
        <Link href="https://iota.org">
          <img className="header__brand" src={logo} />
        </Link>
        <div className="header__icon"><i className="fas fa-bars fa-2x"></i></div>
      </section>
      <section className="header__body">
        <span className="text text--level1 text--secondary">Developer Documentation</span>
        <div className="header__search">
          <div className="input-wrapper">
            <input type="text" className="input-search" placeholder="Search for topics" />
          </div>
        </div>
      </section>
    </div>
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  classNameName: '',
};

export default Header;
