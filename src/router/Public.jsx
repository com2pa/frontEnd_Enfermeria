
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

            {/* <Menu /> */}
            <Routes>
                <Route element={<PersistAuth />}>
                    <Route path='/' element={<Home />} />
                    
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/sesion' element={<Index />} />
                <Route path='/register' element={<RegisterFrom />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/verify/:id/:token' element={<Verify />} />
            </Routes>
            {/*   */}
        </>
    )

}

export default Root;