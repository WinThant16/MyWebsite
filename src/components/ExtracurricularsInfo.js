import { Col } from "react-bootstrap";

export const ExtracurricularsInfo = ({ title, description, imgUrl, link }) => {
  return (
    <Col>
      <a href={link} target="_blank" rel="noopener noreferrer" className="extra-link">
        <div className="extra-imgbx">
          <img src={imgUrl} alt="thumbnail for project" />
          <div className="extra-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <div className="extra-title">
          <div className="extra-info">
            <h4>{title}</h4>
          </div>
        </div>
      </a>
    </Col>
  );
}
