import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        large: PropTypes.bool,
        small: PropTypes.bool,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
    };

    render() {
        return (<button
            id={this.props.id}
            onClick={this.props.onClick}
            disabled={this.props.disabled}
            className={
                classNames('button',
                    this.props.className,
                    {
                        'button--large': this.props.large,
                        'button--small': this.props.small,
                        'button--disabled': this.props.disabled,
                    })}
        >
            {this.props.children}
        </button>);
    }
}

export default Button;
