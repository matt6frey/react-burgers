import React from "react";
import "./Backdrop.css";

const backdrop = props =>
  props.show ? <div className="BackDrop" onClick={props.clicked} /> : null;

export default backdrop;
