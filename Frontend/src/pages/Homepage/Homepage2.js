import React from 'react';
import styles from './Homepage.module.css';
import About from '../About/about';
import CarouselComponent from '../Carousel/car';
import Navbar from '../../components/navbar/navbar';
import bg from "../../images/bg.png"
import Incentives from '../Incentives/incentive';
import Contact from '../ContactUs/contact';
import Footer from '../../components/footer/footer';
// import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Responsibility from '../Responsibility/responsibility';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navabr/>
            <div className={styles.container}>
                <div className={styles.bg1}> 
                <div className={styles.bg2}> <img src={bg}/>
                </div>
                <div className={styles.bg}> 
                <h2 className ={styles.head2}> You are Registered Successfully </h2>
                <br/>
                    <h1 className={styles.heading}>CAMPUS AMBASSADOR PROGRAM</h1>
                    <h2 className ={styles.head2}>KSHITIJ, IIT KHARAGPUR</h2>
                    
                </div>
                </div>
                <div id ="about" className={styles.scroll}><About/></div>
                <div id = "resp" className={styles.scroll}><Responsibility/></div>
                <div id="inc" className={styles.scroll}><Incentives/></div>
                <div id="testimonials" className={styles.scroll}><CarouselComponent/></div>
                <div id="contact" className={styles.scroll}><Contact/></div>
            </div>
            <Footer/>
        </div>
    );

}

export default Home;