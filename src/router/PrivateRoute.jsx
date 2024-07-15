
import { Route, Routes } from 'react-router-dom';
import SidebarWithHeader from '../pages/Login/SidebarWithHeader';
import PersistAuth from '../components/PersistAuth';
import CreateServicio from '../pages/Services/CreateServicio';







export const Root = () => {
  return (


    <>
    <SidebarWithHeader/>
      <Routes>
        <Route>
          {/* <Route path='/SidebarWithHeader' element={<SidebarWithHeader />} /> */}
          {/* <Route path='/CreateServicio' element={<CreateServicio/>}/>  */}
          
        </Route>
      </Routes>

    </>


  )

}

export default Root;