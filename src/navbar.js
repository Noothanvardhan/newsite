// src/components/Navbar.jsx
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import image from './images/MSLOGO.png'


const CustomNavbar = () => {
  const [ expanded , setExpanded ] = useState(false);
  const [ color , setColor ] =  useState(false)

 useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 70) {   // 👈 adjust this value
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    // run once when component mounts
    changeColor();

    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  return (
  
   
    <Navbar expand="lg" fixed='top' className={`custom-navbar ${color ? "navbar-bg" : ""}`} variant="dark" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-text">
        <img src={image} alt='logo' className='img-fluid'/>
          <h2 className="navbar-logo">MALTESE SHIH</h2>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-link-text" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-text" onClick={() => setExpanded(false)}>About Us</Nav.Link>

            <Nav.Link as={HashLink} to ='/about#sec1'   className="nav-link-text" onClick={() => setExpanded(false)}>Services
              
            </Nav.Link>

            
            <Nav.Link as={NavLink} to="/contact" className="nav-link-text" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        
   
    
  );
};

export default CustomNavbar;
