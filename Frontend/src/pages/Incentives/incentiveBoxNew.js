import styles from './incentiveNew.module.css';

function incBox({text, img}){
    return(
        <div className={styles.incBox}>

            <div className={styles.incImgBox}>
                <img className={styles.incImgShadow} src={img} />
                <img className={styles.incImg} src={img} />
            </div>

            <p className={styles.incText}>{text}</p>
        </div>
    );
}

export default incBox;