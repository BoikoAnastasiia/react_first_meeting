import React from "react";
import Painting from "./Paintings";

const PaintingList = ({ items }) => (
  <ul>
    {items.map((painting) => (
      <li key={painting.id}>
        <Painting
          url={painting.url}
          title={painting.title}
          price={painting.price}
          profileUrl={painting.author.url}
          tag={painting.author.tag}
          quantity={painting.quantity}
        />
      </li>
    ))}
  </ul>
);

export default PaintingList;
