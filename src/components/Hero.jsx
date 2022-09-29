import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Link to="/about">
        <button>swicht</button>
      </Link>
    </div>
  );
}

export default Hero;
