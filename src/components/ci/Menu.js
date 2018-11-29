import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<section class={`side-menu ${this.props.classes}`} style={this.props.styles}>
  <h4 class="side-menu__caption">
    <span>Navigation</span>
    <i class="fas fa-times"></i>
  </h4>
  <section class="side-menu__group">
    <h5 class="side-menu__heading">
      <span>Heading 1</span>
      <i class="fas fa-angle-down"></i>
    </h5>
    <ul class="side-menu__list">
        <li>list item 1 </li>
        <li>list item 2 </li>
        <li>list item 3 </li>
    </ul>
  </section>
  <section class="side-menu__group side-menu__group--selected">
    <h5 class="side-menu__heading">
      <span>Heading 2</span>
      <i class="fas fa-angle-up"></i>
    </h5>
    <ul class="side-menu__list">
        <li>list item 4 </li>
        <li>list item 5 </li>
        <li>list item 6 </li>
    </ul>
  </section>
  <section class="side-menu__group">
    <h5 class="side-menu__heading">
      <span>Heading 3</span>
      <i class="fas fa-angle-down"></i>
    </h5>
    <ul class="side-menu__list">
        <li>list item 7 </li>
        <li>list item 8 </li>
        <li>list item 9 </li>
    </ul>
  </section>
  <section class="side-menu__group">
    <h5 class="side-menu__heading">
      <span>Heading 4</span>
      <i class="fas fa-angle-down"></i>
    </h5>
    <ul class="side-menu__list">
        <li>list item 10 </li>
        <li>list item 11 </li>
        <li>list item 12 </li>
    </ul>
  </section>
</section>)
  }
}
 export default Menu
