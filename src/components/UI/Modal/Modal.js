import React from "react";
import "./Modal.css";

import Container from "../../../higher_order/Container";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Container>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "" : "0"
      }}
      className="Modal"
    >
      {props.children}
    </div>
  </Container>
);

export default modal;
