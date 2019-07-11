import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from '../../atoms/Link';
import { createSideMenuEntries } from '../../../utils/projects';
import { ProjectsPropTypes } from '../../../utils/propTypes';
import ClickOutside from '../../atoms/ClickOutside';

class SideMenu extends React.Component {
    static propTypes = {
        projects: ProjectsPropTypes.isRequired,
        onCloseClick: PropTypes.func,
        isMenuOpen: PropTypes.bool,
        highlightedItem: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            menuData: []
        };

        this.handleHeadingClick = this.handleHeadingClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.keydown = this.keydown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydown, false);

        this.setState({
            menuData: createSideMenuEntries(this.props.projects, this.props.highlightedItem)
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.highlightedItem !== prevProps.highlightedItem) {
            this.setState({
                menuData: createSideMenuEntries(this.props.projects, this.props.highlightedItem)
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('no-scroll', nextProps.isMenuOpen);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydown, false);
    }

    handleHeadingClick(index) {
        this.setState((state) => {
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

    handleCloseClick() {
        if (this.props.isMenuOpen && this.props.onCloseClick) {
            document.body.classList.toggle('no-scroll', false);
            this.props.onCloseClick();
        }
    }

    keydown(event) {
        if (event.keyCode === 27 && this.props.isMenuOpen) {
            this.props.onCloseClick();
        }
    }

    render() {
        return (
            <ClickOutside onClickOutside={this.handleCloseClick}>
                <section className={classNames(
                    'side-menu',
                    { 'side-menu__shown': this.props.isMenuOpen },
                    { 'side-menu__hidden': !this.props.isMenuOpen }
                )}>
                    <h4 className="side-menu__caption">
                        <span>Navigation</span>
                        <button className="side-menu__close" onClick={this.handleCloseClick}></button>
                    </h4>

                    {this.state.menuData.map((menuItem, index) => (
                        <section key={index}
                            className={classNames(
                                'side-menu__group',
                                { 'side-menu__group--expanded': menuItem.expanded },
                                { 'side-menu__group--selected': menuItem.selected }
                            )}>
                            <h5 className="side-menu__heading" onClick={() => this.handleHeadingClick(index)}>
                                <span>{menuItem.name}</span>
                            </h5>
                            <ul className="side-menu__list">
                                {menuItem.items.map((menuListItem, miIndex) => (
                                    <React.Fragment key={miIndex}>
                                        {menuListItem.type === 'section-link' && (
                                            <li className={classNames(
                                                'side-menu-item',
                                                { 'side-menu-item--active': menuListItem.selected }
                                            )}>
                                                <Link href={menuListItem.link}
                                                    target={menuListItem.link.startsWith('http') ? '_blank' : undefined}
                                                    className={classNames({ 'side-menu-item--active': menuListItem.selected })}>
                                                    {menuListItem.name}
                                                </Link>
                                            </li>
                                        )}
                                        {menuListItem.type === 'section-header' && (
                                            <div className="side-menu__sub-list">
                                                <div className="side-menu-item__header">{menuListItem.name}</div>
                                                <ul>
                                                    {menuListItem.items.map((subItem, idx) => (
                                                        <React.Fragment key={idx}>
                                                            <li className={classNames(
                                                                'side-menu-item',
                                                                { 'side-menu-item--active': subItem.selected }
                                                            )}>
                                                                {subItem.type === 'section-header-item' && (
                                                                    <Link
                                                                        href={subItem.link}
                                                                        target={subItem.link.startsWith('http') ? '_blank' : undefined}
                                                                        className={classNames({ 'side-menu-item--active': subItem.selected })}>
                                                                        {subItem.name}
                                                                    </Link>
                                                                )}
                                                                {subItem.type === 'section-header-sub' && (
                                                                    <React.Fragment>
                                                                        <Link href={subItem.items[0].link} target={subItem.items[0].link.startsWith('http') ? '_blank' : undefined}>{subItem.name}</Link>
                                                                        {subItem.selected && (
                                                                            <ul className="side-menu-item-sub">
                                                                                {subItem.items.map((child, idx3) => (
                                                                                    <li key={idx3}
                                                                                        className={
                                                                                            classNames(
                                                                                                'side-menu-item-sub-child',
                                                                                                { 'side-menu-item-sub-child--active': child.selected }
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        <Link href={child.link} target={child.link.startsWith('http') ? '_blank' : undefined}>{child.name}</Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        )}
                                                                    </React.Fragment>
                                                                )}                                                            </li>
                                                        </React.Fragment>
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
        );
    }
}
export default SideMenu;
