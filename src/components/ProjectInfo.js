import { Col } from "react-bootstrap";

export const ProjectInfo = ({ title, description, imgUrl, link }) => {
  return (
    <Col>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="thumbnail for project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <div className="proj-title">
          <div className="proj-info">
            <h4>{title}</h4>
          </div>
        </div>
      </a>
    </Col>
  );
}
