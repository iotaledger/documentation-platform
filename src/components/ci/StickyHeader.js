import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class StickyHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputExpanded: false
    }
    this.inputExpandHandler = this.inputExpandHandler.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  handleKeyUp(e) {
    if(e.key === "Escape") {
     this.setState({ inputExpanded: false })
    }
  }
  inputExpandHandler(e) {
    this.setState({ inputExpanded: true })
  }
  render() {
    return (<header class="sticky-header">
      <div class="sticky-header__wrapper">
        <section class="sticky-header__head">
          <img class="sticky-header__brand" src={logo} />
          <div class="sticky-header__control">
                <div
                  onClick={this.inputExpandHandler}
                  class={`input-sticky-wrapper
                          ${this.state.inputExpanded ? 'input-sticky-wrapper--expanded' : ''}`
                        }
                >
                <input onKeyUp={this.handleKeyUp} type="text" class="input-search-sticky" placeholder="Search for topics" />
              </div>
              <button class="sticky-header__icon"><i class="fas fa-bars fa-2x"></i></button>
          </div>
        </section>
      </div>
    </header>)

  }
}
 export default StickyHeader
