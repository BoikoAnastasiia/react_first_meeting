import React from "react";
import Paintings from "./components/Paintings";
import srcPaintings from "./src.json";

const App = () => {
  return (
    <div>
      <h1>The main component of an painting App container</h1>
      <Paintings
        url={srcPaintings[0].url}
        title={srcPaintings[0].title}
        price={srcPaintings[0].price}
        profileurl={srcPaintings[0].author.url}
        tag={srcPaintings[0].author.tag}
      />

      <Paintings
        url="https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg"
        title="Flowers. Tulip nature art abstract"
        price="600"
        profileUrl="https://pixabay.com/users/ractapopulous-24766/"
        tag="ractapopulous"
      />
    </div>
  );
};

export default App;
