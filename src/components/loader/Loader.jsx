import React from "react";
import "./Loader.css";

export const Loader = () => (
  <div className="overlay d-flex flex-column justify-content-center">
    <div className="pokeball-loader d-flex justify-content-center">
      <div className="pokeball bounce" />
    </div>
  </div>
);
