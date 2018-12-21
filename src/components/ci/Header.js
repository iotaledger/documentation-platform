import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import logo from '../../assets/Logo.svg';
import InputSearch from '../molecules/InputSearch';

class Header extends React.Component {
    static propTypes = {
        headerTitle: PropTypes.string,
        topTitles: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            href: PropTypes.string
        })),
        onBurgerClick: PropTypes.func,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location

    };

    constructor(props) {
        super(props);

        this.handleBurgerClick = this.handleBurgerClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleBurgerClick() {
        if (this.props.onBurgerClick) {
            this.props.onBurgerClick();
        }
    }

    onSearch(query) {
        this.props.history.push(`/search?q=${query}`);
    }

    handleKeyUp(e) {
        if (e.key === 'Escape') {
            this.setState({ inputExpanded: false });
        }
    }

    render() {
        const { topTitles, headerTitle } = this.props;

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
                                            <a href={topTitle.href} target="_blank">{topTitle.text.toUpperCase()}</a>
                                        </li>)
                                    )}
                                </ul>
                            </div>
                            <button className="header__icon" onClick={this.handleBurgerClick} />
                        </div>
                    </section>
                    <section className="header__body" style={{}}>
                        <span className="header__title text text--level1 text--secondary">{headerTitle}</span>
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
        );
    }
}
export default Header;
