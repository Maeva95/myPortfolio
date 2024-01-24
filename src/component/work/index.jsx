import React from 'react'
import { NavLink } from 'react-router-dom'

const Work = (props) => {
  return (
    <div className='work'>
        <h1 className='work-heading'>Projets</h1>
        <div className='work-container'>
            <div className='work-card'>
                <img src="" alt="" />
                <h2 className='work-title'>{props.title}</h2>
                <div className='work-section'>
                    <h3>Description</h3>
                    <p className='work-detail'>This is text {props.description} </p>
                </div>
                <div className='work-section'>
                    <h3>Objectifs</h3>
                    <ul className='work-detail'>
                        <li>{props.objectifs}</li>
                    </ul>
                </div>
                <div className='work-links'>
                    <NavLink to={props.urlWebsite} className='btn'>Voir</NavLink>
                    <NavLink to={props.source} className='btn'>Source</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work