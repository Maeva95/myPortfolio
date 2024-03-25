import React from 'react'
import { FaReact } from 'react-icons/fa';
import { FaBootstrap, FaLaptopCode, FaPaintbrush, FaWordpress } from 'react-icons/fa6';
import { VscDebug } from 'react-icons/vsc';
import './style.css'

const Skills = ({isDisplay}) => {
    

  return (
    <>
    {isDisplay &&
        <div className='skills'>
          <h3 className='skills-subtitle'>COMPÉTENCES & OUTILS</h3>
          <div className='skills-container'>
            <ul className='content textL'>
          <h4>Développement <span style={{color: 'rgb(255, 137, 17)'}}> web</span></h4>
          <li>
            <div className='skills-title'>
              <FaLaptopCode size={28}/>
              <h5>Langages de programmation</h5>
            </div>
            <p>HTML, CSS, JavaScript, TypeScript</p>
          </li>
          <li>
            <div className='skills-title'>
              <FaReact />
              <h5>Framework Front-End</h5>
            </div>
            <p>React, Angular, Redux</p>
          </li>
          <li>
            <div className='skills-title'>
              <FaBootstrap size={28}/>
              <h5>Framework CSS & Pré-processeur</h5>
            </div>
            <p>Bootstrap v5, SASS</p>
          </li>
          <li>
            <div className='skills-title'>
              <VscDebug size={28}/>
              <h5>Optimisation et débug</h5>
            </div>
            <p>Référencement SEO, et optimisation des performances d'un site</p>
            <p>Débuggage (Jest et Jasmine)</p>
          </li>
        </ul>
        <ul className='content textR'>
        <h4><span style={{color: 'rgb(255, 137, 17)'}}>Web </span> Design</h4>

          <li>
            <div className='skills-title'>
              <FaPaintbrush size={28}/>
              <h5>Outils</h5>
            </div>
            <p>Adobe Illustrator, Adobe PhotoShop, Adobe Xd, Figma</p>
          </li>
          <li>
            <div className='skills-title'>
              <FaWordpress size={28}/>
              <h5>Logiciel & constructeur</h5>
            </div>
            <p>WordPress, Elementor</p>
          </li>
        </ul>
      </div>
    </div>
    }
    </>
  )
}

export default Skills