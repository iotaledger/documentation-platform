import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import logo from '../../../assets/Logo.svg';
import { performSearch } from '../../../utils/search';
import InputSearch from '../../molecules/InputSearch';
import ViewDataPropTypes from '../../../utils/viewDataPropTypes';

class StickyHeader extends React.Component {
    static propTypes = {
        onBurgerClick: PropTypes.func,
        history: ReactRouterPropTypes.history,
        viewData: ViewDataPropTypes.isRequired
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
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    handleBurgerClick() {
        this.setState({ inputExpanded: false });
        if (this.props.onBurgerClick) {
            this.props.onBurgerClick();
        }
    }

    handleCloseClick() {
        this.setState({ inputExpanded: false });
    }

    onSearch(query) {
        performSearch(this.props.history, query);
    }

    handleKeyUp(e) {
        if (e.key === 'Escape') {
            this.setState({ inputExpanded: false });
        }
    }

    inputExpandHandler() {
        if (!this.state.inputExpanded) {
            this.setState({ inputExpanded: true });
            this.searchInput.focus();
        }
    }

    render() {
        return (
            <header className={classNames('sticky-header', { 'sticky-header--expanded': this.state.inputExpanded })}>
                <Link to="/">
                    <img className="sticky-header__brand" src={logo} />
                </Link>
                <div className="sticky-header__control">
                    {!this.props.viewData.disableSearch && (
                        <div
                            onClick={this.inputExpandHandler}
                            className={classNames('input-sticky-wrapper', {
                                'input-sticky-wrapper--expanded': this.state.inputExpanded
                            })}
                        >
                            <InputSearch
                                ref={(input) => { this.searchInput = input; }}
                                className="input-search-sticky"
                                placeholder="Search for topics"
                                onKeyUp={this.handleKeyUp}
                                onSearch={this.onSearch}
                            />
                            <button
                                className="sticky-header__icon-close"
                                onClick={this.handleCloseClick}
                            />
                        </div>
                    )}
                    <button
                        className="sticky-header__icon-burger"
                        onClick={this.handleBurgerClick}
                    />
                </div>
            </header>
        );
    }
}

export default withRouter(StickyHeader);
