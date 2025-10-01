import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/1751530956719.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 I’m a passionate Frontend Developer focused on delivering
              clean, responsive, and scalable web interfaces.
              <br />
              <br />
              💻 I specialize in React.js, Next.js, TypeScript and modern
              styling approaches such as CSS, CSS Modules, SCSS, Styled
              Components, Tailwind CSS, along with UI libraries like shadcn/ui
              and Material UI.
              <br />
              <br />
              ⚡ I am also skilled in modern build and testing tools including
              Vite, Webpack, Jest, React Testing Library and Husky, ensuring
              efficient workflows, reliable testing and high-quality code.
              <br />
              <br />
              🔧 In addition, I have experience integrating AI tools and APIs
              such as Ollama and OpenRouter to build intelligent, next-gen web
              applications, giving me a unique edge in projects that require
              smart and dynamic user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HoriaManea"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/horia-manea-503bba252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
