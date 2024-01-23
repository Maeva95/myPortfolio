import React, { useState } from "react";
import "./style.css"
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <header>
            <Link to="/">
                <h1>Portfolio .</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to='/'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/projets'>Mes projets</NavLink>
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