import React from 'react'
import './style.css'
const Experiences = ({isDisplay}) => {
  return (
    <>
    {isDisplay &&
    <div className='section-experience'>
        <h3 className="experience-subtitle">ÉXPERIENCES PROFESSIONNELLES</h3>
        <div className="experience-timeline">
            <div className="experience-item" data-year="2023">
                <div className="experience-item-title">Formation Intégrateur web - <span>OpenClassrooms</span></div>
                <div className="experience-item-desc">Créer une application web complète et responsive, Dynamiser des pages web, Créer des interfaces communiquant avec le back-end, Optimiser les performances et réaliser la maintenance de sites web déjà existants, Gérer un projet web de A à Z.</div>
            </div>
            <div className="experience-item" data-year="2022">
                <div className="experience-item-title">Web Designer (stage) - <span>Collège Lycée Notre-Dame Providence</span></div>
                <div className="experience-item-desc">Contribuer à la refonte de l'application du service informatique (analyse et compréhension des problématiques liés au métier, réalisation de wireframes), créer des maquettes et tests utilisateurs.</div>
            </div>
            <div className="experience-item" data-year="2017">
                <div className="experience-item-title">Ingénieur commercial - <span>LAFI</span></div>
                <div className="experience-item-desc">Accompagner et conseiller les clients dans leurs achats et services IT</div>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Experiences