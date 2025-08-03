import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiCss3, DiSass } from "react-icons/di";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";

function Style() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents />
      </Col>
    </Row>
  );
}

export default Style;
