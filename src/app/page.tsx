import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Overveiw from './Components/Overveiw'
import { IconCloudDemo } from './Components/MainSkill'
import Portfolio from './Components/portfilou'
import Reveiws from './Components/Reveiws'
import Contact from './Components/Contact'
import ResumeSummary from './Components/Summary'
import Footer from './Components/Footer'





const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Overveiw/>
      <IconCloudDemo />
      <Portfolio />
      <Reveiws />
      <ResumeSummary/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default page