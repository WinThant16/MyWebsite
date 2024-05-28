import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cpplogo from "../assets/img/cpp_logo.png";
import pythonlogo from "../assets/img/python-logo.png";
import rustlogo from "../assets/img/rust-logo-blk.svg";
import javascriptlogo from "../assets/img/JavaScript-logo.png";
import htmllogo from "../assets/img/HTML-logo.png";
import csslogo from "../assets/img/CSS3-logo.png";
import reactlogo from "../assets/img/React-icon.png";
import nodelogo from "../assets/img/jsIconGreen.svg";
import expresslogo from "../assets/img/expressjs-logo.png";
import pysparklogo from "../assets/img/pyspark-logo.png";
import djangologo from "../assets/img/django-logo.png";
import bootstraplogo from "../assets/img/bootstrap-logo.svg";
import mysqllogo from "../assets/img/mysql-logo.svg";
import postgrelogo from "../assets/img/PostgreSQL-logo.png";
import mongodblogo from "../assets/img/mongodb-logo.svg";
import sqlitelogo from "../assets/img/sqlite-logo.svg";
import gitlogo from "../assets/img/git-logo.png";
import githublogo from "../assets/img/github-logo.png";
import gitlablogo from "../assets/img/gitlab-logo.svg";
import githubactionslogo from "../assets/img/githubactions-logo.png";
import vscodelogo from "../assets/img/vscode-logo.png";
import microsoftazurelogo from "../assets/img/microsoftazure-logo.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (   
    
    <section className="skill" id="skills">
      <br/>
      <br/>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx-background">
              <h2><span className="tagline">Technical Skills</span></h2>
              <hr/>
              <h3>Languages</h3>
              <hr/>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
                autoPlay={true} 
                autoPlaySpeed={6000}
                arrows={true}
              >
                <div className="item">
                  <img src={cpplogo} alt="logo for c++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={pythonlogo} alt="logo for python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={rustlogo} alt="logo for rust" />
                  <h5>Rust</h5>
                </div>
                <div className="item">
                  <img src={javascriptlogo} alt="logo for javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={htmllogo} alt="logo for html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={csslogo} alt="logo for css" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
              <hr/>
              
              <h3>Frameworks and Libraries</h3>
              <hr/>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
                autoPlay={true} 
                autoPlaySpeed={6500}
                arrows={true}
              >
                <div className="item">
                  <img src={reactlogo} alt="logo for react" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={nodelogo} alt="logo for node" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={expresslogo} alt="logo for express" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={bootstraplogo} alt="logo for bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={pysparklogo} alt="logo for pyspark"/>
                  <h5>Pyspark</h5>
                </div>
                <div className="item">
                  <img src={djangologo} alt="logo for django"/>
                  <h5>Django</h5>
                </div>
              </Carousel>

              <hr/>
              <h3>Development Tools and Platforms</h3>
              <hr/>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
                autoPlay={true} 
                autoPlaySpeed={6750}
                arrows={true}
              >
                <div className="item">
                  <img src={gitlogo} alt="logo for git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={githublogo} alt="logo for github" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={gitlablogo} alt="logo for gitlab" />
                  <h5>Gitlab</h5>
                </div>
                <div className="item">
                  <img src={githubactionslogo} alt="logo for githubactions"/>
                  <h5>Github Actions</h5>
                </div>
                <div className="item">
                  <img src={vscodelogo} alt="logo for vscode" />
                  <h5>Virtual Studio Code (VSCode)</h5>
                </div>
                <div className="item">
                  <img src={microsoftazurelogo} alt="logo for msazure"/>
                  <h5>Microsoft Azure</h5>
                </div>
              </Carousel>


              <hr/>
              <h3>Database Management</h3>
              <hr/>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
                autoPlay={true} 
                autoPlaySpeed={7000}
                arrows={true}
              >
                <div className="item">
                  <img src={mysqllogo} alt="logo for mysql" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={postgrelogo} alt="logo for postgre" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={mongodblogo} alt="logo for mongodb" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sqlitelogo} alt="logo for sqlite" />
                  <h5>SQLite</h5>
                </div>
              </Carousel>
            </div>
            
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="color gradient" /> */}
    </section>
  )
}
