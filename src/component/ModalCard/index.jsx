import React from 'react'
import { FaWindowClose, FaCheck } from 'react-icons/fa'
import './style.css'
import { useState, useEffect } from 'react'

const ModalCard = ({image, title, detail, objectifs, tools, urlWebsite, source, closeModal}) => {
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
                <div className='modal-closeBtn'>
                    <FaWindowClose className='closeBtn' size={20} color='#000' onClick={() => closeModal(false)}/>
                </div>
                <img className='work-img' src={image} alt={title} />
                <div className='work-content'>
                    <h2>{title}</h2>
                    <div className='work-section detail'>
                        <h3>Contexte</h3>
                        <p>{detail}</p>
                    </div>
                    <hr />
                    <div className='work-section objective'>
                        <h3>Objectifs</h3>
                        <ul>
                            {data &&
                                objectifs.map((detail, index) =>
                                <li className='detail'>
                                    <FaCheck key={index} size={15}/>
                                    <p>
                                        {detail}
                                    </p>
                                </li>
                                )
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className='work-section tools'>
                        <h3>Outils utilisés</h3>
                        <ul className='list-tools'>
                            {data &&
                                tools.map((detail, index) =>
                                <li key={index}>
                                    {detail}
                                </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='work-links'>
                        <a href={urlWebsite} className="btn-modal">site web</a>
                        <a href={source} className="btn-modal">source Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCard