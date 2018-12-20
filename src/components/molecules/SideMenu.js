import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-static';
import ClickOutside from '../ClickOutside';
import { createSideMenuEntries } from '../../utils/helpers';

class SideMenu extends React.Component {
    static propTypes = {
        data: PropTypes.any,
        onCloseClick: PropTypes.func,
        isMenuOpen: PropTypes.bool,
        highlightedItem: PropTypes.string
    };

    constructor(props) {
        super(props)
        this.state = {
            menuData: []
        }

        this.handleHeadingClick = this.handleHeadingClick.bind(this)
        this.keydown = this.keydown.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydown, false);

        this.setState({
            menuData: createSideMenuEntries(this.props.data, this.props.highlightedItem)
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.highlightedItem !== prevProps.highlightedItem) {
            this.setState({
                menuData: createSideMenuEntries(this.props.data, this.props.highlightedItem)
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydown, false);
    }

    handleHeadingClick(index) {
        this.setState((state, props) => {
            return {
                menuData:
                    state.menuData.map((item, ind) =>
                        (ind == index ?
                            { ...item, expanded: !item.expanded } :
                            { ...item, expanded: false }
                        ))
            };
        });
    }

    keydown(event) {
        if (event.keyCode === 27 && this.props.isMenuOpen) {
            this.props.onCloseClick();
        }
    }

    render() {
        return (
            <ClickOutside onClickOutside={this.props.isMenuOpen && this.props.onCloseClick}>
                <section className={classNames(
                    'side-menu',
                    { 'side-menu__shown': this.props.isMenuOpen },
                    { 'side-menu__hidden': !this.props.isMenuOpen }
                )}>
                    <h4 className="side-menu__caption">
                        <span>Navigation</span>
                        <button className="side-menu__close" onClick={this.props.onCloseClick}></button>
                    </h4>

                    {this.state.menuData.map((menuItem, index) => (
                        <section key={index}
                            className={classNames(
                                'side-menu__group',
                                { 'side-menu__group--expanded': menuItem.expanded },
                                { 'side-menu__group--selected': menuItem.selected }
                            )}>
                            <h5 className="side-menu__heading" onClick={() => this.handleHeadingClick(index)}>
                                <span>{menuItem.heading}</span>
                            </h5>
                            <ul className="side-menu__list">
                                {menuItem.items.map((menuListItem, miIndex) => (
                                    <React.Fragment key={miIndex}>
                                        {menuListItem.type === "section-link" && (
                                            <li className={classNames(
                                                'side-menu-item',
                                                { 'side-menu-item--active': menuListItem.selected }
                                            )}>
                                                <Link to={menuListItem.link} exact activeClassName="side-menu-item--active">
                                                    {menuListItem.name}
                                                </Link>
                                            </li>
                                        )}
                                        {menuListItem.type === "section-header" && (
                                            <div className="side-menu__sub-list">
                                                <div className="side-menu-item__header">{menuListItem.name}</div>
                                                <ul>
                                                    {menuListItem.items.map((subItem, idx) => (
                                                        <li key={idx}
                                                            className={classNames(
                                                                'side-menu-item',
                                                                { 'side-menu-item--active': subItem.selected }
                                                            )}>
                                                            <Link to={subItem.link} exact activeClassName="side-menu-item--active">
                                                                {subItem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </section>))
                    }
                </section>
            </ClickOutside>
        )
    }
}
export default SideMenu;
