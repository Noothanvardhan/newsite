import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'
const Ground = () => {
  return (
    <div><section className='ground-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>GROUND TRANSPOTATION</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Ground transportation services refer to the movement of people or goods from one place to another using vehicles that operate on the ground, such as cars, buses, trucks, and trains. These services are a crucial part of the logistics industry, as they enable the efficient and timely transportation of goods and people over short and long distances. Ground transportation services can be categorized into different types, including public transportation, private transportation, and freight transportation.</b></p>
        <p className='text-left text-justify text-white'><b> Furthermore, the use of alternative fuels and electric vehicles is becoming more prevalent in the ground transportation industry, which is helping to reduce carbon emissions and promote sustainability. In addition, ground transportation services are being integrated with other modes of transportation, such as air and sea transportation, to provide seamless and efficient transportation solutions. </b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>End-to-End Logistics</h2>
        <p className='text-center text-white mt-4'><b>Streamlined logistics designed to keep your business moving.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Airport Transfers</h5>
            <h6 className='text-white'>Hassle-Free Ridesy</h6>
            <p className='text-white'>Enjoy stress-free airport pickups and drop-offs with timely service, comfortable seating, and assistance with luggage. Perfect for solo travelers, families, and business passengers who value reliability.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Corporate Travel</h5>
            <h6 className='text-white'>Professional Service</h6>
            <p className='text-white'>Travel in comfort and style for business meetings, conferences, and official events. Our service ensures punctuality, privacy, and a smooth experience for professionals on the move.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>City Rides</h5>
            <h6 className='text-white'>Local Travel Made Easy</h6>
            <p className='text-white'>Whether you’re heading to the office, shopping, or exploring the city, our quick and reliable rides make local travel simple, safe, and cost-effective. Available anytime you need to get around.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>Long-Distance Trips</h5>
            <h6 className='text-white'>Safe & Comfortable</h6>
            <p className='text-white'>Experience hassle-free intercity travel with spacious vehicles, skilled drivers, and modern amenities. Ideal for weekend getaways, family visits, or business journeys outside the city.</p>
          
        </div>
        </Col>
        </Row>
      </Container></div>
  )
}

export default Ground