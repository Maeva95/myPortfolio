import React from 'react'
import './style.css'
const Experiences = ({isDisplay}) => {
  return (
    <>
    {isDisplay &&
    <div className='section-experience'>
        <h3 className="experience-subtitle">ÉXPERIENCES PROFESSIONNELLES</h3>
        <div className="experience-timeline">
            <div className="experience-item" data-year="2022">
                <div className="experience-item-title">Web Designer (stage) - <span>Collège Lycée Notre-Dame Providence</span></div>
                <div className="experience-item-desc">Contribuer à la refonte de l'application du service informatique (analyse et compréhension des problématiques liés au métier, réalisation de wireframes), créer des maquettes et tests utilisateurs.</div>
            </div>
            <div className="experience-item" data-year="2017">
                <div className="experience-item-title">Ingénieur commercial - <span>LAFI</span></div>
                <div className="experience-item-desc">Accompagner et conseiller les clients dans leurs achats et services IT</div>
            </div>
            <div className="experience-item" data-year="2014">
                <div className="experience-item-title">Assistante commerciale - <span>LAFI</span></div>
                <div className="experience-item-desc">Gérer le suivi administratif des dossiers clients, organiser le planning d’un commercial et participer à la réalisation de projets.</div>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Experiences