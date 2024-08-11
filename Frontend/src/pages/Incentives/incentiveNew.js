import styles from './incentiveNew.module.css';
import IncBox from './incentiveBoxNew';
// import img0 from '../../images/certificate.png'
// import img1 from '../../images/invitation.png'
// import img2 from '../../images/global-networking.png'
// import img3 from '../../images/podium.png'
// import img4 from '../../images/portfolio.png'

function Incentives() {

    const img0 = "https://i.postimg.cc/MKDnC1V5/certificate.png"
    const img1 = "https://i.postimg.cc/Cxrz1Yvf/invitation.png"
    const img2 = "https://i.postimg.cc/5tZyBgW4/portfolio.png"
    const img3 = "https://i.postimg.cc/kgg2qDym/global-networking.png"
    const img4 = "https://i.postimg.cc/nLsM955S/podium.png"

    return (
        <div className={styles.cov}>
            <h1 className={styles.heading}>INCENTIVES</h1>
            <div className={styles.main}>

                <IncBox
                    img={img0}
                    text={"Certificate of Appreciation signed\nby the Chairman, Kshitij IIT\nKharagpur and President,\nGymkhana IIT Kharagpur after the\nsuccessful completion of the tenure"}
                />
                
                <IncBox
                    img={img1}
                    text={"Invitation to all the events\nconducted by Kshitij IIT Kharagpur\n "}
                />
                
                <IncBox
                    img={img2}
                    text={"\n\n\nGoodies and Hampers\nafter the fest"}
                />
                <IncBox
                    img={img3}
                    text={"Extensive networking with\nstudents of IIT Kharagpur and\nstudents from various colleges"}
                />
                <IncBox
                    img={img4}
                    text={"\nA special post will be released on\nKshitij's social media handles\nannouncing the top 10 best\ncampus ambassadors"}
                />

            </div>
        </div>
    );
}

export default Incentives;