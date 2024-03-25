import React from 'react'
import './style.css'
import IntroImg from '../../assets/images/image-projets.webp'

const HeroImage = () => {
  

  return (
    <div className='hero'>
        <div className='mask'>
            <img className="into-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className='content'>
          <div className='content-text'>
            <p className='text'>Bonjour, je suis <span className='color-text'> Maëva, </span> développeuse web</p>
          </div>
          <h1 className='heading'>Bienvenue sur mon site web</h1>
          <div className='buttonContainer'>
            <a href='#about' className='btn btn-light'>A propos</a>
            <a href='#projet' className='btn btn-dark'>Projets</a>
          </div>
        </div>
    </div>
  )
}

export default HeroImage