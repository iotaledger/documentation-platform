import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import StylePropType from 'react-style-proptype';
import ClickOutside from '../ClickOutside';

class DropSelector extends React.PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })),
        currentName: PropTypes.string,
        style: StylePropType
    };

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        return (
            <ClickOutside onClickOutside={this.state.isExpanded ? this.handleExpand : undefined}>
                <div className={classNames(
                    'drop-selector',
                    { 'drop-selector__expanded': this.state.isExpanded }
                )}
                style={this.props.style}>
                    <div className="drop-selector-title" onClick={this.handleExpand}>
                        <div className="drop-selector-title__text">{this.props.currentName}</div>
                        <div className="drop-selector-title__icon"></div>
                    </div>
                    <ul className="drop-selector-list">
                        {this.props.items.map(item => (
                            <li key={item.link} className={classNames(
                                'drop-selector-list-item',
                                { 'drop-selector-list-item__selected': item.name === this.props.currentName }
                            )}>
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </ClickOutside>);
    }
}

export default DropSelector;
