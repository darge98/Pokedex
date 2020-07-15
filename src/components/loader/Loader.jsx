import React from "react";
import "./Loader.scss";

export const Loader = () => (
  <div className="flex flex-col justify-center h-full w-full">
    <div className="flex justify-center pokeball-loader">
      <div className="block w-20 h-20 bg-contain pokeball-rotation pokeball" />
    </div>
  </div>
);
