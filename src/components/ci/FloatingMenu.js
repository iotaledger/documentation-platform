import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-static';
import { ContentMenuItemsPropTypes } from '../../utils/propTypes';

class FloatingMenu extends React.Component {
    static propTypes = {
        menuItems: ContentMenuItemsPropTypes.isRequired,
        highlightedItem: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (<ul className="floating-menu">
            {
                this.props.menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={
                            classNames('floating-menu__item',
                                {
                                    'floating-menu__item--selected': this.props.highlightedItem === item.name || (item.link[0] === '#' && this.props.highlightedItem === item.link)
                                })}
                    >
                        {item.link[0] !== '#' && (
                            <Link to={item.link} exact>
                                {item.name}
                            </Link>
                        )}
                        {item.link[0] === '#' && (
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))
            }
        </ul>);
    }
}

export default FloatingMenu;
