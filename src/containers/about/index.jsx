import React, { useState } from 'react'
import Photo from '../../assets/images/Photo cv.png'
import Cover from '../../assets/images/fond_cv2.webp'
import './style.css'
import Career from '../../component/Career';
import Skills from '../../component/Skills';
import Experiences from '../../component/Experiences';
import CV from '../../assets/CV_2024.pdf'

const About = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <>
      <div className='about'>
        <div className={activeIdx === 0 ? 'about-header' : 'about-header active'}>
          <img className='about-cover' src={Cover} alt='couverture'/>
          <img className='about-avatar' src={Photo} alt="Maeva Tarati"/>
        </div>
        <div className={activeIdx === 0 ? 'about-title' : 'about-title active'}>
          <h2 className='about-heading'>Maeva Tarati</h2>
          <p className='about-jobtitle'>Développeuse Front-End</p>
        </div>

        <div className={activeIdx === 0 ?'main-section' : 'main-section active'}>
          <div className='about-buttons'>
            <button type='button' onClick={() => setActiveIdx(0)} className='about-btn-footer'>A PROPOS</button>
            <button type='button' onClick={() => setActiveIdx(1)} className='about-btn-footer'>COMPÉTENCES</button>
            <button type='button' onClick={() => setActiveIdx(2)} className='about-btn-footer'>ÉXPERIENCES</button>
            <a href='../../assets/CV_2024.pdf' onClick={() => setActiveIdx(2)} className='about-btn-footer' download={CV} >CV</a>
          </div>
          <Career isDisplay={activeIdx === 0}/>
          <Skills isDisplay={activeIdx === 1}/>
          <Experiences isDisplay={activeIdx === 2}/>
          
        </div>
      </div>
    </>
  )


}

export default About