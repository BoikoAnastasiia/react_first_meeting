import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const link = React.createElement(
//   "a",
//   { href: "https://www.react.org/", target: "_blank" },
//   "The Link"
// );

// const jsxLink = <a href="https://www.react.org/"> "The Link"</a>;

// console.log(link);
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById("root"));

const paintings = {
  id: "id-1",
  url:
    "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract",
  price: 300,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};

// const template = (
//   <div>
//     <img src={paintings.url} alt={paintings.title} width="480" />
//     <h2>{paintings.title}</h2>
//     <p>
//       Author: <a href={paintings.author.url}>{paintings.author.tag}</a>
//     </p>
//     <p>Price: {paintings.price} credits</p>
//     <button type="button">Add to basket </button>
//   </div>
// );
// console.log(template);
// ReactDOM.render(template, document.getElementById("root"));
