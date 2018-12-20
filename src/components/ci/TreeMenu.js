import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-static';
import { buildItemTree } from '../../utils/helpers';
import { ContentMenuItemsPropTypes } from '../../utils/propTypes';

class TreeMenu extends React.Component {
    static propTypes = {
        menuItems: ContentMenuItemsPropTypes.isRequired,
        highlightedItem: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props)

        this.state = {
            sections: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.menuItems !== prevProps.menuItems) {
            this.setState({
                sections: buildItemTree(this.props.menuItems, this.props.highlightedItem)
            })
        }
    }

    render() {
        const { sections } = this.state;
        return (<div className="tree-menu">
            {sections.map((section, idx) => (
                <React.Fragment key={idx}>
                    {section.type === "section-link" && (
                        <h3
                            className={
                                classNames(
                                    'tree-menu__section-title',
                                    { 'tree-menu__section-title--selected': section.selected }
                                )
                            }><Link to={section.link}>{section.name}</Link></h3>
                    )}
                    {section.type === "section-header" && (
                        <React.Fragment>
                            <h3 className="tree-menu__section-title">{section.name}</h3>
                            <ul className="tree-menu__section">
                                {section.items.map((item, idx2) => (
                                    <li
                                        key={idx2}
                                        className={
                                            classNames(
                                                'tree-menu__section-item',
                                                { 'tree-menu__section-item--selected': item.selected }
                                            )
                                        }
                                    ><Link to={item.link}>{item.name}</Link></li>
                                ))}
                            </ul>
                        </React.Fragment>
                    )}
                </React.Fragment>
            ))}
        </div>)
    }
}
export default TreeMenu
