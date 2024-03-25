import React from 'react'
import './style.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Career = ({isDisplay}) => {
  
  return (
    <>
    {isDisplay &&
      <div className='career'>
      <div className='content'>
        <p className='text'>
        Mes expériences professionnelles passées m'ont amenée à découvrir le domaine du numérique et notamment du web. 
        Je me suis très vite prise de passion pour cet univers, autant par son histoire que par son évolution.
        </p>
        <p className='text'>
        Mon aventure a donc commencé en me formant au web design.
        J'ai donc créé mon premier site internet sur WordPress pour un client.
        Ce fut très enrichissant, mais pas suffisant pour moi.
        Je voulais en apprendre davantage: "Maîtriser le code".
        </p>
        <p className='text'>
        Au cours de mon apprentissage chez OpenClassrooms, j'ai acquis des compétences de développement. 
        Mais c'est avant tout en pratiquant et en étant attentif à l'évolution des technologies qu'on se forme et qu'on apprend. 
        Quelques projets, que je vous laisse découvrir <a href="#projet">ici</a> m'ont permis d'approfondir mes connaissances.
        </p>
      </div>
      <div className='social-links'>
        <a href="https://www.linkedin.com/in/maeva-tarati" className='linkCv-social' target="_blank" rel="noopener noreferrer">
          <FaLinkedin 
            className='iconCv-social'
            size={28} 
            style={{
            color: "#FF8911",
            marginRight: "2rem"
            }}
          />
        </a>
        <a href="https://github.com/Maeva95" className='linkCv-social' target="_blank" rel="noopener noreferrer">
          <FaGithub 
            className='iconCv-social'
            size={28} 
            style={{
            color: "#7F27FF",
            marginRight: "2rem"
            }}
          />
        </a>
      </div>
    </div>
    }
    </>
  )
}

export default Career