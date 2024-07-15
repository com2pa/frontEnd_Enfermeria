// Mantener sesion persistida

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const PersistAuth = () => {
    const location = useLocation()
    const { auth, setAuth } = useAuth()
    const [isLoading, setIsLoading] = useState(auth.name ? false : true)
    // console.log('inicio sesion',auth.name)
    // Obtener el usuario cada vez que cambia la url o se refresca la pagina para mantener la sesion persistida
    useEffect(() => {
        const handleUser = async () => {
            try {
                const { data } = await axios.get('/api/refres')
                setAuth(data)
                console.log(data.name)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false)
                setAuth({})
            }
        }
        handleUser()

    }, [setAuth]);

    //CUANDO CARGARDO EL USUARIO
    if (isLoading) {
        return <div><Spinner  size='md' color="red.600"/> cargandoo!</div>
    }

    //cuando estoy en home
    if (location.pathname === '/' || location.pathname === '/Home') {
        if (auth?.name) {
            return <Navigate to='/SidebarWithHeader' state={{ from: location }} replace />
        } else {
            return <Outlet />
        }
    }

    //cuando estoy en cualquier ruta privada
    if (auth?.name) {
        return <Outlet />
    } else {
        return <Navigate to='/Home' state={{ from: location }} replace />
    }


};

export default PersistAuth;
