import React from 'react'
import styles from './contact.module.css';
import Card from './Card/Card';
import saket from '../../images/saket.jpeg'
// import Kajal from '../../images/Kajal.jpeg'
import shuvam from '../../images/shuvam.jpeg'

function Contact() {
  return (
    <div className={styles.cov}>
      <h1>CONTACT US</h1>
      <div className={styles.main}>
          <Card img={shuvam} name="Shuvam Vidyarthy" job="Publicity and Media Head, Design Coordinator" num="9352123916" email="shuvam.vidyarthy@ktj.in" fb = "https://www.facebook.com/Shuvam.V123?mibextid=ZbWKwL" li="https://www.linkedin.com/in/shuvam-vidyarthy-453ab9257"/>
          {/* <Card img={Kajal} name="Kajal Singh" job="Publicity Head, Design Coordinator, Auto Expo Coordinator" num="8433450232" email="singh.kajal@ktj.in" fb = "https://www.facebook.com/profile.php?id=100016684572655" li="https://www.linkedin.com/in/kajal-singh-164242213"/> */}
          <Card img={saket} name="Saket Dhawale" job="Publicity and Media Head, Megashows Coordinator, Exhibition and Auto Expo Coordinator" num="7709451669" email="saket.dhawale@ktj.in" fb = "https://www.facebook.com/profile.php?id=100087486103011" li="https://www.linkedin.com/in/saket-dhawale-22990a1b8/"/>
      </div>
    </div>
  );
}

export default Contact;