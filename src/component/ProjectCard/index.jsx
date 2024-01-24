import { Link } from 'react-router-dom'
import './style.css'
import React from 'react'
// import Projects from 'src/data/project.json'
// import FetchData from '../../fetchData'

export default function ProjectCard ({ id, title, image, tools}) {
  // const url = 'src/data/project.json'
  // const projects = FetchData(url)
  // const getProjectById = projects.dataLog.find((item) => item.id === id)

  return (
    <div className='card'>
      <h3>- {title} -</h3>
      <img src={image} alt={title} />
      <ul className='list-tools'>
        {tools.map((tool, index) => 
        <li key={index}>
          {tool}
        </li>
        )}
      </ul>
      <Link to={'/projet/' + id} className='btn'>Voir le projet</Link>
    </div>
  )
}

