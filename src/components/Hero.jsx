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
  return (
    <div className="container mt-4 ">
      <button
        onClick={() => setNavShow(true)}
        className="btn btn-primary py-1 px-4"
      >
        Click
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        quis. Ipsum quam qui natus iste animi alias provident dolores delectus
        error expedita! Eaque, temporibus? Iusto ipsa voluptatibus aperiam
        repellat at.
      </p>
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
