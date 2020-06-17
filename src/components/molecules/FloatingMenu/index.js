import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ContentMenuItemsPropTypes from '../../../utils/contentMenuItemsPropTypes';

class FloatingMenu extends React.Component {
    static propTypes = {
        menuItems: ContentMenuItemsPropTypes.isRequired,
        highlightedItem: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTarget: null
        };
    }

    componentDidMount() {
        this.handleScroll = this.handleScroll.bind(this);

        this.targets = this.props.menuItems.map(item => {
            const target = item.name.toLowerCase().replace(/ /g, '_');
            return document.getElementById(target);
        });

        document.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);

        this.handleScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }

    handleScroll() {
        const threshold = window.innerHeight * 0.35;

        let activeTarget = null;

        this.targets.forEach(target => {
            const rect = target.getBoundingClientRect();

            if (rect.top < threshold && rect.bottom > 0) {
                activeTarget = target.id;
            }
        });

        if (activeTarget !== this.state.activeTarget) {
            this.setState({
                activeTarget
            });
        }
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
                                    'floating-menu__item--selected': this.props.highlightedItem === item.folder || this.state.activeTarget === item.name.toLowerCase().replace(/ /g, '_')
                                })}
                    >
                        <Link to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ul>);
    }
}

export default FloatingMenu;
