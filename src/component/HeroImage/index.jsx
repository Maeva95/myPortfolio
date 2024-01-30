import React from 'react'
import './style.css'
import IntroImg from '../../assets/images/image-projets.jpg'

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="into-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className='content'>
                <p>Bonjour, je suis Maeva, passionnée par l'univers du digital, web et de la programmation</p>
                <h1>Developpeuse Front-End.</h1>
                <a href='#projet' className='btn'>Projets</a>
                <a href='#about' className='btn btn-light'>A propos</a>
        </div>
    </div>
  )
}

export default HeroImage