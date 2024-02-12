import React from 'react'
import HeroImage from '../../component/HeroImage'
import Projet from '../projet'
import About from '../about'
import { Navbar } from '../../component/Navbar'
import Footer from '../../component/Footer'
import Contact from '../contact'

const Home = () => {
  return (
    <>
    <Navbar />
      <main>
        <section id='accueil'>
          <HeroImage />
        </section>
        <section className='section-about' id='about'>
          <About/>
        </section>
        <section className='section' id='projet'>
          <Projet/>
        </section>
        <section className='section' id='contact'>
          <Contact />
        </section>
      </main>
    <Footer/>
    </>
    
  )
}

export default Home
