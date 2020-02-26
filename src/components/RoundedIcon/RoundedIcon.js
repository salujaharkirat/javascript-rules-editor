import React from "react";

require("./RoundedIcon.css");

const RoundedIcon = ({children, className}) => (
  <div className={`${className ? className : ""} rounded-icon `}>
    {children}
  </div>
);

export default RoundedIcon;
