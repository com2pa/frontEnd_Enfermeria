import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from'../pages/Services';
import Contact from'../pages/Contact';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Menu from '../layout/Menu';
import Index from '../pages/Login/Index';
import RegisterFrom from '../pages/Login/RegisterForm';
import LoginForm from '../pages/Login/LoginForm'
export const Root = () => {
  return (
  
    <BrowserRouter>
    <Header/>
    <Menu/>    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Services' element={<Services />}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/sesion' element={<Index/>}/>
            <Route path='/Register' element={<RegisterFrom/>}/>
            <Route path='/Login' element={<LoginForm/>}/>
            
        </Routes>
        <Footer/>
    </BrowserRouter>
   
   
  )
  
}

export default Root;