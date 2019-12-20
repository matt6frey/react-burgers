import React from "react";
import "./Button.css";

const button = props => {
  let buttonType = "Button ";
  buttonType += props.btnType === "Danger" ? "Danger" : "Success";
  return (
    <button className={buttonType} onClicked={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
