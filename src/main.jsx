import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import routerPrincipal from './router/routerPrincipal.jsx'
// import { RouterProvider } from 'react-router-dom'
// import rutas from './router/rutas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider router ={routerPrincipal}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
