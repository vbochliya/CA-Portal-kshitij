import React from 'react'
import styles from './Card.module_NEW.css'
import ReactPlayer from 'react-player'
function CardV(props) {
    return (
        <div className={styles.elem}>
            <div className={styles.boxVideo}>
            <ReactPlayer  
              width={'100%'} 
            //  display = "grid"
            //  margin = "50px"
            //  height = "70%"
            //  align-items= "center"
            //  justify-items = "center"
            //  justify-self = "center"
            //  padding =  "3rem 3rem"
             background-color = "rgba(255, 255, 255, 1)" 
              url={props.VIDEO_PATH} controls={true} /> 
              {/* <video width="auto">
                <source src={props.VIDEO_PATH} type="video/mp4" preload="auto" autoplay controls/>
              </video> */}
            </div>
            {/* <div className={styles.dv1}>
            <div className={styles.p1}>{props.name} </div>
            <div className={styles.p2}>{props.inst}, {props.city} </div>
            <p className={styles.para}>{props.desc} </p></div> */}
        </div>
    )
}

export default CardV