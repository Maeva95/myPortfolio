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
      <div className='card'>
        <div className='card-heading'>
          <h3>{title}</h3>
        </div>
        <div className='card-footer'>
            {click ? (
              <ul className= 'actionBtn'>
                <li className='tooltip'>
                  <FaList 
                    className='action-btn active' 
                    size={40} 
                    onClick={() => {setOpenModal(true)}}
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
            ) : (
              <ul className='list-tools'>
                {data && 
                  tools.map((tool, index) => 
                    <li key={index}>
                      {tool}
                    </li>
                )}
              </ul>
            )
          }
          <svg className={click ? 'icon-container rotate' : 'icon-container'}>
            <defs>
              <linearGradient id='myGradient' gradientTransform='rotate(52)'>
                <stop offset='0%' style={{stopColor: "rgba(131,58,180,1)"}}/>
                <stop offset='40%' style={{stopColor: "rgba(253,29,29,1)"}}/>
                <stop offset='100%' style={{stopColor: "rgba(248,252,69,1)"}}/>
              </linearGradient>
            </defs>
            <FaCirclePlus style={{ fill: "url(#myGradient)" }} size={40} onClick={handleClick}/>
          </svg>
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
            closeModal={setOpenModal}
          />
        }
    </li>
  )
}

