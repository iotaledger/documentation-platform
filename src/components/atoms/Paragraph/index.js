import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => (
  <p className={classNames('paragraph', className)}>{children}</p>
)

Text.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Paragraph;
