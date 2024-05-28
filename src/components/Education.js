// Import necessary components from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Define the Education component
export const Education = () => {

  // Render the Education component
  return (
    <section className="education" id="education">
      <Container>
        <Row className="align-items-center">
          <Col>
		  	<hr />
            <h1><span className="tagline">Education</span></h1>
            <h2>University of California Riverside</h2>
            <p>
              <strong>Bachelor of Science in Computer Science (Honors)</strong><br />
              2021 - 2025<br />
              Current GPA: 3.87<br />
              Chancellor’s Honors List (2022, 2023)
            </p>
            <hr />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
