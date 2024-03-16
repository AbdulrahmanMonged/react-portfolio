import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },

  ]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
