import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link, withRouter } from 'react-static';
import logo from '../../assets/Logo.svg';
import InputSearch from '../molecules/InputSearch';

class StickyHeader extends React.Component {
    static propTypes = {
        onBurgerClick: PropTypes.func,
        history: ReactRouterPropTypes.history
    };

    constructor(props) {
        super(props);

        this.state = {
            inputExpanded: false,
            searchResults: []
        };

        this.inputExpandHandler = this.inputExpandHandler.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
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

    inputExpandHandler() {
        this.setState({ inputExpanded: true });
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
                                    className="input-search-sticky"
                                    placeholder="Search for topics"
                                    onKeyUp={this.handleKeyUp}
                                    onSearch={this.onSearch}
                                />
                            </div>
                            <button
                                className="sticky-header__icon"
                                onClick={this.handleBurgerClick}
                            />
                        </div>
                    </section>
                </div>
            </header>
        );
    }
}

export default withRouter(StickyHeader);
