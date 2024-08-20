import React from "react"
import styles from "./Card.module.css"

function Card(props){
    return <>
    <div className={styles.cardMain}>
        <div className={styles.cardHead}>
            <div className={styles.cardHeadImg}><img src="/logo192.png" alt="img" /></div>
            <div className={styles.cardHeadDesc}>
                <p>My name is Neel</p>
                <p>My name is Neel</p>
            </div>
        </div>
        <div className={styles.cardDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eaque tempora distinctio consequatur, quod quaerat deserunt illo voluptates sint vel unde in corporis eum optio, quibusdam, velit expedita vitae! Dolore.
        </div>
    </div>
    </>
}
export default Card;