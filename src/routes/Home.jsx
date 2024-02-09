import React from 'react'
import HeroImage from '../component/HeroImage'
import Projet from '../containers/projet'
import About from '../containers/about'
import { Navbar } from '../component/Navbar'
import Footer from '../component/Footer'
import Contact from '../containers/contact'

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
