import React from 'react';
import PropTypes from 'prop-types';
import Painting from './Paintings';
import './paintingList.css';

const PaintingList = ({ items }) => (
  <ul className="PaintingList">
    {items.map(({ id, url, title, price, author, quantity }) => (
      <li key={id} className="PaintingList__item">
        <Painting
          url={url}
          title={title}
          price={price}
          profileUrl={author.url}
          tag={author.tag}
          quantity={quantity}
        />
      </li>
    ))}
  </ul>
);

Painting.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default PaintingList;
