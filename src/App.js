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
  return (
    <>
      <Navbar/>
      <div className='container'>
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
        </Routes>
      </div>
    </>
  )
}

export default App
