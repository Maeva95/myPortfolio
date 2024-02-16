import React, { useLayoutEffect, useRef, useState } from 'react'
import Photo from '../../assets/images/Photo cv.png'
import './style.css'

const Career = () => {
    const [show, setShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
    });

    const firstRef = useRef(null),
    secondRef = useRef(null),
    thirdRef = useRef(null);

    useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top
    const text1Pos =  topPos(firstRef.current),
        text2Pos = topPos(secondRef.current),
        text3Pos = topPos(thirdRef.current);        

    const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight
        if (text1Pos < scrollPos) {
        setShow(state => ({...state, itemOne: true}))
        } else if (text2Pos < scrollPos) {
        setShow(state => ({...state, itemTwo: true}))
        } else if (text3Pos < scrollPos) {
        setShow(state => ({...state, itemThree: true}))
        }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    }, [])
    
  return (
    <div className='career'>
          <div className='intro-about'>
            <img src={Photo} alt="Maeva Tarati" />
          </div>
          <div className='content'>
            <p className={ show.itemThree ? 'text animate' : 'text'} ref={thirdRef}>
            Mes expériences professionnelles passées m'ont amenée à découvrir le domaine du numérique et notamment du web. 
            Je me suis très vite prise de passion pour cet univers, autant par son histoire que par son évolution.
            </p>
            <p className={ show.itemTwo ? 'text animate' : 'text'} ref={secondRef}>
            Mon aventure a donc commencé en me formant au web design.
            J'ai donc créé mon premier site internet sur WordPress pour un client.
            Ce fut très enrichissant, mais pas suffisant pour moi.
            Je voulais en apprendre davantage: "Maîtriser le code".
            </p>
            <p className={ show.itemOne ? 'text animate' : 'text'} ref={firstRef}>
            Au cours de mon apprentissage chez OpenClassrooms, j'ai acquis des compétences de développement. 
            Mais c'est avant tout en pratiquant et en étant attentif à l'évolution des technologies qu'on se forme et qu'on apprend. 
            Quelques projets, que je vous laisse découvrir <a href="#projet">ici</a> m'ont permis d'approfondir mes connaissances.
            </p>
          </div>
        </div>
  )
}

export default Career