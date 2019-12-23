import React from "react";
import Container from "../../higher_order/Container";

import "./Layout.css";

const layout = props => (
  <Container>
    <div>ToolBar, SideDrawer, BackDrop</div>
    <main className="Content">{props.children}</main>
  </Container>
);

export default layout;
