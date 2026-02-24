import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'
import Login from './components/Login/Login'
import User from './components/User/User'
import GetStarted from './components/GetStarted/GetStarted'
import './index.css'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/footer",
        element:<Footer/>
      },
      {
        path:"/getstarted",
        element:<GetStarted/>
      },
      {
        path:"/github",
        element:<Github/>
      },
      {
        path:"/header",
        element:<Header/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/user",
        element:<User/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
