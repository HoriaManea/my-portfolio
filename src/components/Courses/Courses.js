import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../Courses/CourseCard";
import BookCard from "../Courses/BookCard";
import Codewars from "../Courses/Codewars";
import Particle from "../Particle";
import advanceJsCourseOne from "../../Assets/Courses/javascript-course.png";
import advanceJsCourseTwo from "../../Assets/Courses/javascript-course-4.PNG";
import advanceJsCourseThree from "../../Assets/Courses/advance-js-course.PNG";
import advanceJsCourseFOur from "../../Assets/Courses/js-advance-course.PNG";
import Linux from "../../Assets/Courses/Linux.PNG";
import reactCourseOne from "../../Assets/Courses/react-course-1.PNG";
import reactCourseTwo from "../../Assets/Courses/react-n-next-course.PNG";
import reactCourseThree from "../../Assets/Courses/react-ninja.PNG";
import bookOne from "../../Assets/Books/js-book.png";
import bookTwo from "../../Assets/Books/linuxbook.png";
import bookThree from "../../Assets/Books/react-book.png";
import codewars from "../../Assets/Books/codewars.png";

function Courses() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some courses I've completed to strengthen my skills and stay
          up-to-date with the latest technologies.{" "}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={reactCourseOne}
              isBlog={false}
              title="React - The Complete Guide 2025 (incl. Next.js, Redux)"
              description=""
              demoLink="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={reactCourseTwo}
              isBlog={false}
              title="The Ultimate React Course 2025: React, Next.js, Redux & More"
              description=""
              demoLink="https://www.udemy.com/course/the-ultimate-react-course/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={reactCourseThree}
              isBlog={false}
              title="Full React - Js Course 2025 - Be a React Ninja !"
              description=""
              demoLink="https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={advanceJsCourseOne}
              isBlog={false}
              title="The Complete JavaScript Course 2025: From Zero to Expert!"
              description=""
              demoLink="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=MT40825"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={advanceJsCourseTwo}
              isBlog={false}
              title="JavaScript Full Course for free 🌐 (2024)"
              description=""
              demoLink="https://www.youtube.com/watch?v=lfmg-EJ8gm4"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={advanceJsCourseThree}
              isBlog={false}
              title="Advanced Javascript Concepts From Dave Gray - Google Software Enginner"
              description=""
              demoLink="https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={advanceJsCourseFOur}
              isBlog={false}
              title="JavaScript Pro: Mastering Advanced Concepts and Techniques"
              description=""
              demoLink="https://www.udemy.com/course/pro-javascript/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={Linux}
              isBlog={false}
              title="Complete Linux Training Course to Get Your Dream IT Job 2025"
              description=""
              demoLink="https://www.udemy.com/course/complete-linux-training-course-to-get-your-dream-it-job/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Reads</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the books I've read to deepen my knowledge, improve
          my mindset, and grow both personally and professionally.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BookCard
              imgPath={bookOne}
              isBlog={false}
              title="Eloquent Javascript, 4th Edition"
              description=""
              demoLink="https://www.libristo.ro/ro/carte/eloquent-javascript-4th-edition_46405489?gad_source=1&gad_campaignid=6456083512&gbraid=0AAAAAC3l4xo0aAMX3ewZYiUZuWFj1ApDH&gclid=Cj0KCQjw18bEBhCBARIsAKuAFEbMg4GAZ8ZEHJtB5XLRjBwOjtiU_4FE6na5HM0dTFnoXkN4-UAoJqoaAs4rEALw_wcB"
            />
          </Col>
          <Col md={4} className="project-card">
            <BookCard
              imgPath={bookTwo}
              isBlog={false}
              title={"The Linux Command Line"}
              description=""
              demoLink="https://linuxcommand.org/tlcl.php"
            />
          </Col>
          <Col md={4} className="project-card">
            <BookCard
              imgPath={bookThree}
              isBlog={false}
              title={
                "Beginning ReactJS Foundations Building User Interfaces with ReactJS"
              }
              description=""
              demoLink="https://www.amazon.com/React-Foundations-Building-Interfaces-ReactJS/dp/1119685540"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading">
            My <strong className="purple">Coding Challenges</strong>
          </h1>
          <p style={{ color: "white" }}>
            I regularly solve coding challenges to sharpen my problem-solving
            skills and stay sharp.
          </p>
          <Col md={4} className="project-card">
            <Codewars
              imgPath={codewars}
              isBlog={false}
              title={""}
              description=""
              ghLink="https://github.com/HoriaManea/codewars-exercises"
              demoLink="https://www.codewars.com/users/HoriaHoria"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;
