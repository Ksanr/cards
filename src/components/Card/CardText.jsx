import React from 'react';
import PropTypes from 'prop-types';

const CardText = ({ children, className = 'card-text' }) => {
  return <p className={className}>{children}</p>;
};

CardText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardText;