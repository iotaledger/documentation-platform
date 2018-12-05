import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ id, onClick, children, large, small, className, disabled }) => (
  <button
    id={id}
    onClick={onClick}
    disabled={disabled}
    className={classNames('button', className, {
      'button--large': large,
      'button--small': small,
      'button--disabled': disabled,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
};

export default Button;
