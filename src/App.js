import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import RoadMap from "./components/RoadMap";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <RoadMap />
      <Contact />
    </div>
  );
};

export default App;
