import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Overveiw from './Components/Overveiw'
import { IconCloudDemo } from './Components/MainSkill'
import Portfolio from './Components/portfilou'
import Reveiws from './Components/Reveiws'
import Contact from './Components/Contact'





const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Overveiw/>
      <IconCloudDemo />
      <Portfolio />
      <Reveiws />
      <Contact/>
    </div>
  )
}

export default page