import React, { useEffect, useState } from 'react';
import styles from './HomepageNew.module.css';
import About from '../About/aboutnew';
import CarouselComponent from '../Carousel/car';
import Navbar from '../../components/navbar/Navbarags';
import IncentivesNew from '../Incentives/incentive25';
import Contact from '../ContactUs/contact';
import Footer from '../../components/footer/footer';
import Responsibility from '../Responsibility/ResponsibilityFuturistic';
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

function BubbleSVG({ imageUrl }) {
    return (
        <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="bubbleClip">
                    <circle cx="50" cy="50" r="25" />
                </clipPath>
            </defs>
            <circle
                cx="50"
                cy="50"
                r="25"
                fill="rgba(173, 216, 230, 0.3)"
                stroke="rgba(173, 216, 230, 0.6)"
                strokeWidth="4"
            />
            <image
                href={imageUrl}
                width="50"
                height="50"
                x="25"
                y="25"
                clipPath="url(#bubbleClip)"
                preserveAspectRatio="xMidYMid slice"
            />
        </svg>
    );
}

function Homeags() {

    const [auth, setAuth] = useState(false);
    const [ca_id, setca_id] = useState(null);
    const [app_id, setapp_id] = useState(null);
    const [sel, setSel] = useState("no");
    const [currentImage1, setCurrentImage1] = useState(ambassadorImage);
    const [currentImage2, setCurrentImage2] = useState(caImage);
    const [currentImage3, setCurrentImage3] = useState(publicImage);
    const [currentImage4, setCurrentImage4] = useState(influencerImage);
    const [currentImage5, setCurrentImage5] = useState(independenceImage);


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


    }, [])


    return (
        <div>
            <Navbar show={auth} />
            <div className={styles.container}>
                <div className={styles.homeMain}>
                    <div className={styles.homeContent}>
                        <h1 className={styles.heading1}>CAMPUS AMBASSADOR</h1>
                        <h3 className={styles.heading3}>
                            Kshitij, IIT Kharagpur presents the Campus Ambassador Programme with the goal of fostering in you the essential leadership qualities.
                        </h3>
                        <div className={styles.bubbles}>
                            <div className={styles.bubble10}>
                                <BubbleSVG imageUrl={currentImage1} />
                            </div>
                            <div className={styles.bubble2}>
                                <BubbleSVG  imageUrl={currentImage2} />
                            </div>
                            <div className={styles.bubble3}>
                                <BubbleSVG  imageUrl={currentImage3} />
                            </div>
                            <div className={styles.bubble4}>
                                <BubbleSVG  imageUrl={currentImage4} />
                            </div>
                            <div className={styles.bubble5}>
                            <BubbleSVG imageUrl={currentImage5} />
                            </div>
                        </div>
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

export default Homeags;