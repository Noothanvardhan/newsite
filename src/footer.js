import React from "react";
import { useEffect } from "react";

import { HashLink } from "react-router-hash-link";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#e3a127",
  };

  
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const links = [
    { name: "Home", to: "/#top" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/about#sec1" },
    
    { name: "Contact Us", to: "/contact" },
  ];

  const services = [
    { name: "Web Development", to: '/about#sec1' },
    { name: "Ground Transpotation", to: '/about#sec1' },
    { name: "Cloud Solutions", to: '/about#sec1' },
    { name: "Distribution", to: '/about#sec1' },
    
    { name: "Software Development", to: '/about#sec1' },
    { name: "Cloud Application Development", to: '/about#sec1' },
    { name: "Warehouse", to: '/about#sec1' },
    { name: "App Development", to: '/about#sec1' },
  ];
   useEffect(() => {
        Aos.init({
          duration: 1000, // animation duration
          once: false,     // whether animation should happen only once
        });
      }, []);

  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    data-aos='fade-up' data-aos-offset='200px'>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 40 }}>
        {/* Main heading */}
        <div style={{ flex: "1 1 200px" }}>
          <h5 style={{ color: "#e3a127", fontSize: "1.5rem", marginBottom: 20 }}>
            MALTESE SHIH INTERNATIONAL GLOBAL VENTURES PRIVATE LIMITED
          </h5>
          <address style={{ fontStyle: "normal", lineHeight: 1.6 }}>
            <FmdGoodOutlinedIcon/> OFFICE NO. 304, FLOOR-3, PLOT 507/509, SONA CHAMBERS, CHIRA BAZAR, KALBADEVI, MUMBAI, MUMBAI, MAHARASHTRA, 400002
          </address>
          <p style={{ marginTop: 20 }}>
            <CallOutlinedIcon/>Phone: <a href="tel:+1234567890" style={{ color: "#fff", textDecoration: "none" }}>+91 9358431988</a><br />
            <EmailOutlinedIcon/>Email: <a href="mailto:info@instiparty.com" style={{ color: "#fff", textDecoration: "none" }}>malteseshihinternationalglobal@gmail.com</a>
          </p>
        </div>

        {/* Links column */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ color: "#e3a127", marginBottom: 15 }}>Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {links.map(({ name, to }, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                <HashLink
                  to={to}
                  style={hoveredLink === name ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                  onMouseEnter={() => setHoveredLink(name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ color: "#e3a127", marginBottom: 15 }}>Services</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {services.map(({name, to}, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                <HashLink
                  to = {to}
                  style={hoveredLink === name ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                  onMouseEnter={() => setHoveredLink(name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
