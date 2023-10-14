import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Login } from './components/login.jsx'
import WelcomeSlide from './components/WelcomeSlide.jsx'
import MindMap from './components/MindMap'
import Signup from './components/signup.jsx'
import AndroidMap from './components/anroid.jsx'
import Webdev from './components/webdev.jsx'
import ContactUs from './components/ContactUs.jsx'
import Profile from './components/profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/signup',
        element: <Signup/>,
      },
      {
        path:'/home',
        element: <WelcomeSlide />
      },
      {
        path:'/cloud',
        element: <MindMap/>,
      },
      {
        path:'/android',
        element: <AndroidMap/>,
      },
      {
        path:'/webdev',
        element:<Webdev/>
      },
      {
        path:'/aboutus',
        element:<ContactUs/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
      
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
