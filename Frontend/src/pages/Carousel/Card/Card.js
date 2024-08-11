import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.elem}>
            <div className={styles.box}><img src={props.img} alt="dp"></img></div>
            <div className={styles.dv1}>
                <div className={styles.p1}>{props.name} </div>
                <div className={styles.p2}>{props.inst}, {props.city} </div>
                <p className={styles.para}>{props.desc} </p>
            </div>
        </div>
    )
}

export default Card