import React, { useEffect, useState } from 'react';
import styles from './HomepageNew.module.css';
import About from '../About/aboutnew';
import CarouselComponent from '../Carousel/car';
import Navbar from '../../components/navbar/Navbarnew';
import IncentivesNew from '../Incentives/incentive25';
import Contact from '../ContactUs/contact';
import Footer from '../../components/footer/footer';
import Responsibility from '../Responsibility/responsibilitynew';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Faq from '../Faq/Faq';
import Api from '../../API/Api';
import ambassadorImage from '../Homepage/ambassador.jpg';
import caImage from '../Homepage/CAp.jpg';
import publicImage from '../Homepage/public-relation.jpg'
import influencerImage from '../Homepage/influencer.jpg'
import independenceImage from '../Homepage/independence.jpg'
import CompanyIncentives from '../companyIncentives/CompanyIncentives';

function Home() {
    const [auth, setAuth] = useState(false);
    const [ca_id, setca_id] = useState(null);
    const [app_id, setapp_id] = useState(null);
    const [sel, setSel] = useState("no");
    const [currentImage1, setCurrentImage1] = useState(ambassadorImage);
    const [currentImage2, setCurrentImage2] = useState(caImage);
    const [currentImage3, setCurrentImage3] = useState(publicImage);
    const [currentImage4, setCurrentImage4] = useState(influencerImage);
    const [currentImage5, setCurrentImage5] = useState(independenceImage);

    // Animation state management
    const [showHeading1, setShowHeading1] = useState(false);
    const [showHeading3, setShowHeading3] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [heading1Text, setHeading1Text] = useState('');
    const [heading3Text, setHeading3Text] = useState('');
    const [showCursor1, setShowCursor1] = useState(false);
    const [showCursor3, setShowCursor3] = useState(false);

    const fullHeading1Text = "CAMPUS AMBASSADOR";
    const fullHeading3Text = "Kshitij, IIT Kharagpur presents the Campus Ambassador Programme with the goal of fostering in you the essential leadership qualities.";

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        };
        Api.get(`/user/login_check`, requestOptions).then((res) => {
            console.log("we are printing on home page ")
            console.log(res.data.user);
            setca_id(res.data.user.ca_id);
            setapp_id(res.data.user.app_id);
            setSel(res.data.user.selection);
            setAuth(true);
        }).catch((err) => {
            console.log(err);
            setAuth(false);
        })

        // Sequential animation timing
        setTimeout(() => {
            setShowHeading1(true);
            setShowCursor1(true);
            
            // Type out heading1 character by character
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex < fullHeading1Text.length) {
                    setHeading1Text(fullHeading1Text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    // Remove cursor after typing is complete
                    setTimeout(() => setShowCursor1(false), 500);
                }
            }, 150); // 150ms per character for heading1
        }, 500);
        
        // Start heading3 typing animation
        setTimeout(() => {
            setShowHeading3(true);
            setShowCursor3(true);
            
            // Type out heading3 character by character
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex < fullHeading3Text.length) {
                    setHeading3Text(fullHeading3Text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    // Remove cursor after typing is complete
                    setTimeout(() => setShowCursor3(false), 500);
                }
            }, 50); // 50ms per character for heading3
        }, 3500);
        
        setTimeout(() => setShowButton(true), 9000);
    }, [])

    return (
        <div>
            <Navbar show={auth} />
            <div className={styles.container}>
                <div className={styles.homeMain}>
                    <div className={styles.homeContent}>
                        <h1 className={`${styles.heading1} ${showHeading1 ? styles.showHeading1 : styles.hiddenHeading}`}>
                            {heading1Text}
                            {showCursor1 && <span className={styles.cursor}>|</span>}
                        </h1>
                        <h3 className={`${styles.heading3} ${showHeading3 ? styles.showHeading3 : styles.hiddenHeading}`}>
                            {heading3Text}
                            {showCursor3 && <span className={styles.cursor}>|</span>}
                        </h3>
                        
                        <div className={`${styles.buttonContainer} ${showButton ? styles.showButton : styles.hiddenButton}`}>
                            {auth ? (
                                <>
                                    <h1 className={styles.btn}>
                                        {sel === "yes" ? "Congratulations! You are selected" : "Your Application is in Progress"}
                                    </h1>
                                    <div className={styles.info}>
                                        Your Application ID is <span className={styles.applicationId}>{app_id}</span>
                                    </div>
                                </>
                            ) : (
                                <Link to="/SignUp">
                                    <button className={styles['animated-cta-button']} variant="contained">
                                        <div className={styles['animated-cta-container']}>
                                            <div className={`${styles['btn-main-icon-block']} ${styles['is-left']}`}></div>
                                            <div className={`${styles['btn-main-icon-block']} ${styles['is-top']}`}></div>
                                            <div className={`${styles['btn-main-icon-block']} ${styles['is-right']}`}></div>
                                            <div className={`${styles['btn-main-icon-block']} ${styles['is-bottom']}`}></div>
                                        </div>
                                        <span className={styles.reg}>Register for CA Programme</span>
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                <div id="about" className={styles.scroll}><About /></div>
                <div id="resp" className={styles.scroll}><Responsibility /></div>
                <div id="inc" className={styles.scroll}><IncentivesNew /></div>
                <div id="companyInc" className={styles.scroll}><CompanyIncentives /></div>
                <div id="testimonials" className={styles.scroll}><CarouselComponent /></div>
                <div id="faq"><Faq /></div>
                <div id="contact" className={styles.scroll}><Contact /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;