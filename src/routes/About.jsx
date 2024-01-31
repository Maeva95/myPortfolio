import React from 'react'
import HeroImage2 from '../component/HeroImg2'
import Maeva from '../assets/images/CV 2024.png'
import BgImage from '../assets/images/work-table.jpg'
import { FaLaptopCode , FaReact , FaBootstrap } from "react-icons/fa6";
import { VscDebug } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <HeroImage2
        image={BgImage}
        heading="A propos de moi"
        text="Nous avons tous une histoire à raconter et voici la mienne..."
      />
      <div className='about'>
        <div className='intro-about'>
          <img src={Maeva} alt="Maeva Tarati" />
          <h3>Je me prénomme Maeva Tarati <br/> et je suis Développeuse web Front-End.</h3>
        </div>
        <div className='career'>
          <div className='content'>
            <p>
            Mes expériences professionnelles passées m'ont amenés au fur et à mesure du temps à découvrir le web et le digital, qui s'est fortement imposé dans nos lieux de taravil et nos foyers.
            Très vite, je me suis liée d'une vrai passion pour le monde du numérique, autant pour son histoire que pour son évolution.
            Ce qui me plaisait davantage, était de pouvoir créer un site internet avec un peu minimum de créativité et un peu de maîtrise d'outils.
            </p>
            <p>
            Mon aventure a donc commencé en me formant au web design. Très enrichissant, mais pas suffisant pour moi.
            Je voulais aller plus loin: "Maîtriser le code".
            Qu'à cela ne tienne, je me suis donc formée au métier de développeur web.
            Au fur-et-à-mesure de mon apprentissage, j'ai acquis des compétences de développement et les ai mis en pratique créant plusieurs petites applications web dynamiques et responsives plus au moins complexes suivant les contexte.
            </p>
          </div>
        </div>
        <div className='skills'>
            <h3>Compétences & technologies</h3>
            <ul className='content'>
              <li>
                <div className='skills-title code'>
                  <FaLaptopCode size={40}/>
                  <h4>Langages de programmation</h4>
                </div>
                <p>HTML, CSS, JavaScript, TypeScript</p>
              </li>
              <li>
                <div className='skills-title react'>
                  <FaReact size={40}/>
                  <h4>Framework Front-End</h4>
                </div>
                <p>React, Angular, ViteJS, Redux</p>
              </li>
              <li>
                <div className='skills-title css'>
                  <FaBootstrap size={40}/>
                  <h4>Framework CSS</h4>
                </div>
                <p>Bootstrap v5, Materialize</p>
              </li>
              <li>
                <div className='skills-title debug'>
                  <VscDebug size={38}/>
                  <h4>Optimisation et débug</h4>
                </div>
                <p>Référencement SEO, et optimisation des performances d'un site</p>
                <p>Débuggage (Jest et Jasmine)</p>
              </li>
            </ul>
        </div>
        <h3>Si vous souhaitez en connaître davantage, suivez-moi plus bas pour découvrir mes projets.</h3>
      </div>
    </>
  )
}

export default About