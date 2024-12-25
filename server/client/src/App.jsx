import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Feedback from "./components/Feedback"
import Ai from "./components/Ai"
import Report from "./components/Report"
import CyberbullyingPage from "./components/About"
import Case6 from "./components/Case 6"
import Case5 from './components/Case 5'
import Case4 from './components/Case 4'
import Case3 from './components/Case 3'
import Case2 from './components/Case 2'
import Case1 from './components/Case 1'
import {  createBrowserRouter,RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header  /><Home /><Footer /></>
    },
    {
      path: '/login',
      element: <><Header  /><Login   /><Footer /></>
    },
    {
      path: '/register',
      element: <><Header  /><Register   /><Footer /></>
    },
    {
      path: '/contact',
      element: <><Header   /><Feedback /><Footer /></>
    },
    {
      path: '/ai',
      element: <><Header   /><Ai  /><Footer /></>
    },
    {
      path: '/report',
      element: <><Header   /><Report  /><Footer /></>
    },
    {
      path: '/about',
      element: <><Header   /><CyberbullyingPage  /><Footer /></>
    },
    {
      path: '/case6',
      element: <><Header   /><Case6  /><Footer /></>
    },
    {
      path: '/case5',
      element: <><Header   /><Case5  /><Footer /></>
    },
    {
      path: '/case4',
      element: <><Header   /><Case4  /><Footer /></>
    },
    {
      path: '/case3',
      element: <><Header   /><Case3  /><Footer /></>
    },
    {
      path: '/case2',
      element: <><Header   /><Case2  /><Footer /></>
    },
    {
      path: '/case1',
      element: <><Header   /><Case1  /><Footer /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
