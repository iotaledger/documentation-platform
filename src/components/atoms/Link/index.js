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
        ])
    };

    render() {
        return (<a
            id={this.props.id}
            target={this.props.target}
            href={this.props.href}
            rel={this.props.target === '_blank' ? 'noopener noreferrer' : ''}
            className={classNames('link', this.props.className)}
        >
            {this.props.children || <Text>{this.props.text}</Text>}
        </a>);
    }
}


export default Link;
