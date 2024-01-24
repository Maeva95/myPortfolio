import React from 'react'
import './style.css'
import IntroImg from '../../assets/work-table.jpg'
import { Link } from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="into-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className='content'>
            <p>Bonjour, je suis Maeva, passionnée par l'univers du digital, web et de la programmation</p>
            <h1>Developpeuse Front-End.</h1>
            <Link to='/projet' className='btn'>Projets</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
    </div>
  )
}

export default HeroImage