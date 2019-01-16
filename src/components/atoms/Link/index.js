import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../Text';

class Link extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        href: PropTypes.string,
        target: PropTypes.string,
        text: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        disabled: PropTypes.bool
    };

    render() {
        return (<a
            id={this.props.id}
            target={this.props.target}
            href={this.props.href}
            rel={this.props.target === '_blank' ? 'noopener noreferrer' : undefined}
            className={classNames('link', this.props.className, { 'disabled': this.props.disabled })}
        >
            {this.props.children || <Text>{this.props.text}</Text>}
        </a>);
    }
}


export default Link;
