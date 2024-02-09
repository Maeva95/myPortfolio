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
                <h1>Mon portfolio .</h1>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li onClick={handleClick}>
                    <a href="#accueil">Accueil</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#projet">Mes projets</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#about">A propos</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff"}}/>
                ) : (
                    <FaBars size={20} style={{ color: "#fff"}}/>
                )    
            }
            </div>
        </header>
    )
}