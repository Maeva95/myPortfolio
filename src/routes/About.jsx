import React from 'react'
import HeroImage2 from '../component/HeroImg2'
import IconInfo from '../assets/images/informatik.svg'
import IconForm from '../assets/images/formation.svg'
import BgImage from '../assets/images/work-table.jpg'
const About = () => {
  return (
    <div>
      <HeroImage2
        image={BgImage}
        heading="A propos de moi"
        text="Nous avons tous une histoire à raconter et voici la mienne..."
      />
      <div className='parcours'>
        <div className='experience experience-1'>
          <div className='image'>
            <img src={IconInfo} alt="" />
          </div>
          <div className='content'>
            <h3>A la découverte du milieu informatique</h3>
            <p>
              Puis j'ai eu l'opportunité de travailler dans le commerce en informatique. Mes missions d'assitante commerciale,
              m'ont appris à être organisée et anticiper les potentiels problèmes liés à l'insatisfaction du client. 
              Puis avec mon esprit d'analyse et mon sens de la relation client, on m'a permis de développer un portefeuille client à potentiel. 
              Pendant ces sept ans, j'ai su prendre des initiatives et proposer des solutions en étant en veille permanente des nouvelles technologies.
            </p>
          </div>
        </div>
        <div className='experience experience-2'>
          <div className='image'>
            <img src={IconForm} alt="" />
          </div>
          <div className='content'>
            <h3>Mon changement de cap</h3>
            <p>
              Puis le temps était venu de changer de cap...
              Je voulais m'épanouir dans mon métier et pour cela il fallait que je change.
              Le web m'a toujours interessé car avec une peu de créativité et un peu de maîtrise d'outils, on peut tout créer.
              Mais pour moi, cela était réservé aux personnes qui avaient étudié dans ce secteur.
              Malgré cela, je me suis informé sur les différents métiers du web. J'ai donc entamé une formation de web design.
              Très enrichissant mais je voulais aller plus loin: maitriser le code.
              Que cela ne tienne, je me suis formée au métier de développeur web. 
            </p>
          </div>
        </div>
      </div>
      <h3>Et vous, sauriez-vous me suivre?</h3>
    </div>
  )
}

export default About