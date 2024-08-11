import React from 'react'
import { MdEmail, MdFacebook } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import styles from './Card.module.css'

function Card(props) {

    const email = "mailto:" + props.email;

    return (
        <div className={styles.card}>
            <div className={styles.circle}>
                <img src={props.img} alt={props.name}></img>
            </div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.job}>{props.job}</div>
            <div className={styles.icons}><a href={email}><MdEmail /></a>&nbsp;<a href={props.fb}><MdFacebook /></a>&nbsp;<a href={props.li}><AiFillLinkedin /></a></div>
            <div className={styles.num}>{props.num}</div>
        </div>
    )
}

export default Card