import React from 'react'
import './style.css'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome 
                        size={20} 
                        style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }}
                    />
                    <div>
                        <p>270 rue du Général Leclerc</p>
                        <p>95130 Franconville</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>                    
                        <FaPhone 
                            size={20} 
                            style={{
                                color: "#fff",
                                marginRight: "2rem"
                            }}
                        />
                        06.95.14.43.91
                    </h4>
                </div>
                <div className='mail'>
                    <h4>
                        <FaMailBulk 
                            size={20} 
                            style={{
                                color: "#fff",
                                marginRight: "2rem"
                        }}
                        />
                        maeva.tarati@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <div className='social'>
                    <h4>About me</h4>
                    <p>Je serai ravie de pouvoir discuter de vos nouveaux projets...</p>
                    <FaLinkedin 
                        size={20} 
                        style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }}
                    />
                    <FaGithub 
                        size={20} 
                        style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }}
                    />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer