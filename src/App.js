import { Routes , Route } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Preloader from './components/Preloader'
import Home from './home'
import IT from './components/IT'
import CustomNavbar from './navbar'
import C from './c'
 import Footer from './footer'
 import AOSController from './components/Scrolltop'
 import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 
export default function App () {

const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);



   return (
     <>
      <AOSController />
      {loading ? (<Preloader/>
      ):(<div>
      <CustomNavbar />
      <Routes>
        <Route path ='/' element ={<Home />} />
        <Route path ='/about' element = {<IT/>}/>
        <Route path ='/contact' element = {<c/>}/>
        
       
      </Routes>
      <C/>
      <Footer/>
      </div>)}
     </>
   )
 }
