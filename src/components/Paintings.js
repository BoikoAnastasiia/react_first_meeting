import React from "react";
import defaultImage from "./default.jpg";
console.log(defaultImage);

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Price: {price} credits</p>
    <p>Available: {quantity < 10 ? "nope" : "yes"}</p>
    <button type="button">Add to basket </button>
  </div>
);

Painting.defaultProps = {
  price: 1000,
  url: defaultImage,
};

export default Painting;
