import { Col, Container, Tab, Row } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { ExtracurricularsInfo } from "./ExtracurricularsInfo";
import bedlabimg from "../assets/img/bedlab-logo.png";
import ewbimg from "../assets/img/ewb-logo.jpg";

export const Extracurriculars = () => {

  const projects = [
    {
      title: "AI in Education",
      description: "As part of the Honors Capstone Project, I am researching usage of ChatGPT among students at UCR. Click on the link to see the prospectus for the project.",
      imgUrl: bedlabimg,
      link: "https://docs.google.com/document/d/1PGYEUwCJX8EIjuAIVCq8aNokoOnpCL4s2eOfHDoNdKI/edit",
    },
    {
      title: "EWB @ UCR",
      description: "Engineers Without Borders is a non-profit humanitarian organization established to partner with developing communities worldwide in order to improve their quality of life. Click to find out more information about our chapter!",
      imgUrl: ewbimg,
      link: "https://ewb.ucrhighlanders.org/",
    }
    
  ];
  return (
    <section className="extracurriculars" id="projects">
      <Container>
        <Row>
          <Col>
            <h2><span className="tagline">Research and Extracurriculars</span></h2>
            <p>I am also conducting research for my Capstone Project at UCR, as part of the Honors Program.
              The research seeks to identify the factors that influence the usage of Generative AI-tools like 
              ChatGPT by students in higher education. I am conducting this research under guidance of my faculty
              mentor, Professor <a href="https://profiles.ucr.edu/app/home/profile/yeliphd" target="_blank" rel="noopener noreferrer">Ye Li</a>. 
            </p>
            <hr/>
            <p>I am also Vice President of the Engineers Without Borders Chapter at UCR. 
              Currently, I am leading a team to build a fertilizer robot using Arduino.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ExtracurricularsInfo key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                
                
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}