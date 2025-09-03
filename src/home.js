import React from 'react'

import { HashLink } from 'react-router-hash-link';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import {Container , Card , Row , Col , Button , Carousel}  from 'react-bootstrap'
import gif1 from './images/bggif.gif'

import {AppWindow ,  MoveRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "CEO, TechWave",
    feedback:
      "Their IT services streamlined our operations with secure cloud solutions and excellent support.",
  },
  {
    name: "Priya Sharma",
    role: "Logistics Head, CargoPlus",
    feedback:
      "Reliable logistics and on-time delivery have helped us build stronger trust with our clients.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO, FinEdge",
    feedback:
      "Professional IT support with quick response and innovative solutions. Highly recommended.",
  },
  {
    name: "Sneha Iyer",
    role: "Manager, TransGlobe",
    feedback:
      "Their logistics network is efficient and cost-effective, ensuring smooth supply chain management.",
  },
  {
    name: "Vikram Singh",
    role: "Founder, EcomFlow",
    feedback:
      "Excellent IT solutions for e-commerce. Helped us scale rapidly with automation.",
  },
  {
    name: "Anita Verma",
    role: "Director, FastMove Logistics",
    feedback:
      "On-time delivery and well-organized warehousing solutions made a huge difference in our business.",
  },
  {
    name: "Rahul Joshi",
    role: "CEO, SmartBiz",
    feedback:
      "Their IT expertise gave us secure systems and smooth integration across departments.",
  },
  {
    name: "Meera Nair",
    role: "Operations, QuickShip",
    feedback:
      "Top-class logistics with excellent customer support. Truly dependable.",
  },
];


 
const Home = () => {
     useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once
    });
  }, []);

   

  return (
    <div>
      <div className='header ' id='top' >
     <p data-aos = 'slide-right'  ><b>WELCOME TO</b></p>
     <h1 data-aos = 'slide-right'  >MALTESE SHIH INTERNATIONAL GLOBAL VENTURES</h1>
     <h1 data-aos = 'slide-right'  >PRIVATE LIMITED</h1>
     </div>
 <Container className='my-5'  data-aos ='fade-up' data-aos-delay='100'>
  <h4 className='text-center  my-5'  style={{color :'#e3a127'}}>PROVEN SUCCESS WITH ALIGN'S WORLD CLASS PEOPLE, PROCESS & TOOLS</h4>
 <Row className='justify-content-center px-3'>
<Col md = {6} lg ={5} data-aos ='fade-right' data-aos-delay='200' data-aos-offset = '200px' >
<h2 className='text-left ' style={{color :'#e3a127'}}>ABOUT US</h2>
<h6 className='text-left text-white'style={{lineHeight :'30px'}}>We are a dynamic company specializing in both Information Technology and Logistics solutions. Our IT services focus on delivering innovative software, digital transformation, and secure technology solutions to help businesses grow in the digital era.On the logistics side, we provide efficient supply chain management, smart transportation, and seamless distribution services to ensure goods reach their destination on time and with reliability.</h6>
<h6 className='text-left text-white' style={{lineHeight :'30px'}}>By combining technology with logistics expertise, we create end-to-end solutions that streamline operations, reduce costs, and drive business success.</h6>
<HashLink to='/about'><Button className = 'button'>Read More</Button></HashLink>
</Col>
<Col md = {6} data-aos='zoom-in' data-aos-delay = '500' data-aos-offset = '200px' className='py-5'>
<img src={gif1} alt = 'about' className='img-fluid' style={{width :'100%',height : 'auto' , objectFit :'cover',  borderRadius:'20px'}} />
</Col>
 </Row>
 </Container>
 <Container data-aos='fade-up' data-aos-delay='100' data-aos-offset ='200px' id='service'>
 <h2 className='text-center' style={{color :'#e3a127'}}>EXPLORE OUR</h2>
 <h2 className='text-center'style={{color :'#e3a127'}}>PROFESSIONAL & MANAGED SERVICES</h2>
 <p className='text-center text-white'>From strategy to delivery, our winning combination of comprehensive IT solutions, logistic services and experienced professionals </p>
 <p className='text-center text-white'>unite to accelerate change from the data center to the workplace and into the cloud</p>

 <Card className='service-card'data-aos='fade-right' dats-aos-delay='400'>
  <Card.Body>
    <AppWindow  size={50}/>
    <Card.Title>Here we Are </Card.Title>
    <Card.Text>As technology continues to evolve, businesses become increasingly connected and dependent on complex digital systems. This growing reliance has made it necessary to manage IT resources effectively, and that’s where IT logistics management plays a crucial role. From coordinating hardware deliveries to managing software solutions and overseeing the full supply chain of tech products, IT logistics is a key component in maintaining smooth operations. </Card.Text>
    <HashLink to='/about#sec1'><Button className = 'button'>Read More</Button></HashLink>
  </Card.Body>
 </Card>

 </Container>
 <div className='trust-section' data-aos ='fade-up' data-aos-offset ='200px'>
  <p data-aos ='fade-right' className='text-left'><b>TRUST</b></p>
  <h4 data-aos ='fade-right' className='text-left'>We're built on relationships.</h4>
  <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  We have delivered services across industries for over three decades. </b></p>
  <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Our people, process, and tools have transformed technology for the world's top companies. </b></p>
  <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  We have achieved universal respect by nurturing relationships on a global scale.</b></p>
 </div>
<Container className='mt-5 my-5' data-aos='fade-up'>
  <h1 className='text-center my-5' style={{color :'#e3a127'}}>WHAT OUR CLIENTS SAY</h1>
  <Carousel data-aos='fade-right' data-aos-delay ='200'>
    {testimonials.map((t,i) =>(
      
     <Carousel.Item key={i}>
        <div className='key-card d-flex flex-column justify-content-center align-items-center' >
          
            <h2 className='text-center text-white'>{t.name}</h2>
            <h5 className='text-center text-white'>{t.role}</h5>
            <p className='text-center text-white'><b>{t.feedback}</b></p>
          
        </div>
      </Carousel.Item>
    
  ))}
  </Carousel>
</Container>

<section className='result-section my-5' data-aos = 'fade-up'>
  
  <h4 data-aos ='fade-right' className='text-left'>Real Impact</h4>
  <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Optimizing technology and logistics processes to save time and reduce costs. </b></p>
  <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Ensuring consistent, on-time results across IT solutions and logistics operations.</b></p>
  <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Helping businesses scale with measurable improvements in performance and customer satisfaction.</b></p>
</section>

    </div>
    
  )

}


export default Home