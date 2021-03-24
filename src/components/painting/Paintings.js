import React from 'react';
import defaultImage from './default.jpg';
import propTypes from 'prop-types';

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Price: {price} credits</p>
    <p>Available: {quantity < 10 ? 'nope' : 'yes'}</p>
    <button type="button">Add to basket </button>
  </div>
);

Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  url: propTypes.string,
  title: propTypes.string.isRequired,
  profileUrl: propTypes.string,
  tag: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
};

export default Painting;
