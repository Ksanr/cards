import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ children, className = 'card-footer text-muted' }) => {
  return <div className={className}>{children}</div>;
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardFooter;