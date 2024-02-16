import React, { useLayoutEffect, useRef, useState } from 'react'
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
import Career from '../../component/Career';


const About = () => {
  const [show, setShow] = useState({
    itemOne: false,
    itemTwo: false
  });

const firstRef = useRef(null),
  secondRef = useRef(null);

useLayoutEffect(() => {
  const topPos = element => element.getBoundingClientRect().top
  const text1Pos =  topPos(firstRef.current),
    text2Pos = topPos(secondRef.current);

  const onScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight
    if (text1Pos < scrollPos) {
      setShow(state => ({...state, itemOne: true}))
    } else if (text2Pos < scrollPos) {
      setShow(state => ({...state, itemTwo: true}))
    }
  }
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])

  return (
    <>
      <div className='about'>
      <h2>Présentation</h2>
        <Career />
        <div className='skills'>
            <h3>Développement <span style={{color: 'rgb(159, 112, 253'}}> web</span></h3>
            <ul className={ show.itemTwo ? 'content textL animateL' : 'content textL'} ref={secondRef}>
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
            <ul className={ show.itemOne ? 'content textR animateR' : 'content textR'} ref={firstRef}>
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