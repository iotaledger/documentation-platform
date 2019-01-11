import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import StylePropType from 'react-style-proptype';
import ClickOutside from '../ClickOutside';

class DropSelector extends React.PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })),
        value: PropTypes.string,
        onChange: PropTypes.func,
        style: StylePropType
    };

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleClick(value) {
        this.props.onChange(value);
        this.setState({ isExpanded: false });
    }

    handleExpand() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        return (
            <ClickOutside onClickOutside={this.handleExpand}>
                <div className={classNames(
                    'drop-selector',
                    { 'drop-selector__expanded': this.state.isExpanded }
                )}
                style={this.props.style}>
                    <div className="drop-selector-title" onClick={this.handleExpand}>
                        <div className="drop-selector-title__text">{this.props.value}</div>
                        <div className="drop-selector-title__icon"></div>
                    </div>
                    <ul className="drop-selector-list">
                        {this.props.items.map(item => (
                            <li key={item.value} className={classNames(
                                'drop-selector-list-item',
                                { 'drop-selector-list-item__selected': item.title === this.props.value }
                            )}>
                                <a onClick={() => this.handleClick(item.value)}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </ClickOutside>);
    }
}

export default DropSelector;
