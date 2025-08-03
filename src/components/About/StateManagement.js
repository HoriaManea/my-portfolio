import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as ReduxLogo } from "./redux.svg";

function StateManagement() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ReduxLogo />
      </Col>
    </Row>
  );
}

export default StateManagement;
