// import utilities
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import components
import Navbar from './components/NavBar'
import Footer from './components/Footer'

// import pages
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

function App() {
  return (
    <>
      <div className='container'>
      <Navbar/>
      <div className='contentWrapper'>
        <h1>This is the main content page</h1>
      </div>
      <Footer />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/property" element={<Property />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
