import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, children, ...otherProps }) => (
  <div className={`group ${otherProps.type === "checkBox" ? "checkBox" : ""}`}>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    <span>{children}</span>
  </div>
);

export default FormInput;
