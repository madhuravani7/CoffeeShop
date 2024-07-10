import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Facility from './Components/Facility/Facility'
import Menu from './Components/Menu/Menu'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Facility/>
      <Menu/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App