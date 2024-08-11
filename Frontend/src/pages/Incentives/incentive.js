import styles from './incentive.module.css';
import Incomp from './incomp';
import img from '../../images/certificate.png'
import img1 from '../../images/invitation.png'
import img2 from '../../images/global-networking.png'
import img3 from '../../images/podium.png'
import img4 from '../../images/portfolio.png'

function Incentives() {
    return (
        <div className={styles.cov}>
            <h1 className={styles.heading}>INCENTIVES</h1>
            <div className={styles.main}>
                <div className={styles.sub}><div className={styles.o}><Incomp img={img} text="Certificate of Appreciation signed by the Chairman, 
            Kshitij IIT Kharagpur and President, Gymkhana IIT Kharagpur after the successful completion of the tenure."/></div></div>
                <div className={styles.sub}><div className={styles.e}><Incomp img={img1}  text="Invitation to all the events conducted 
            by Kshitij IIT Kharagpur."/></div></div>
                <div className={styles.sub}><div className={styles.o}><Incomp img={img2}  text="Extensive networking with students of IIT 
            Kharagpur and students from various colleges."/></div></div>
                <div className={styles.sub}><div className={styles.e}><Incomp img={img3} text="A special post will be released on Kshitij's 
            social media handles announcing the top 10 best campus ambassadors."/></div></div>
                <div className={styles.sub}><div className={styles.o}><Incomp img={img4}  text="Goodies and Hampers after the fest." /></div></div>
            </div>
        </div>
    );
}

export default Incentives;