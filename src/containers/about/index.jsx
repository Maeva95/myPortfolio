import React from 'react'
import Photo from '../../assets/images/Photo cv.png'
import Cv from '../../assets/CV 2024 mis à jour.pdf'
import {
  FaLaptopCode,
  FaReact,
  FaBootstrap,
  FaPaintbrush,
  FaWordpress
} from "react-icons/fa6";
import { VscDebug } from "react-icons/vsc";
import './style.css'

const About = () => {
  return (
    <>
      <div className='about'>
      <h2>Présentation</h2>
        <div className='career'>
          <div className='intro-about'>
            <img src={Photo} alt="Maeva Tarati" />
          </div>
          <div className='content'>
            <p>
            Mes expériences professionnelles passées m'ont amenée à découvrir le domaine du numérique et notamment du web. 
            Je me suis très vite prise de passion pour cet univers, autant par son histoire que par son évolution.
            </p>
            <p>
            Mon aventure a donc commencé en me formant au web design.
            J'ai donc créé mon premier site internet sur WordPress pour un client.
            Ce fut très enrichissant, mais pas suffisant pour moi.
            Je voulais en apprendre davantage: "Maîtriser le code".
            </p>
            <p>
            Au cours de mon apprentissage chez OpenClassrooms, j'ai acquis des compétences de développement. 
            Mais c'est avant tout en pratiquant et en étant attentif à l'évolution des technologies qu'on se forme et qu'on apprend. 
            Quelques projets, que je vous laisse découvrir <a href="#projet">ici</a> m'ont permis d'approfondir mes connaissances.
            </p>
          </div>
        </div>
        <div className='skills'>
            <h3>Développement <span style={{color: 'rgb(159, 112, 253'}}> web</span></h3>
            <ul className='content'>
              <li>
                <div className='skills-title'>
                  <FaLaptopCode size={38}/>
                  <h4>Langages de programmation</h4>
                </div>
                <p>HTML, CSS, JavaScript, TypeScript</p>
              </li>
              <li>
                <div className='skills-title'>
                  <FaReact size={38}/>
                  <h4>Framework Front-End</h4>
                </div>
                <p>React, Angular, Redux</p>
              </li>
              <li>
                <div className='skills-title'>
                  <FaBootstrap size={38}/>
                  <h4>Framework CSS & Pré-processeur</h4>
                </div>
                <p>Bootstrap v5, SASS</p>
              </li>
              <li>
                <div className='skills-title'>
                  <VscDebug size={38}/>
                  <h4>Optimisation et débug</h4>
                </div>
                <p>Référencement SEO, et optimisation des performances d'un site</p>
                <p>Débuggage (Jest et Jasmine)</p>
              </li>
            </ul>
            <h3><span style={{color: 'rgb(159, 112, 253'}}>Web </span> Design</h3>
            <ul className='content'>
              <li>
                <div className='skills-title'>
                  <FaPaintbrush size={38}/>
                  <h4>Outils</h4>
                </div>
                <p>Adobe Illustrator, Adobe PhotoShop, Adobe Xd, Figma</p>
              </li>
              <li>
                <div className='skills-title'>
                  <FaWordpress size={38}/>
                  <h4>Logiciel & constructeur</h4>
                </div>
                <p>WordPress, Elementor</p>
              </li>
            </ul>
        </div>
        <div className='cv'>
          <p>Si vous souhaitez voir mon CV, cliquez <a href={Cv}>ici</a></p>
          <p>Sinon, retrouvez mes travaux ci-dessous</p>
        </div>
      </div>
    </>
  )
}

export default About