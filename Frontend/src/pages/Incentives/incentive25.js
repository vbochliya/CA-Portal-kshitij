import styles from './incentive25.module.css';
import IncBox from './incentiveBox25';

function Incentives() {

    const img0thin = "https://i.postimg.cc/J42GVj2N/image.png"
    const img0thick = "https://i.postimg.cc/vmLYBn3S/imagebold.png"
    const img1thin = "https://i.postimg.cc/grnqtsYL/com-thin.png"
    const img1thick = "https://i.postimg.cc/ZnjVM0p2/com-thick.png"
    const img3thin = "https://i.postimg.cc/JhVpqH5c/global-network-thin.png"
    const img3thick = "https://i.postimg.cc/MpjsVmVp/global-network-thick.png"
    const img4thin = "https://i.postimg.cc/BPnqNtW2/podium-thin.png"
    const img4thick = "https://i.postimg.cc/sQcjp7LV/podium-thick.png"

    return (
        <div className={styles.cov}>
            <h1 className={styles.heading}>INCENTIVES</h1>
            <div className={styles.main}>

                <IncBox
                    imgThick={img0thick}
                    imgThin={img0thin}
                    text={"Certificate of Appreciation signed\nby the Chairman, Kshitij IIT\nKharagpur and President,\nGymkhana IIT Kharagpur after the\nsuccessful completion of the tenure."}
                />
                
                <IncBox
                    imgThin={img1thin}
                    imgThick={img1thick}
                    text={"Invitation to all the events\nconducted by Kshitij IIT Kharagpur. Goodies and Hampers\nafter the fest."}
                />
                <IncBox
                    imgThin={img3thin}
                    imgThick={img3thick}
                    text={"Extensive networking with\nstudents of IIT Kharagpur and\nstudents from various colleges."}
                />
                <IncBox
                    imgThin={img4thin}
                    imgThick={img4thick}
                    text={"\nA special post will be released on\nKshitij's social media handles\nannouncing the top 10 best\ncampus ambassadors."}
                />

            </div>
        </div>
    );
}

export default Incentives;