import React from 'react';
import InputSearch from '../molecules/InputSearch';
import logo from '../../assets/Logo.svg';
import Menu from './Menu';

const menuHidden = {
  position: 'fixed',
  zIndex: 3,
  right: '-328px',
  top: 0,
  transition: '300ms ease',
  overflowY: 'scroll',
  paddingRight: '17px'
}
const menuShown = {
  position: 'fixed',
  zIndex: 3,
  right: "-32px",
  top: 0,
  transition: '300ms ease',
  overflowY: 'scroll',
  paddingRight: '17px'
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
    this.handleBurgerClick = this.handleBurgerClick.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  handleBurgerClick() {
    this.setState((prevState, prevProps) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  onSearch(query) {
    this.props.history.push(`/search?q=${query}`)
  }

  handleKeyUp(e) {
    if(e.key === "Escape") {
      this.setState({ inputExpanded: false })
    }
  }

  render() {
    const { isMenuOpen } = this.state;
    const { data, topTitles, headerTitle } = this.props;

    return (
      <header className="header">
        <div className="header__wrapper">
          <section className="header__head">
            <img className="header__brand" src={logo} />
            <div>
              <div className="top-header">
                <ul className="top-header__items">
                  {topTitles.map((topTitle, index) =>
                    (<li key={index} className="top-header__item">
                      <a href={topTitle.href}>{topTitle.text.toUpperCase()}</a>
                    </li>)
                  )}
                </ul>
              </div>
              <button className="header__icon" onClick={this.handleBurgerClick}/>
              <Menu
                isMenuOpen={isMenuOpen}
                data={data}
                onCloseClick={this.handleBurgerClick}
                styles={isMenuOpen ? menuShown : menuHidden} />
            </div>
          </section>
          <section className="header__body" style={{}}>
            <span className="text text--level1 text--secondary">{headerTitle}</span>
            <div className="header__search">
              <div className="input-wrapper">
                <InputSearch
                  className="input-search"
                  placeholder="Search for topics"
                  onKeyUp={this.handleKeyUp}
                  onSearch={this.onSearch}
                />
              </div>
            </div>
          </section>
        </div>
      </header>
    )
  }
}
export default Header
