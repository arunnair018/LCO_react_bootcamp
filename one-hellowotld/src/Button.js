import React from "react";

const Button = ({ title = "Button" }) => (
  <>
    <button className="button">{title}</button>
  </>
);

export default Button;
