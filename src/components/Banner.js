// Import necessary components and icons from react-bootstrap and react-bootstrap-icons
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
// Import the header image from the assets folder
import headerImg from "../assets/img/IMG_7727.jpg";

// Define the Banner component
export const Banner = () => {
  // Declare state variables for loop number, deletion status, text, and typing speed
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Array of strings to be rotated in the typing effect
  const toRotate = ["CS Undergrad @ UCR.", "Software Engineer."];
  
  // State variable for the currently displayed text
  const [text, setText] = useState('');
  
  // State variable for the typing speed, with an initial random value
  const [delta, setDelta] = useState(100);
  
  // Duration to pause when a full text is displayed
  const period = 2000;

  // useEffect hook to set up an interval for the typing effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Clear the interval when the component is unmounted or when delta changes
    return () => { clearInterval(ticker) };
  }, [text]);

  // Function to handle the typing effect
  const tick = () => {
    let i = loopNum % toRotate.length; // Calculate the current index in the toRotate array
    let fullText = toRotate[i]; // Get the full text for the current index
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // Update the text based on whether it is deleting or typing

    setText(updatedText); // Set the updated text

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 4); // Increase the typing speed when deleting
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Start deleting when the full text is displayed
      setDelta(period); // Set the delay before starting to delete
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false); // Start typing the next text when the current text is fully deleted
      setLoopNum(loopNum + 1); // Move to the next text in the array
      setDelta(100); // Reset the typing speed
    }
  };

  // Render the Banner component
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            {/* Display the header image */}
            <img src={headerImg} alt="Header"/>
          </Col>
          <Col xs={0} md={6} xl={7}>
            <h1><span className="tagline">Hi, {`I'm Win.`}</span></h1>
            {/* <h1>{`I'm Win.`}</h1> */}
            <h1><span className="wrap">{text}</span></h1>
            
            <p>
            <hr/>
            <em>A little background about myself:</em>
            <br/>
            I am originally from Yangon, Burma. 
            <br/>
            I am currently a Computer Science Undergrad at the University of California Riverside.
            I love to code - and I am particularly interested in AI/ML development & research.
            I also dabble in Database Management and Web Development.
            <br/>
            I am also working on a Capstone Project as part of the University Honors program, as a proud member of <a href="https://sites.google.com/ucr.edu/bedlab/people" target="_blank" rel="noopener noreferrer">BEDLab</a> at UCR.
            <br/>
            </p>
            
            {/* Button to connect, with an icon and onClick event */}
            {/* <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button> */}
          </Col>

          
          <Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
