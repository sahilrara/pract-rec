import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const tableData = [
    { name: "Naveen", id: 1, result: "Pass" },
    { name: "Vikram", id: 2, result: "Fail" },
    { name: "mohit", id: 3, result: "Not Confirm" },
    { name: "aniket", id: 4, result: "Pass" },
  ];

  return (
    <div className="container mt-4 ">
      <button
        onClick={() => setNavShow(true)}
        className="btn btn-primary py-1 px-4"
      >
        Click
      </button>
      {tableData.map((val) => {
        return (
          <div key={val.id}>
            <h1>{val.name}</h1>
            <p>{val.id}</p>
            <h2
              className={`${
                val.result === "Pass"
                  ? "text-success"
                  : `${
                      val.result === "Not Confirm"
                        ? "text-warning"
                        : "text-danger"
                    }`
              }`}
            >
              {val.result}
            </h2>
          </div>
        );
      })}
      {/* className="" */}
      <div className={`${navShow ? "nav-fix bg-dark" : " fix-navbar"}`}>
        <h1 className="text-white">responsive navbar</h1>
        <button onClick={() => setNavShow(false)} className="bg-danger">
          close
        </button>
      </div>
    </div>
  );
}

export default Hero;
