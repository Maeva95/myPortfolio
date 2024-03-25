import React, { useEffect, useState } from 'react'
import HeroImage2 from '../../component/HeroImg2'
import ProjectCard from '../../component/ProjectCard'
import ImgCode from '../../assets/images/image-hero.webp'
import './style.css'

const Projet = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('/data/tools.json')
    const response = await res.json()
    setData(response)
  }

  return (
    <>
      <HeroImage2
      image={ImgCode}
      heading="MES PROJETS" 
      text="Voici quelques projets réalisés"
      />
      <ul className='projects' id='projects'>
        {data && 
        data.map((work) =>
          <ProjectCard
            {...work}
            key={work.id}
            className='project-card'
          />
        )}
      </ul>
    </>
  )
}

export default Projet