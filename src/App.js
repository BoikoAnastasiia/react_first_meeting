import React from "react";
import Logo from "./components/logo";
import PaintingList from "./components/PaintingList";
import srcPaintings from "./src.json";

const App = () => {
  return (
    <div>
      <Logo text="The main component of an painting App container" />
      <PaintingList items={srcPaintings} />
    </div>
  );
};

export default App;
