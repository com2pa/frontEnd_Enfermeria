
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Footer from '../layout/Footer';
import Menu from '../layout/Menu';
import Index from '../pages/Login/Index';
import RegisterFrom from '../pages/Login/RegisterForm';
import LoginForm from '../pages/Login/LoginForm';
import Verify from '../pages/verify';
import PersistAuth from '../components/PersistAuth';


export const Root = () => {
    return (
        <>

            <Menu />
            <Routes>
                <Route element={<PersistAuth />}>
                    <Route path='/' element={<Navigate to='/Home' />} />
                    <Route path='/Home' element={<Home />} />
                </Route>
                <Route path='/About' element={<About />} />
                <Route path='/Services' element={<Services />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/sesion' element={<Index />} />
                <Route path='/Register' element={<RegisterFrom />} />
                <Route path='/Login' element={<LoginForm />} />
                <Route path='/verify/:id/:token' element={<Verify />} />
            </Routes>
            <Footer />
        </>
    )

}

export default Root;