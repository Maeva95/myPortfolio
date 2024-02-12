import './style.css'
import React from 'react'
import { useEffect, useState } from 'react'
import ModalCard from '../ModalCard'
import {  } from 'react-icons/fa'
import { FaCirclePlus, FaList, FaGlobe, FaGithub } from 'react-icons/fa6'

export default function ProjectCard ({title, image, description, objectifs, tools, urlWebsite, source}) {
  const [ data, setData ] = useState([])
  const [openModal, setOpenModal] = useState(false)
  
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

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
      <img className={click ? 'background-card blur' : 'background-card'}src={image} alt={title} />
        {click ? (
          <div className='card active'>
            <div className='card-open'>
              <div className='card-heading'>
                <h3>{title}</h3>
              </div>
              <ul className= 'actionBtn'>
                <li className='tooltip'>
                  <FaList 
                    className='action-btn active' 
                    size={40} 
                    onClick={() => {setOpenModal(true); setClick(!click)}}
                  />
                  <span className='tooltipText'>En savoir plus</span>
                </li>
                <li className='tooltip'>
                  <a href={urlWebsite}>
                    <FaGlobe className='action-btn active' size={40} />
                  </a>
                  <span className='tooltipText'>Site web</span>
                </li>
                <li className='tooltip'>
                  <a href={source}>
                    <FaGithub className='action-btn active' size={40} />
                  </a>
                  <span className='tooltipText'>GitHub</span>
                </li>
              </ul>
              <FaCirclePlus className='icon-container active' size={30} onClick={handleClick}/>
            </div>
          </div>
          ) : (
          <div className='card'>
            <div className='card-footer'>
              <ul className='list-tools'>
                {data && 
                  tools.map((tool, index) => 
                    <li key={index}>
                      {tool}
                    </li>
                )}
              </ul>
              <FaCirclePlus className='icon-container' size={30}  onClick={handleClick}/>
            </div>
          </div>
          )
        }
    { openModal && 
        <ModalCard
          title={title}
          image={image}
          detail={description}
          objectifs={objectifs}
          urlWebsite={urlWebsite}
          source={source}
          closeModal={setOpenModal}
        />
      }
    </li>
  )
}

