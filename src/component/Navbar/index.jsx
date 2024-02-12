import React, { useState } from "react";
import "./style.css"
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)

    return (
        <header className={color ? "header header-bg" : "header"}>
            <a href="/">
                <h1 className={color ? "heading-header color" : "heading-header"}><span>Mon</span> portfolio.</h1>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li onClick={handleClick}>
                    <a href="#accueil" className={color ? "nav-link nav-link-color" : "nav-link"} >Accueil</a>
                </li>
                <li className={color ? "nav-link nav-link-color" : "nav-link"} onClick={handleClick}>
                    <a href="#projet" className={color ? "nav-link nav-link-color" : "nav-link"} >Mes projets</a>
                </li>
                <li className={color ? "nav-link nav-link-color" : "nav-link"} onClick={handleClick}>
                    <a href="#about" className={color ? "nav-link nav-link-color" : "nav-link"} >A propos</a>
                </li>
                <li className={color ? "nav-link nav-link-color" : "nav-link"} onClick={handleClick}>
                    <a href="#contact" className={color ? "nav-link nav-link-color" : "nav-link"} >Contact</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#9F70FD"}}/>
                ) : (
                    <FaBars size={20} style={{ color: "#9F70FD"}}/>
                )    
            }
            </div>
        </header>
    )
}