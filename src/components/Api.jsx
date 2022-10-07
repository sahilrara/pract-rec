import React from "react";
import { useState, useEffect } from "react";

const Api = () => {
  let [dogImage, setDogImage] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data.title));
  }, []);

  return (
    <div className="App">
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>
  );
};

export default Api;
