import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ children, className = 'card-title' }) => {
  return <h5 className={className}>{children}</h5>;
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardTitle;