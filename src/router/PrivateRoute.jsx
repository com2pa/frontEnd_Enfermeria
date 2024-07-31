
import { Route, Routes } from 'react-router-dom';

import Servicio from '../pages/CreateServicio';
import PersistAuth from '../components/PersistAuth';
import Index from '../pages/Index';
import { CreateEnfermero } from '../pages/CreateEnfermero';
import SelectServicio from '../pages/SelectServicio';
import Appointment from '../pages/Appointment';




export const Root = () => {
  return (


    <>
    
      <Routes>
        <Route element={<PersistAuth />}>
          <Route path='/dashboard' element={<Index/>}/>
          <Route path='/servicio' element={<Servicio/>}/>
          {/* <Route path='/CreateServicio' element={<CreateServicio/>}/>  */}
          <Route  path='/enfermero' element={<CreateEnfermero/>}/>
          <Route path='/cita' element={<Appointment/>}/>
        </Route>
      </Routes>

    </>


  );

};

export default Root;