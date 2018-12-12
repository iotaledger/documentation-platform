import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-static'
import logo from './../../assets/Logo.svg'
import InputSearch from  './../Search'

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

  inputExpandHandler() {
    this.setState({ inputExpanded: true })
  }

  render() {
    return (
      <header className="sticky-header">
        <div className="sticky-header__wrapper">
          <section className="sticky-header__head">
            <Link to="/" exact>
              <img className="sticky-header__brand" src={logo} />
            </Link>
            <div className="sticky-header__control">
              <div
                onClick={this.inputExpandHandler}
                className={classNames('input-sticky-wrapper', {
                  'input-sticky-wrapper--expanded': this.state.inputExpanded
                })}
              >
                <InputSearch
                  class="input-search-sticky"
                  placeholder="Search for topics"
                  onKeyUp={this.handleKeyUp}
                />
                {/*<input
                    onKeyUp={this.handleKeyUp}
                    type="text" className="input-search-sticky"
                    placeholder="Search for topics"
                  />*/}
              </div>
              <button className="sticky-header__icon"><i className="fas fa-bars fa-2x"></i></button>
            </div>
          </section>
        </div>
      </header>
    )
  }
}

export default StickyHeader
