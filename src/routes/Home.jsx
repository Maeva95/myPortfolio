import React from 'react'
import HeroImage from '../component/HeroImage'
import Projet from './Projet'
import About from './About'
import { Navbar } from '../component/Navbar'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
      <main>
        <section id='accueil'>
          <HeroImage />
        </section>
        <section className='section-projet' id='projet'>
          <Projet/>
        </section>
        <section className='section-about' id='about'>
          <About/>
        </section>
      </main>
    <Footer/>
    </>
    
  )
}

export default Home
