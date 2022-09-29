import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoadMap from "./components/RoadMap";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/about" component={About} />
      </Switch>

      {/* <About /> */}
      {/* <RoadMap /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default App;
