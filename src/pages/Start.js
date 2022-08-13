import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Start = () => {
  return (
    <div>
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default Start