import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from'../pages/Services';
import Contact from'../pages/Contact';
import Header from '../layout/Header';
import Footer from '../layout/Footer'
import Index from '../pages/Login/Index';
export const Root = () => {
  return (
    
    <>
    {/* layout */}
    <Header/>
    {/* paginas */}
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Services' element={<Services />}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/sesion' element={<Index/>}/>
            
        </Routes>
    </BrowserRouter>
    {/* pie de pagina */}
    <Footer/>
    </>
  )
  
}

export default Root;