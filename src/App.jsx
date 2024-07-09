import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Facility from './Components/Facility/Facility'
import Menu from './Components/Menu/Menu'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Facility/>
      <Menu/>
    </div>
  )
}

export default App