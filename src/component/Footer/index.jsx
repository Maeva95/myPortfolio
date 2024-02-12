import React from 'react'
import './style.css'
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='phone'>
                    <h4>                    
                        <FaPhone 
                            size={20} 
                            style={{
                                color: "#EEEEEE",
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
                                color: "#EEEEEE",
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
                    <div className='social-link'>
                        <a href="www.linkedin.com/in/maeva-tarati">
                            <FaLinkedin 
                                size={30} 
                                style={{
                                    color: "#FF8911",
                                    marginRight: "2rem"
                                }}
                            />
                        </a>
                        <a href="https://github.com/Maeva95">
                            <FaGithub 
                                size={30} 
                                style={{
                                    color: "#7F27FF",
                                    marginRight: "2rem"
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer