import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oasis from "../../Assets/Projects/oasis-app.png";
import restaurant from "../../Assets/Projects/reastaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oasis}
              isBlog={false}
              title="Oasis App"
              description="A modern React.js app using React Router for navigation, Styled Components for styling, React Query for data fetching and caching, Context API for global state, React Hook Form for forms, React Icons, React Hot Toast for notifications, Recharts for charts, date-fns for date handling, and Supabase as a full backend solution."
              ghLink="https://github.com/HoriaManea/Oasis-App"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Pizza Restaurant"
              description="A modern application for a pizza restaurant, built with React, Redux Toolkit, and Tailwind CSS. The app allows users to browse the menu, add items to the cart, place orders, and manage the entire ordering process in an intuitive and fast way. It also includes smooth animations and responsive design to ensure a seamless experience across all devices."
              ghLink="https://github.com/HoriaManea/Restaurant-React-Project"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
