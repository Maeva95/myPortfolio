import React from 'react'
import HeroImage2 from '../component/HeroImg2'
import ProjectCard from '../component/ProjectCard'
// import FetchData from '../fetchData'
// import { useParams } from 'react-router-dom'

const Projet = () => {
  // const url = 'src/data/project.json'
  // const projects = FetchData(url)
  // const {id} = useParams()

  // const project = projects.dataLog.find((item) => item.id === id)
  // console.log(project[1].id)
  // if (projects.isLoading) {
  //   return <div>En cours de chargement...</div>
  // }
  // if (projects.error) {
  //   return <div>Erreur de chargement</div>
  // }
  const project = [
    {
        "id": "1",
        "title": "Agence immobilière KASA",
        "image": "/assets/site-Kasa.png",
        "tools": [
            "ViteJS",
            "HTML",
            "SCSS",
            "React Router"
        ],
        "description": "Ce projet portait sur la refonte du site web de l'agence immobilière Kasa",
        "objectifs": [
            "Développer l’ensemble de l’application avec React",
            "Intégrer les composants React et les routes avec React Router"
        ]
    },
    {
        "id": "2",
        "title": "Projet 2",
        "image": "/assets/site-Kasa.png",
        "tools": [
            "ViteJS",
            "HTML",
            "SCSS",
            "React Router"
        ],
        "description": "Ce projet portait sur la refonte du site web de l'agence immobilière Kasa",
        "objectifs": [
            "Développer l’ensemble de l’application avec React",
            "Intégrer les composants React et les routes avec React Router"
        ]
    },
    {
        "id": "3",
        "title": "Projet 3",
        "image": "/assets/site-Kasa.png",
        "tools": [
            "ViteJS",
            "HTML",
            "SCSS",
            "React Router"
        ],
        "description": "Ce projet portait sur la refonte du site web de l'agence immobilière Kasa",
        "objectifs": [
            "Développer l’ensemble de l’application avec React",
            "Intégrer les composants React et les routes avec React Router"
        ]
    }
]

  return (
    <>
      <HeroImage2 
        heading="MES PROJETS" 
        text="Voici quelques projets réalisés"
      />
      <ul className='project-card'>
        {project.map(({id, title, image, tools}) =>
          <li key={id} className='card-container'>
            <ProjectCard
              id={id}
              title={title}
              image={image}
              tools={tools}
            />
          </li>
        )} 
      </ul>
    </>

  )
}

export default Projet