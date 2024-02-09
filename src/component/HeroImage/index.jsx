import React, { useState } from 'react'
import './style.css'
import IntroImg from '../../assets/images/image-projets.jpg'

const HeroImage = () => {
  const [click, setClick] = useState(false)
  

  return (
    <div className='hero'>
        <div className='mask'>
            <img className="into-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className='content'>
                <p className={ click ? 'typing': ' typing.animate'} onClick={() => {setClick(!click)}}>Bonjour, je suis Maeva, développeuse web</p>
                <h1>Bienvenue sur mon site web</h1>
                <a href='#projet' className='btn'>Projets</a>
                <a href='#about' className='btn btn-light'>A propos</a>
        </div>
    </div>
  )
}

export default HeroImage