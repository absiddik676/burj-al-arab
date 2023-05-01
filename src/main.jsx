import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import router from './routes/routes.jsx'
import Contex from './AuthContext/Provider.jsx'
import Provider from './AuthContext/Provider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider><RouterProvider router={router}/></Provider>
  </React.StrictMode>,
)
