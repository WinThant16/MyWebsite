import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg';
// import facebookIcon from '../assets/img/nav-icon2.svg';
// import instagramIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubicon.svg';
import gmailIcon from '../assets/img/gmail-icon.svg';
import Resume from '../Resume 1072024.pdf';

export const NavBar = () => {
	// default, set to home
	const [activeLink, setActiveLink] = useState('home');
	// initial state set to false, so that we can use effect when user scrolls
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}
		window.addEventListener("scroll", onScroll);
		
		// remove event listener when component gets removed from dom
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}

	return (
		<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
			{/* <span className="navbar-text">
				<Nav className="ms-auto">
					<Nav.Link href="#home" className={activeLink === 'socials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Socials</Nav.Link>
				</Nav>
				<div className="social-icon">
					<a href="https://www.facebook.com/WinThant.TinHan" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="" /></a>
					<a href="https://www.instagram.com/_win_thant/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="" /></a>
					<a href="https://github.com/WinThant16" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a>
					<a href="https://www.linkedin.com/in/win-thant-tin-han-319b63207/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="" /></a>
					<a href="mailto:winthant1601@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmailIcon} alt= "" /></a>
				</div>
			</span> */}
			<Navbar.Toggle aria-controls="basic-navbar-nav">
				<span className="navbar-toggler-icon"></span>
			</Navbar.Toggle>
			<span>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
				<Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
				<Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
				<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
				<Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
				<Nav.Link href="#footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footer')}>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</span>
			<span className="navbar-text">
				<a href={Resume} target="_blank" rel="noopener noreferrer"><button className="vvd"><span>View Resume</span></button></a>
			</span>
		</Container>
		</Navbar>
	)
}