import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-static'
import logo from './../../assets/Logo.svg'
import InputSearch from  './../Search'
import Menu from './Menu'

const menuHidden = {
  position: 'fixed',
  zIndex: 2,
  right: '-311px',
  top: 0,
  transition: '500ms ease'
}
const menuShown = {
  position: 'fixed',
  zIndex: 2,
  right: 0,
  top: 0,
  transition: '500ms ease'
}

class StickyHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputExpanded: false,
      searchResults: [],
      isMenuOpen: false
    }

    this.inputExpandHandler = this.inputExpandHandler.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.onDataSearch = this.onDataSearch.bind(this)
    this.handleBurgerClick = this.handleBurgerClick.bind(this)
  }

  handleBurgerClick() {
    this.setState((prevState, prevProps) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }
  onDataSearch(data, query) {
    this.props.history.push(`/search?q=${query}`)
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
    const { isMenuOpen } = this.state;
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
                  className="input-search-sticky"
                  placeholder="Search for topics"
                  onKeyUp={this.handleKeyUp}
                  onDataSearch={this.onDataSearch}
                />
              </div>
              <Menu
                isMenuOpen={isMenuOpen}
                data={this.props.data}
                onCloseClick={this.handleBurgerClick}
                styles={isMenuOpen ? menuShown : menuHidden}
              />
              <button
                className="sticky-header__icon"
                onClick={this.handleBurgerClick}
              >
                <i className="fas fa-bars fa-2x"></i>
              </button>
            </div>
          </section>
        </div>
      </header>
    )
  }
}

export default StickyHeader
