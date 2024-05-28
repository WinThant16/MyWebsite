import { Col, Container, Tab, Row } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { ProjectInfo } from "./ProjectInfo";
import projImg1 from "../assets/img/stock.webp";
import projImg2 from "../assets/img/movie.webp";
import projImg3 from "../assets/img/crime.webp";

export const Projects = () => {

  const projects = [
    {
      title: "Crime Analysis using Pyspark (In Progress)",
      description: "Python, Apache Spark, Pandas",
      imgUrl: projImg3,
      link: "https://docs.google.com/document/d/1FhQOC_8CuGTowFZgOtC6kUCM_S_9DRvy62JGSTed2vE/edit?usp=sharing",
    },
    {
      title: "Movie Recommender",
      description: "C++",
      imgUrl: projImg2,
      link: "https://github.com/WinThant16/MovieRecommender",
    },
    {
      title: "Stock Purchase Simulator",
      description: "Python, HTML and CSS",
      imgUrl: projImg1,
      link: "https://github.com/WinThant16/CS50-2020-2021/tree/main/WinThant16-cs50-problems-2021-x-project/WinThant16-cs50-problems-2021-x-project",
    }   
    
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2><span className="tagline">Projects</span></h2>
            <p>
              <em className="proj-title">Crime Analysis using PySpark</em>
              <br/>
              I am working in a team of 4
              to perform crime analysis on 5 major cities in the United States. 
              The analysis is performed using a combined dataset of race, income and crime.
            </p>
            <hr/>
            <p>
              <em className="proj-title">Movie Recommender Project</em>
              <br/>
              I worked in a team of 4 to develop a movie recommender
              application. The application utilizes a database of movies that are organized into categories and subcategories 
              to represent their genres and subgenres respectively. 
            </p>
            <hr />
            <p>
              <em className="proj-title">C$50 Final Project</em>
              <br/>
              As part of Harvard's CS50 course, for my final project, I worked on C$50 Finance.
              C$50 Finance is a comprehensive web application designed to help users manage their stock investments 
              and personal finances efficiently. 
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectInfo key={index} {...project} />
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