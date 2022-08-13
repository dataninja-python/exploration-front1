import Navbar from './NavBar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Reservation from './pages/Reservation'
import Guest from './pages/Guest'
import Partner from './pages/Partner'
import Property from './pages/Property'
import Invoice from './pages/Invoice'
import Dash from './pages/Dash'
import ErrorPage from './pages/ErrorPage'

import { Route, Routes } from 'react-router-dom'


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/home" || "/Home":
      component = <Home />
      break
    case "/signin" || "/Signin":
      component = <SignIn />
      break
    case "/signup" || "/Signup":
      component = <SignUp />
      break
    case "/reservation" || "/Reservation":
      component = <Reservation />
      break
    case "/guest" || "/Guest":
      component = <Guest />
      break
    case "/partner" || "/Partner":
      component = <Partner />
      break
    case "/property" || "/Property":
      component = <Property />
      break
    case "/invoice" || "/Invoice":
      component = <Invoice />
      break
    case "/dashboard" || "/Dashboard":
      component = <Dash />
      break
    default:
      console.log("This page is not accessible")
      component = <ErrorPage />
  }
  return (
    <>
      <Navbar/>
      <div className='container'>
      {component}
      </div>
    </>
  )
}

export default App
