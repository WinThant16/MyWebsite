import { Navbar, Container, Nav } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg';
// import facebookIcon from '../assets/img/nav-icon2.svg';
// import instagramIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubicon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';

export const Footer = () => {
	return (
		<section className="footer" id="footer">
			<Container>
        		<Row>
					<div className="social-icon">
						{/* <a href="https://www.facebook.com/WinThant.TinHan" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="" /></a> */}
						{/* <a href="https://www.instagram.com/_win_thant/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="" /></a> */}
						<a href="https://github.com/WinThant16" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a>
						<a href="https://www.linkedin.com/in/win-thant-tin-han-319b63207/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="" /></a>
						<a href="mailto:winthant1601@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmailIcon} alt= "" /></a>
					</div>
				</Row>
			</Container>
		</section>
	)
  }