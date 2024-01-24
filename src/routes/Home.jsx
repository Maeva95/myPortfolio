import React from 'react'
import HeroImage from '../component/HeroImage'
import Projet from './Projet'
import About from './About'

const Home = () => {
  return (
    <div>
        <HeroImage />
        <Projet/>
        <About/>
    </div>
  )
}

export default Home
