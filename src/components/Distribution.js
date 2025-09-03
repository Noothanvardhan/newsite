import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'
const Distribution = () => {
  return (
    <div><section className='distribution-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>DISTRIBUTION SERVICES</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Our Distribution Logistics Services ensure that goods move efficiently from warehouses to retailers, distributors, and end customers. With streamlined processes, optimized routes, and advanced tracking systems, we guarantee timely deliveries, reduced costs, and complete visibility across the supply chain.</b></p>
        <p className='text-left text-justify text-white'><b>From warehousing to final delivery, our Distribution Logistics Services are designed to simplify your operations. We manage inventory, coordinate shipments, and optimize distribution networks so that your products reach the right place, at the right time, every time. </b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Intelligent Distribution Networks</h2>
        <p className='text-center text-white mt-4'><b>Smart, scalable, and technology-driven logistics services that streamline supply chains and ensure reliable delivery.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Order Fulfillment</h5>
            <h6 className='text-white'>Accuracy from start to finish</h6>
            <p className='text-white'>From order processing to packaging, our fulfillment services ensure that every product reaches customers correctly and on time, enhancing satisfaction and trust.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Transportation Management</h5>
            <h6 className='text-white'>Smarter routes, faster deliveries</h6>
            <p className='text-white'>With optimized route planning and reliable fleets, we manage transportation efficiently, reducing delivery times and ensuring cost-effective movement of goods.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>Last-Mile Delivery</h5>
            <h6 className='text-white'>Connecting you to customers</h6>
            <p className='text-white'>Our last-mile delivery solutions focus on timely, accurate, and customer-friendly service, bridging the final gap between businesses and their customers.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>Inventory Management</h5>
            <h6 className='text-white'>Control and optimize stock</h6>
            <p className='text-white'>Our inventory management solutions provide real-time visibility of stock levels, reduce wastage, and streamline replenishment, ensuring that your supply chain runs smoothly and efficiently.</p>
          
        </div>
        </Col>
        </Row>
      </Container></div>
  )
}

export default Distribution