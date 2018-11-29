import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

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
        {this.props.topTitles.map(topTitle => (<span className="top-header__item">{topTitle}</span>))}
      </div>
  </div>
  <div className="header__wrapper">
    <section className="header__head">
      <img className="header__brand" src={logo} />
      <div className="header__icon"><i className="fas fa-bars fa-2x"></i></div>
    </section>
    <section className="header__body">
      <span className="text text--level1 text--secondary">{this.props.headerTitle}</span>
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
