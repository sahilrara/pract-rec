// import React from 'react';
import { useState } from "react";
import Api from "./Api";

function FormPage() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, password);
  };
  return (
    <>
      <Api />
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="FirstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="d-block my-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-danger mb-4 " type="Submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormPage;
