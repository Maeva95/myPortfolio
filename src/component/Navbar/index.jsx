import React, { useState } from "react";
import "./style.css"
import { Link, NavLink } from "react-router-dom";
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
            <Link to="/">
                <h1>Mon portfolio .</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to='/'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/projet'>Mes projets</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>A propos</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
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