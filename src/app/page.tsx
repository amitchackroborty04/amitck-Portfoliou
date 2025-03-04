import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Overveiw from './Components/Overveiw'
import { MainSkill } from './Components/MainSkill'




const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Overveiw/>
    <MainSkill/>
    </div>
  )
}

export default page