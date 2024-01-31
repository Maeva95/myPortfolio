import styles from '../HeroImg2/style.module.css'
import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";

export default function HeroImage2 (props) {
    return (
        <div className={styles.heroImg}>
            <div className={styles.maskImage}>
                <img className={styles.intoImg} src={props.image} alt="IntoImg" />
                <div className={styles.heading}>
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                    <a href={props.link}>
                        <svg className={styles.iconContainer} >
                            <defs>
                                <linearGradient id='myGradient' gradientTransform='rotate(52)'>
                                    <stop offset='0%' style={{stopColor: "rgba(131,58,180,1)"}}/>
                                    <stop offset='40%' style={{stopColor: "rgba(253,29,29,1)"}}/>
                                    <stop offset='100%' style={{stopColor: "rgba(248,252,69,1)"}}/>
                                </linearGradient>
                            </defs>
                        <FaAngleDoubleDown style={{ fill: "url(#myGradient)" }} size={80}/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )

}
