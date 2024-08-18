import styles from './incentive25.module.css';

function incBox({text, imgThin, imgThick, title}){
    return(
        <div className={styles.incBox}>

            <div className={styles.incImgBox}>
                <img className={styles.incImgShadow} src={imgThick} />
                <img className={styles.incImg} src={imgThin} />
            </div>
            <p className={styles.incText}>{text}</p>
        </div>
    );
}

export default incBox;