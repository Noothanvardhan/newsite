import React, { useEffect , useState } from 'react'
import { Container , Button} from 'react-bootstrap'
import { MoveRight } from 'lucide-react'
import Web from './Web'
import Cloudapplications from './Cloudapplications'
import Cloudsolutions from './Cloudsolutions'
import Sofware from './Sofware'
import Appd from './Appd'
import Ground from './Ground'
import Warehouse from './Warehouse'
import Distribution from './Distribution'
import Aos from 'aos'
import 'aos/dist/aos.css'

const IT = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
      // Scroll to hash if present after mount
      if (window.location.hash) {
        const el = document.getElementById(window.location.hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);

  const [selectedContent, setSelectedContent] = useState(1);

  const handleButtonClick = (contentId) => {
    setSelectedContent(contentId);
  }

  return (
    <div style={{width: '100vw', minHeight: '100vh', overflowX: 'hidden'}}>
      <section className='it-header' data-aos='fade-up'>
        <h1 data-aos ='fade-right' data-aos-delay='200'>ALL THE BENEFITS</h1>
        <h1 data-aos ='fade-right'data-aos-delay='300'>OF OUR VENTURES</h1>
        <p data-aos ='fade-right' data-aos-delay='400'>Scalable and secure solutions from the industries premier Managed Services Provider</p>
      </section>
      <Container fluid className='px-5 mt-5' data-aos='fade-left' data-aos-offset='100px'>
        <h2 className='text-left ' style={{color:'#e3a127'}}>Scalability</h2>
        <p className='text-left text-white text-justify'><b>Scalability in an IT logistics company refers to its ability to expand operations, adopt new technologies, and manage increasing demand without compromising efficiency or service quality. A scalable logistics provider can handle larger shipment volumes, integrate with new digital platforms, and adapt to market fluctuations seamlessly. This is achieved through automation, cloud-based solutions, data analytics, and flexible infrastructure that grows with the business.As markets evolve, scalability ensures companies can quickly adjust to seasonal spikes, global supply chain disruptions, or sudden growth in customer demand. It also allows businesses to expand into new regions without overextending resources. By investing in scalable systems, logistics companies future-proof their operations while delivering consistent value to clients.</b></p>
      </Container>
      <section className='it-result mt-5' data-aos ='fade-up'>
        <h2 data-aos ='fade-right' className='text-left'>Grow your business by partnering with an industry leader</h2>
        <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Flexible solutions designed by experts, built with the future in mind.  </b></p>
        <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Our history makes us credible. Our work keeps us competitive. Our people are our strength. </b></p>
        <p data-aos ='fade-right' className='text-left'><b><MoveRight size={16}/>  Whether you need to minimize overhead, modernize your workloads, accelerate change, or scale your business—we have you covered.</b></p>
      </section>
      <section data-aos='fade-up' id='sec1'>
        <h2 className='text-center mt-5 my-5' style={{color :'#e3a127'}}>SERVICES WE PROVIDE</h2>
        <p className='text-center text-white my-5'><b>We provide innovative IT solutions and reliable logistics services to help businesses grow efficiently and seamlessly.</b></p>
        <div className='services-btn-grp'>
          <Button className={`service-btn${selectedContent === 1 ? ' active' : ''}`}
     onClick={() => handleButtonClick(1)}>WEB DEVELOPMENT</Button>
          <Button className={`service-btn${selectedContent === 2 ? ' active' : ''}`}
     onClick={() => handleButtonClick(2)}>GROUND TRANSPORTATION</Button>
          <Button className={`service-btn${selectedContent === 3 ? ' active' : ''}`}
     onClick={() => handleButtonClick(3)}>CLOUD SOLUTIONS</Button>
          <Button className={`service-btn${selectedContent === 4 ? ' active' : ''}`}
     onClick={() => handleButtonClick(4)}>DISTRIBUTION</Button>
          <Button className={`service-btn${selectedContent === 5 ? ' active' : ''}`}
     onClick={() => handleButtonClick(5)}>SOFTWARE DEVELOPMENT</Button>
        </div>
        <div className='services-btn-grp'>
          <Button className={`service-btn${selectedContent === 6 ? ' active' : ''}`}
     onClick={() => handleButtonClick(6)}>CLOUD APPLICATION DEVELOPMENT</Button>
          <Button className={`service-btn${selectedContent === 7 ? ' active' : ''}`}
     onClick={() => handleButtonClick(7)}>WARE HOUSING</Button>
          <Button className={`service-btn${selectedContent === 8 ? ' active' : ''}`}
     onClick={() => handleButtonClick(8)}>APP DEVELOPMENT</Button>
        </div>
        <div>
          {selectedContent === 1 && <Web />}
          {selectedContent === 2 && <Ground />}
          {selectedContent === 3 && <Cloudsolutions />}
          {selectedContent === 4 && <Distribution />}
          {selectedContent === 5 && <Sofware />}
          {selectedContent === 6 && <Cloudapplications />}
          {selectedContent === 7 && <Warehouse />}
          {selectedContent === 8 && <Appd />}
        </div>
      </section>
    </div>
  )
}

export default IT