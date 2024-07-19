
import { Route, Routes } from 'react-router-dom';

import CreateServicio from '../pages/CreateServicio';
import PersistAuth from '../components/PersistAuth';






export const Root = () => {
  return (


    <>
    
      <Routes>
      <Route element={<PersistAuth />}>

          <Route path='/dashboard' element={<CreateServicio/>}/>
          {/* <Route path='/CreateServicio' element={<CreateServicio/>}/>  */}
        </Route>
      </Routes>

    </>


  )

}

export default Root;