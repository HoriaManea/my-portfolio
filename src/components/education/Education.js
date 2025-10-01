import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import unitbvLogo from "../../Assets/unitbvlogo.png";

function Education() {
  const educationData = [
    {
      degree: "Master’s Degree",
      field: "Software Engineering",
      school: "Transilvania University of Brașov",
      logo: unitbvLogo,
      period: "2025 - Present",
      focus: `Enterprise Software Architecture (.NET), Data Science,
            Distributed and Mobile Programming (Android, iOS, Windows),
            Big Data & Machine Learning, Cloud & Grid Computing, Cybersecurity.`,
      type: "gold",
      link: "https://mateinfo.unitbv.ro/ro/programe-de-studii/masterat.html", // link specific master
    },
    {
      degree: "Bachelor’s Degree",
      field: "Engineering",
      school: "Transilvania University of Brașov",
      logo: unitbvLogo,
      period: "2017 - 2021",
      focus: `Studied core engineering principles including programming, mechanics, 
        and systems design. Gained practical experience in problem-solving, technical
        analysis, and project development in multidisciplinary teams.`,
      type: "silver",
      link: "https://www.unitbv.ro/bachelor-engineering", // link specific licență
    },
  ];

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container style={{ marginBottom: "130px" }}>
        <h1 className="project-heading text-center mb-5">
          My <strong className="purple">Education</strong>
        </h1>

        <Row className="justify-content-center g-4">
          {educationData.map((edu, index) => (
            <Col md={6} key={index}>
              <Card
                className={`resume-item space-card border-0 rounded-4 h-100 ${edu.type}`}
              >
                <Card.Body className="text-center p-4 text-light">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    style={{ width: "70px", marginBottom: "15px" }}
                  />
                  <h3 className="resume-title fw-bold">{edu.degree}</h3>
                  <h5 className="text-muted mb-2">{edu.field}</h5>
                  <p className="mb-1">
                    <span className="purple">{edu.school}</span>
                  </p>
                  <p className="small text-secondary mb-3">{edu.period}</p>
                  <p className="small fst-italic">{edu.focus}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .space-card {
          position: relative;
          overflow: hidden;
          background: #0d0715;
          border-radius: 1rem;
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* --- GOLD TROPHY CARD --- */
        .gold::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            145deg,
            #3a2c0a 0%,
            #7c6114 20%,
            #d4af37 40%,
            #f6e27a 60%,
            #b8860b 80%,
            #3a2c0a 100%
          );
          background-size: 250% 250%;
          animation: goldShine 8s ease-in-out infinite;
          z-index: 0;
        }

        /* --- SILVER TROPHY CARD --- */
        .silver::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            145deg,
            #4b5563 0%,
            #9ca3af 25%,
            #f9fafb 50%,
            #9ca3af 75%,
            #4b5563 100%
          );
          background-size: 250% 250%;
          animation: silverShine 10s ease-in-out infinite;
          z-index: 0;
        }

        /* --- Shine bar peste card --- */
        .gold::after,
        .silver::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 70%
          );
          transform: rotate(25deg);
          animation: shineSweep 6s linear infinite;
          z-index: 1;
          mix-blend-mode: overlay;
        }

        /* Hex overlay */
        .space-card::before,
        .space-card::after {
          border-radius: 1rem;
        }

        .space-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
              60deg,
              rgba(168, 85, 247, 0.15) 0,
              rgba(168, 85, 247, 0.15) 2px,
              transparent 2px,
              transparent 40px
            ),
            repeating-linear-gradient(
              -60deg,
              rgba(168, 85, 247, 0.15) 0,
              rgba(168, 85, 247, 0.15) 2px,
              transparent 2px,
              transparent 40px
            );
          background-size: 70px 120px;
          animation: hexMove 14s linear infinite;
          opacity: 0.2;
          z-index: 0;
        }

        .space-card > .card-body {
          position: relative;
          z-index: 2;
          transform-style: preserve-3d;
        }

        /* --- Hover 3D effect --- */
        .space-card:hover {
          transform: translateY(-20px) rotateX(6deg) rotateY(6deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .resume-title {
          font-size: 1.4rem;
        }

        @keyframes goldShine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes silverShine {
          0% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes shineSweep {
          0% {
            transform: translateX(-200%) rotate(25deg);
          }
          100% {
            transform: translateX(200%) rotate(25deg);
          }
        }

        @keyframes hexMove {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 140px 240px, -140px 240px;
          }
        }
      `}</style>
    </Container>
  );
}

export default Education;
