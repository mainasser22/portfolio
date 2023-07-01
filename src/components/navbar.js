import { React, useState, useEffect } from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import mLogo from "../imeges/img/mLogo2.png";
import navicon1  from "../imeges/img/nav-icon1.svg";
import navicon2  from "../imeges/img/nav-icon2.svg";
import navicon3 from "../imeges/img/nav-icon3.svg";

export const NavBar = () => {
    const [scrolled, setSrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setSrolled(true);
            }
            else {
                setSrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return()=>window.removeEventListener("scroll", onScroll);
    })
    
    const onUpdatedLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"> <img src={mLogo} alt="Logo"/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink==='home' ? 'active link' : 'link' } onClick={()=> onUpdatedLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink==='skills' ? 'active-link' : 'link' } onClick={()=> onUpdatedLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink==='projects' ? 'active-link' : 'link' } onClick={()=> onUpdatedLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-icons">
                        <div className="social">
                            <a href="#" ><img src={navicon1} alt=""/></a>
                            <a href="#" ><img src={navicon2} alt=""/></a>
                            <a href="#" ><img src={navicon3} alt=""/></a>
                        </div>
                        <button className="icon-text" onClick={()=> console.log('gcg')}>Let's Connect</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}