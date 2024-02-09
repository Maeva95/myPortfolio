import styles from '../HeroImg2/style.module.css'
import React from 'react'

export default function HeroImage2 (props) {
    return (
        <div className={styles.heroImg}>
            <div className={styles.maskImage}>
                <img className={styles.intoImg} src={props.image} alt="IntoImg" />
                <div className={styles.heading}>
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )

}
