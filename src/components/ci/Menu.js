import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<section className={`side-menu ${this.props.classes}`} style={this.props.styles}>
  <h4 className="side-menu__caption">
    <span>Navigation</span>
    <i className="fas fa-times" onClick={e => this.props.onCloseClick()}></i>
  </h4>
  <section className="side-menu__group">
    <h5 className="side-menu__heading">
      <span>Heading 1</span>
      <i className="fas fa-angle-down"></i>
    </h5>
    <ul className="side-menu__list">
        <li>list item 1 </li>
        <li>list item 2 </li>
        <li>list item 3 </li>
    </ul>
  </section>
  <section className="side-menu__group side-menu__group--selected">
    <h5 className="side-menu__heading">
      <span>Heading 2</span>
      <i className="fas fa-angle-up"></i>
    </h5>
    <ul className="side-menu__list">
        <li>list item 4 </li>
        <li>list item 5 </li>
        <li>list item 6 </li>
    </ul>
  </section>
  <section className="side-menu__group">
    <h5 className="side-menu__heading">
      <span>Heading 3</span>
      <i className="fas fa-angle-down"></i>
    </h5>
    <ul className="side-menu__list">
        <li>list item 7 </li>
        <li>list item 8 </li>
        <li>list item 9 </li>
    </ul>
  </section>
  <section className="side-menu__group">
    <h5 className="side-menu__heading">
      <span>Heading 4</span>
      <i className="fas fa-angle-down"></i>
    </h5>
    <ul className="side-menu__list">
        <li>list item 10 </li>
        <li>list item 11 </li>
        <li>list item 12 </li>
    </ul>
  </section>
</section>)
  }
}
 export default Menu
