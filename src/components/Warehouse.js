import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'
const Warehouse = () => {
  return (
    <div><section className='ware-section'data-aos=' fade-up' data-aos-offset ='300px' >
        <h3 className='text-center text-white'>MALTESE SHIH</h3>
        <h1  className='text-center text-white'>WAREHOUSE SERVICES</h1>

      </section> 
      <Container className='mt-5' data-aos='fade-left'>
        <h1 className='text-left' style={{color:'#e3a127'}}>THE</h1>
        <h1 className='text-left'style={{color:'#e3a127'}}><b>OVERVIEW</b></h1>
        <p className='text-left text-justify text-white'><b>Our warehousing services provide businesses with secure, efficient, and strategically managed storage solutions that keep supply chains running smoothly. From inventory management to distribution support, we ensure that products are stored safely, tracked accurately, and delivered on time. By integrating technology-driven systems, optimized layouts, and professional handling.</b></p>
        <p className='text-left text-justify text-white'><b>we help businesses reduce costs, improve efficiency, and gain real-time visibility into their goods. Whether you require short-term storage, long-term warehousing, or specialized handling for sensitive products, our solutions are designed to support your growth and adapt to changing demands. </b></p>
      </Container>
      <section className='mt-5 key-services' data-aos='fade-up'>
        <h2 className='text-center' style={{color:'#e3a127'}}>Smart Storage & Fulfillment</h2>
        <p className='text-center text-white mt-4'><b>Flexible and technology-driven warehouse solutions designed to scale with your business needs.</b></p>
      </section>
      <Container data-aos='fade-in' className='my-5'>
        <Row className='justify-content-center px-3 gy-3' >
          <Col md={3} sm={6} xs={12}>
        <div className='key-card' data-aos ='fade-left' data-aos-delay='100'>
          
            <h5 className='text-white'>Inventory Management</h5>
            <h6 className='text-white'>Real-time visibility and control</h6>
            <p className='text-white'>Our inventory systems track stock levels accurately, reduce errors, and streamline replenishment, ensuring your supply chain never misses a beat.</p>
          
        </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='300'>
          
            <h5 className='text-white'>Cold & Specialized Storage</h5>
            <h6 className='text-white'>Safe solutions for sensitive goods</h6>
            <p className='text-white'>We provide temperature-controlled and specialized storage for perishable, pharmaceutical, and high-value products, maintaining safety and compliance.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='500'>
          
            <h5 className='text-white'>Value-Added Services</h5>
            <h6 className='text-white'>Beyond basic storage</h6>
            <p className='text-white'>From labeling and kitting to repackaging and quality checks, we offer value-added services that make your warehousing more efficient and flexible.</p>
          
        </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
        <div className='key-card'  data-aos ='fade-left' data-aos-delay='700'>
          
            <h5 className='text-white'>Order Processing & Fulfillment</h5>
            <h6 className='text-white'>Accuracy from warehouse to customer</h6>
            <p className='text-white'>With streamlined order handling, packaging, and dispatch, we ensure products reach customers quickly, accurately, and cost-effectively.</p>
          
        </div>
        </Col>
        </Row>
      </Container></div>
  )
}

export default Warehouse