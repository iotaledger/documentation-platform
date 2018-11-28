import React from 'react'
import styled, { css } from 'styled-components'


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<header className="header ">
  <div className="top-header">
      <div className="top-header__background">
      </div>
      <div className="top-header__items">
        <span className="top-header__item">IOTA.ORG</span>
        <span className="top-header__item">NEWS</span>
        <span className="top-header__item">WALLET</span>
        <span className="top-header__item">QUBIC</span>
        <span className="top-header__item">ECOSYSTEM</span>
      </div>
  </div>
  <div className="header__wrapper">
    <section className="header__head">
      <img className="header__brand" src="assets/Logo.svg" />
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
</header>)
  }
}
 export default Header
