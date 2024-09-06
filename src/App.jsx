import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Shared/Layout'
import Dashboard from './Components/Dashboard'
import AttendanceOverview from './Components/AttendanceOverview'
// import Navbar from './Navbar'

const App = () => {

  
  return (

    // <div>
    //   <Navbar />
    // </div>


    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/attendance' element={<AttendanceOverview />} />
        </Route>
      </Routes>
    </Router>
    
  
  )
}

export default App