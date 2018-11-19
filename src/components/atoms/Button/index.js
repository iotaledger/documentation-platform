import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  id,
  onClick,
  children,
  large,
  small,
  className,
  isLoading,
  isDisabled,
}) => (
  <button
    id={id}
    onClick={onClick}
    className={classNames('button', className, {
      'button--large': large,
      'button--small': small,
      'button--disabled': isDisabled,
      disabled: isDisabled,
    })}
  >
    {isLoading ? <i className="fa fa-loading fa-spin" /> : null}
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,

  onClick: PropTypes.func,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
};

export default Button;
