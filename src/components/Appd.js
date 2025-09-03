import React from 'react'
import { useEffect } from 'react';
import { Container , Row ,Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Appd = () => {

  useEffect(() => {
          Aos.init({
            duration: 1000, // animation duration
            once: false,     // whether animation should happen only once
          });
        }, []);
  return (
    <div>
      <section className='app-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>APP DEVELOPMENT SERVICES</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Our App Development Services help businesses bring ideas to life with innovative, user-friendly, and high-performing applications. We design and develop apps that work seamlessly across platforms, combining modern design, advanced technology, and smooth functionality.</b></p>
        <p className='text-left text-justify text-white'><b>From mobile to enterprise-level applications, our solutions are built to enhance customer engagement, streamline operations, and provide measurable business value. With continuous support and updates, we ensure your app grows alongside your business needs.</b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Smart App Solutions</h2>
        <p className='text-center text-white mt-4'><b>Innovative applications tailored for performance, growth, and user experience.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Mobile App Development</h5>
            <h6 className='text-white'>Engage customers on the go</h6>
            <p className='text-white'>We create feature-rich mobile apps for iOS and Android, designed for intuitive use, smooth performance, and meaningful customer engagement.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Enterprise App Solutions</h5>
            <h6 className='text-white'>Powering business efficiency</h6>
            <p className='text-white'>We design enterprise-grade applications that automate workflows, improve collaboration, and streamline complex operations for large organizations.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>Hybrid App Development</h5>
            <h6 className='text-white'>One build, multiple platforms</h6>
            <p className='text-white'>Hybrid apps combine the power of web and mobile, reducing costs and development time while ensuring wide reach across platforms.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>App Maintenance & Upgrades</h5>
            <h6 className='text-white'>Keeping your apps future-ready</h6>
            <p className='text-white'>Beyond development, we provide continuous maintenance, feature updates, and security enhancements to ensure long-term reliability.</p>
          
        </div>
        </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Appd