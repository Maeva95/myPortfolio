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
    setClick(false)
  }

  useEffect(() => {
    async function getData () {
      const response = await fetch('/data/tools.json')
      const data = await response.json()
      setData(data)
    }
    getData()
  }, [])

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <li className='card-container'>
      <img className={isHover ? 'background-card active' : 'background-card'} src={image} alt={title} />
        {isHover ? (
          <div className='card active' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='card-open'>
              <div className='card-heading'>
                <h3>{title}</h3>
              </div>
              <ul className= 'actionBtn'>
                <li className='tooltip'>
                  <FaList 
                    className='action-btn active' 
                    size={36} 
                    onClick={() => {setOpenModal(true); setClick(!click)}}
                  />
                  <span className='tooltipText'>En savoir plus</span>
                </li>
                <li className='tooltip'>
                  <a target="_blank" rel="noopener noreferrer" href={urlWebsite}>
                    <FaGlobe className='action-btn active' size={36} onClick={handleClick}/>
                  </a>
                  <span className='tooltipText'>Site web</span>
                </li>
                {source &&
                  <li className='tooltip'>
                    <a target="_blank" rel="noopener noreferrer" href={source} >
                      <FaGithub className='action-btn active' size={36} onClick={handleClick}/>
                    </a>
                    <span className='tooltipText'>GitHub</span>
                  </li>
                }
              </ul>
              <FaCirclePlus className='icon-container active' size={30} onClick={handleMouseLeave}/>
            </div>
          </div>
          ) : (
          <div className='card'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
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