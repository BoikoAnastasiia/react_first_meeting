import React from "react";
import PaintingList from "./components/PaintingList";
import srcPaintings from "./src.json";

const App = () => {
  return (
    <div>
      <h1>The main component of an painting App container</h1>
      <PaintingList items={srcPaintings} />
    </div>
  );
};

export default App;
