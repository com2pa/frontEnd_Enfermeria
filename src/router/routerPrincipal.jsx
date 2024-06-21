import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';

export const routerPrincipal = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/index" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}


export default routerPrincipal;