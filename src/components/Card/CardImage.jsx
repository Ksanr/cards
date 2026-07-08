import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ src, alt = '', className = 'card-img-top' }) => {
  return <img src={src} alt={alt} className={className} />;
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default CardImage;