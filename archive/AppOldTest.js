import Navbar from '../src/NavBar'
import Home from '../src/pages/Home'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Reservation from '../src/pages/Reservation'
import Guest from '../src/pages/Guest'
import Partner from '../src/pages/Partner'
import Property from '../src/pages/Property'
import Invoice from '../src/pages/Invoice'
import Dash from '../src/pages/Dash'
import ErrorPage from '../src/pages/ErrorPage'

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
