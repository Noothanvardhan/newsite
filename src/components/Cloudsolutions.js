import React from 'react'
import { useEffect } from 'react';
import { Container , Row ,Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Cloudsolutions = () => {

  useEffect(() => {
          Aos.init({
            duration: 1000, // animation duration
            once: false,     // whether animation should happen only once
          });
        }, []);
  return (
    <div>
      <section className='clouds-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>CLOUD SOLUTION SERVICES</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Our Cloud Solutions are designed to help businesses innovate faster, scale smarter, and operate more securely in an ever-changing digital world. By leveraging cloud infrastructure, you can reduce IT costs, increase agility, and enable global collaboration. Whether you need computing power, storage, or enterprise-grade applications, our services provide the reliability and performance your business requires.</b></p>
        <p className='text-left text-justify text-white'><b>Unlock the full potential of your business with Cloud Solutions that grow as you do. From seamless data storage and backup to intelligent collaboration tools and powerful computing, we make your digital transformation smooth and secure. With built-in scalability, you’ll always have the resources you need—exactly when you need them.</b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Future-Ready Digital Infrastructure</h2>
        <p className='text-center text-white mt-4'><b>Scalable and secure cloud-powered services designed to accelerate innovation and business transformation.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Next-Gen Cloud Services</h5>
            <h6 className='text-white'>Powering modern businesses</h6>
            <p className='text-white'>Deliver high-performance computing, real-time collaboration, and secure storage designed to meet modern business demands. Our solutions scale effortlessly with your growth, ensuring uninterrupted performance.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Smart Cloud Solutions</h5>
            <h6 className='text-white'>Simplify and streamline</h6>
            <p className='text-white'>Simplify IT management and reduce costs with innovative cloud platforms that streamline operations, improve accessibility, and boost efficiency for organizations of all sizes.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>Enterprise Cloud Solutions</h5>
            <h6 className='text-white'>Built for scale and security</h6>
            <p className='text-white'>Built for enterprises that require robust security and performance, these services optimize critical workloads, support hybrid environments, and provide a reliable foundation for innovation.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>Secure & Scalable Cloud</h5>
            <h6 className='text-white'>Protection with flexibility</h6>
            <p className='text-white'>Safeguard data with advanced protection and compliance standards while maintaining the ability to scale resources up or down based on evolving business needs.</p>
          
        </div>
        </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Cloudsolutions