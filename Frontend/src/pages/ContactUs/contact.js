import React from 'react'
import styles from './contact.module.css';
import Card from './Card/Card';
import Pratap from '../../images/Pratap.jpeg'
// import Kajal from '../../images/Kajal.jpeg'
import Rupesh from '../../images/Rupesh.jpeg'

function Contact() {
  return (
    <div className={styles.cov}>
      <h1>CONTACT US</h1>
      <div className={styles.main}>
          <Card img={Pratap} name="Pratap Kodate" job="Publicity Head, Design Coordinator" num="9604420725" email="pratap.kodate@ktj.in" fb = "https://www.facebook.com/profile.php?id=100075473537939&mibextid=nW3QTL" li="https://www.linkedin.com/in/pratapk30"/>
          {/* <Card img={Kajal} name="Kajal Singh" job="Publicity Head, Design Coordinator, Auto Expo Coordinator" num="8433450232" email="singh.kajal@ktj.in" fb = "https://www.facebook.com/profile.php?id=100016684572655" li="https://www.linkedin.com/in/kajal-singh-164242213"/> */}
          <Card img={Rupesh} name="Rupesh Raj" job="Publicity Head, Overseas coordinator" num="9661056875" email="rupesh.raj@ktj.in" fb = "https://instagram.com/saurabhsuman_official_?igshid=ZGUzMzM3NWJiOQ==" li="https://www.linkedin.com/in/rupesh-raj-ba61b8223"/>
      </div>
    </div>
  );
}

export default Contact;