import React from "react";

require("./Text.css");


const Text = ({children, className}) => (
  <span className={`text ${className ? className : ""}`}>
    {children}
  </span>
);

export default Text;
