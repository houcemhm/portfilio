import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatf from "../../Assets/Projects/chat.png";
import editor from "../../Assets/Projects/codeEditor.png";
import aslema from "../../Assets/Projects/aslema.png";

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
              imgPath={chatf}
              isBlog={false}
              title="Chat App"
              description=" Personal Chat Room or Workspace to share resources and hangout with friends build with Flutter and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/houcemhm/chat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aslema}
              isBlog={false}
              title="Aaslema"
              description="  MERN SocialMedia applications  Supports dark mode and easy to write posts as well as supports reactions on posts."
              ghLink="https://github.com/houcemhm/aaslema_mern"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"

            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
