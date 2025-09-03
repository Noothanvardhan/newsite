import React from 'react'
import { useEffect } from 'react';
import { Container , Row ,Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Sofware = () => {

  useEffect(() => {
          Aos.init({
            duration: 1000, // animation duration
            once: false,     // whether animation should happen only once
          });
        }, []);
  return (
    <div>
      <section className='software-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>SOFTWARE DEVELOPMENT SERVICES</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Our Software Development Services empower businesses with custom-built solutions tailored to their unique needs. From concept to deployment, we deliver scalable, secure, and high-performing applications that drive digital transformation. With expertise across web, mobile, and enterprise systems, we combine innovation, agility, and cutting-edge technology to create software that accelerates business growth and enhances user experience.</b></p>
        <p className='text-left text-justify text-white'><b>We specialize in creating software that solves real business challenges. Whether you need a web app, mobile solution, or enterprise-grade platform, our development process ensures user-friendly interfaces, robust functionality, and seamless performance. By combining innovation with technical excellence, we build software that adds value and creates lasting impact.</b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Custom & Enterprise Software Solutions</h2>
        <p className='text-center text-white mt-4'><b>Transforming ideas into reliable digital products that enhance efficiency and performance.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Custom Software Development</h5>
            <h6 className='text-white'>Tailored solutions for your business</h6>
            <p className='text-white'>We design and build software specifically aligned with your goals, offering flexibility, scalability, and seamless integration with existing systems.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Enterprise Software Solutions</h5>
            <h6 className='text-white'>Powering large-scale operations</h6>
            <p className='text-white'>From ERP systems to workflow automation, our enterprise-grade software boosts productivity, enhances collaboration, and streamlines complex processes.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>Software Maintenance & Support</h5>
            <h6 className='text-white'>Reliable, ongoing assistance</h6>
            <p className='text-white'>Beyond development, we provide continuous maintenance, updates, and support to ensure your software remains secure, efficient, and up to date</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>QA & Testing Services</h5>
            <h6 className='text-white'>Ensuring quality at every step</h6>
            <p className='text-white'>Our dedicated QA and testing services guarantee bug-free, reliable, and high-performing software through rigorous functional, performance, and security testing.</p>
          
        </div>
        </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Sofware