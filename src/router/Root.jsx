
import { BrowserRouter, } from 'react-router-dom';
import axios from 'axios';
import Public from '../router/Public';
import PrivateRoute from '../router/PrivateRoute'
import { useAuth } from '../hooks/useAuth';
import PersistAuth from '../components/PersistAuth';




export const Root = () => {

  return (


    <BrowserRouter>
      
      <PrivateRoute />
      <Public />
    </BrowserRouter>


  )

}

export default Root;