import React from "react";
const { default: Ex011 } = require("./Ex011");
const { default: Ex012 } = require("./Ex012");
const { default: Ex013 } = require("./Ex013");

const Ex01 = () => {
  return (
    <div
      className="transform-content animation-stroke-dash-offset animation-fill-offset animation-text-info"
      id="transform-content-id"
    >
      <Ex011 />
      <Ex012 />
      <Ex013 />
    </div>
  );
};

export default Ex01;
