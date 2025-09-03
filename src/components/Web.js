import React from 'react'
import { useEffect } from 'react';
import { Container , Row ,Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Web = () => {

  useEffect(() => {
          Aos.init({
            duration: 1000, // animation duration
            once: false,     // whether animation should happen only once
          });
        }, []);
  return (
    <div>
      <section className='web-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>WEB DEVELOPMENT SERVICES</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Our web development services focus on creating powerful, user-friendly, and scalable digital solutions that help businesses succeed online. From designing visually appealing interfaces to building robust backends, we combine creativity with technology to deliver websites and applications that truly stand out. We specialize in developing responsive websites that look and work seamlessly across devices, ensuring your customers always have a smooth experience whether they are on desktop, tablet, or mobile.</b></p>
        <p className='text-left text-justify text-white'><b>With expertise in modern frameworks and programming languages, we design and build custom solutions that fit your unique business requirements. Whether it’s a corporate website, an e-commerce platform, or a complex web application, we ensure that performance, security, and usability remain at the core. Our team also focuses on SEO-friendly development, fast load times, and integration with third-party systems to maximize the effectiveness of your online presence.</b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Building the Future of Your Digital Presence</h2>
        <p className='text-center text-white mt-4'><b>We deliver complete end-to-end web solutions, from design and development to deployment and ongoing support.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Ongoing Support & Maintenance</h5>
            <h6 className='text-white'>Built for Reliability</h6>
            <p className='text-white'>We don’t just build websites—we keep them running at their best. Our support and maintenance services include regular updates, security patches, bug fixes, and performance improvements. With 24/7 monitoring and responsive assistance, we make sure your website or application stays secure, up to date, and ready to support your business growth without interruptions.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Scalable Web Applications</h5>
            <h6 className='text-white'>Built for Growth</h6>
            <p className='text-white'>We build powerful web applications designed to grow with your business. Our solutions handle increasing users, data, and features without compromising speed or security. Whether you’re a startup looking to launch or an enterprise expanding globally, we deliver applications that adapt to your evolving needs while ensuring reliability, performance, and seamless user experiences.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>E-Commerce Solutions</h5>
            <h6 className='text-white'>Built for Sales</h6>
            <p className='text-white'>We design and develop secure, user-friendly online stores that help you reach more customers and increase sales. Our e-commerce platforms include smooth navigation, powerful product management, and safe payment integrations. With mobile-ready designs and optimized checkout flows, we ensure a seamless shopping experience that keeps your customers coming back.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>Full-Stack Development</h5>
            <h6 className='text-white'>Built for Performance</h6>
            <p className='text-white'>Our full-stack expertise covers both frontend and backend, giving you complete solutions under one roof. From intuitive interfaces to robust server-side logic and databases, we build applications that are fast, scalable, and secure. By managing the entire development process, we ensure smooth integration, strong performance, and a unified digital experience tailored to your business.</p>
          
        </div>
        </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Web