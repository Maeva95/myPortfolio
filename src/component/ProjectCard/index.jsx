import './style.css'
import React from 'react'
import { useEffect, useState } from 'react'
import ModalCard from '../ModalCard'
import { FaPlusCircle, FaList, FaGlobe, FaGithub } from 'react-icons/fa'

export default function ProjectCard ({title, image, description, objectifs, tools, urlWebsite, source}) {
  const [ data, setData ] = useState([])
  const [openModal, setOpenModal] = useState(false)
  
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  useEffect(() => {
    async function getData () {
      const response = await fetch('/data/tools.json')
      const data = await response.json()
      setData(data)
    }
    getData()
  }, [])


  return (
    <li className='card-container'>
      <img className='background-card'src={image} alt={title} />
      <div className='card'>
        <div className='card-heading'>
          <h3>{title}</h3>
        </div>
        <div className='card-image'>
          <img src={image} alt={title} />
        </div>
        <div className='card-footer'>
          <ul className='list-tools'>
            {data && 
              tools.map((tool, index) => 
                <li key={index}>
                  {tool}
                </li>
              )}
          </ul>
          <div>
            <FaPlusCircle className='action-btn' size={60} onClick={handleClick}/>
              <div className={click ? 'actionBtn active' : 'actionBtn'}>
                <FaList className={click ? 'action-btn active' : 'action-btn-floating'} size={42} onClick={() =>
                  {setOpenModal(true)}}
                />
                <a href={urlWebsite}>
                  <FaGlobe className={click ? 'action-btn active' : 'action-btn-floating'} size={42} />
                </a>
                <a href={source}>
                  <FaGithub className={click ? 'action-btn active' : 'action-btn-floating'} size={42} />
                </a>
              </div>
          </div>
          
        </div>
      </div>
      { openModal && 
          <ModalCard
            title={title}
            image={image}
            detail={description}
            objectifs={objectifs}
            urlWebsite={urlWebsite}
            source={source}
            tools={tools}
            closeModal={setOpenModal}
          />
        }
    </li>
  )
}

