import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => (
  <span className={classNames('text', className)}>{children}</span>
)

Text.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Text;
