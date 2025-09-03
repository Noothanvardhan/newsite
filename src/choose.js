import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import {Container} from 'react-bootstrap'
import ModeStandbyOutlinedIcon  from '@mui/icons-material/ModeStandbyOutlined'

const Choose = () => {
  useEffect(() =>
    {AOS.init({ 
     duration : '1000',
     once : 'true'
     });
    },[]);
  return (
   
        <Container>
       <div className=' mt-4'>
          <h2 className='text-center mt-4' style={{color :"#e3a127"}}>Why Choose us</h2>
          <div className='blur-container d-flex flex-column justify-content-center align-items-center mt-4'>
            
          <p><ModeStandbyOutlinedIcon />Empower your business with expert-driven, custom IT solutions.</p>
          
<p data-aos = 'zoom-in' data-aos-delay = '100'><ModeStandbyOutlinedIcon /> seamless tech support that keeps your operations running smoothly.</p>
<p data-aos = 'zoom-in' data-aos-delay = '200'><ModeStandbyOutlinedIcon />Stay ahead with the latest technologies and innovative tools.</p>
<p data-aos = 'zoom-in' data-aos-delay = '300'><ModeStandbyOutlinedIcon />Protect your data with enterprise-grade security and compliance.</p>
<p data-aos = 'zoom-in' data-aos-delay = '400'><ModeStandbyOutlinedIcon />Scale confidently with flexible services built for growth.</p>
<p data-aos = 'zoom-in' data-aos-delay = '500'><ModeStandbyOutlinedIcon />Focus on your vision — we will handle the tech behind it.

</p>

</div>
        </div>
</Container>
  )
}

export default Choose