import React from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { FaGithub, FaGlobe } from 'react-icons/fa6';
import { MdBookmarkAdded } from "react-icons/md"
import { TbTargetArrow } from "react-icons/tb";
import './style.css'
import { useState, useEffect } from 'react'

const ModalCard = ({image, title, detail, objectifs, urlWebsite, source, closeModal}) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        async function getData () {
        const response = await fetch('/data/tools.json')
        const data = await response.json()
        setData(data)
        }
        getData()
    }, [])

    console.log(data)
    return (
        <div className='modalBg'>
            <div className='modalContainer'>
                <div className='modal-heading'>
                    <h2 className='title'>{title}</h2>
                    <FaPlus  className='closeBtn' size={20} onClick={() => closeModal(false)}/>
                </div>
                <img className='modal-image' src={image} alt={title} />
                <div className='modal-content'>
                    <div className='work-section'>
                        <MdBookmarkAdded size={40} style={{color: '#FF8911'}}/>
                        <div className='detail'>
                            <h3>Contexte</h3>
                            <p>{detail}</p>
                        </div>
                    </div>
                    <div className='work-section'>
                        <TbTargetArrow size={40} style={{color: '#7F27FF'}}/>
                        <div className='objective'>
                            <h3>Objectifs</h3>
                            <ul>
                                {data &&
                                    objectifs.map((detail, index) =>
                                    <li className='detail'>
                                        <FaCheck className='icon-check' key={index} size={15}/>
                                        <p>
                                            {detail}
                                        </p>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className='work-links'>
                    <li className='link-left'>
                        <a target="_blank" rel="noreferrer" href={urlWebsite} className="btn-modal ">
                            <FaGlobe size={30} style={{color: '#EEEEEE'}}/>
                        </a>
                    </li>
                    <li className='link-right'>
                        <a target="_blank" rel="noreferrer" href={source} className="btn-modal ">
                            <FaGithub size={30} style={{color: '#EEEEEE'}}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalCard