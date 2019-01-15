import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Label extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        text: PropTypes.node,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    render() {
        if (this.props.text) {
            return (
                <label htmlFor={this.props.id} className={classNames('control-label', this.props.className)}>
                    {this.props.children || this.props.text}
                </label>
            );
        }
        return null;
    }
}

export default Label;
