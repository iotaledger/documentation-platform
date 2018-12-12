import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class StickyHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<header class="sticky-header">
      <div class="sticky-header__wrapper">
        <section class="sticky-header__head">
          <img class="sticky-header__brand" src={logo} />
          <div class="sticky-header__control">
              <div class="input-sticky-wrapper [modifier class]">
                <input type="text" class="input-search-sticky" placeholder="Search for topics" />
              </div>
              <button class="sticky-header__icon"><i class="fas fa-bars fa-2x"></i></button>
          </div>
        </section>
      </div>
    </header>)

  }
}
 export default StickyHeader
