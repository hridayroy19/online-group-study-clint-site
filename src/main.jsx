import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyCreateRouter from './Router/Router'
import AuthProvider from './Provider/AuthProvider'
// import AuthProvider from './Provider/AuthProvider'
// import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
  <RouterProvider router={MyCreateRouter} /> 
  </AuthProvider>
  </React.StrictMode>,
)
 