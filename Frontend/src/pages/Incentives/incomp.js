import styles from './incentive.module.css';


function Incomp(props){
    return(
        <div className={styles.elem}>
            <img className={styles.circle} src={props.img} ></img>
            <p className={styles.para}><b style={{fontSize: '1.8rem'}}> {props.text}</b></p>
        </div>
    );
}

export default Incomp;