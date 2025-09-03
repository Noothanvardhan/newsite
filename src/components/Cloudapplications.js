import React from 'react'
import { useEffect } from 'react';
import { Container , Row ,Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

const CloudApplications = () => {

  useEffect(() => {
          Aos.init({
            duration: 1000, // animation duration
            once: false,     // whether animation should happen only once
          });
        }, []);
  return (
    <div>
      <section className='clouda-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>CLOUD APPLICATION DEVELOPMENT</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Cloud Application Services empower businesses to design, develop, deploy, and manage applications in the cloud environment with unmatched scalability and flexibility. Unlike traditional software, cloud applications run on distributed infrastructure, ensuring high availability, reduced costs, and seamless user experiences.Instantly scale applications up or down based on business demand without additional hardware investments.</b></p>
        <p className='text-left text-justify text-white'><b>Built-in data encryption, access controls, and compliance with global standards.

Continuous Innovation: Rapid adoption of AI, ML, analytics, and IoT integrations through cloud platforms.Access applications securely from anywhere, across devices, enabling remote and hybrid</b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Digital Cloud Innovations</h2>
        <p className='text-center text-white mt-4'><b>Designing, modernizing, and integrating cloud-powered applications that are scalable, secure, and future-ready.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>SaaS Application Development</h5>
            <h6 className='text-white'>Software on demand</h6>
            <p className='text-white'>We design and deliver scalable Software-as-a-Service (SaaS) applications that reduce infrastructure costs and provide businesses with secure, subscription-based solutions accessible anytime, anywhere</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Cloud-Native Applications</h5>
            <h6 className='text-white'>Built for the cloud</h6>
            <p className='text-white'>Our cloud-native apps are designed with microservices, containers, and serverless architecture, ensuring agility, high performance, and faster deployment cycles.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>Application Modernization</h5>
            <h6 className='text-white'>Upgrade legacy systems</h6>
            <p className='text-white'>Transform outdated applications into modern, cloud-ready solutions. We enhance scalability, improve performance, and integrate with advanced cloud technologies to future-proof your business.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>Cloud Integration Services</h5>
            <h6 className='text-white'>Connected business solutions</h6>
            <p className='text-white'>Enable smooth communication between cloud apps, on-premise systems, and third-party tools with our robust integration services, ensuring consistent workflows and data flow.</p>
          
        </div>
        </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default CloudApplications