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

function BubbleSVG({ imageUrl }) {
    return (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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

function Home() {

    const [auth, setAuth] = useState(false);
    const [ca_id, setca_id] = useState(null);
    const [app_id, setapp_id] = useState(null);
    const [sel, setSel] = useState("no");
    const [currentImage1, setCurrentImage1] = useState("https://imgs.search.brave.com/KvtKA-aHPfEd3UR43m53uiv8LRufrwUZbmmFdVuKApM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/b29zdGVuZGUuc3Zn");
    const [currentImage2, setCurrentImage2] = useState("https://imgs.search.brave.com/mvYEUp4fGGoTL3wj9UcNRHHClxI781ReaoMZEkQtK4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC8wL2YvMy8x/Nzg5NzUuanBn");
    const [currentImage3, setCurrentImage3] = useState("https://imgs.search.brave.com/v2_dF5QhQY92igXcUPrGI3XWJpaDbF2j6ttUg5rJQww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEx/LzM2MF9GXzY5MjEx/MTE3N19yVFBNR0E5/a2piS0VwVWR1MDM5/aVZYeWppTDlJd1lG/Zy5qcGc");
    const [currentImage4, setCurrentImage4] = useState("https://imgs.search.brave.com/Kb1SwFkzoPexoZ2C7h5FaxVEGex9jwVuOiwN2FptH0s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vYzJmY2Jh/ZTFhYzJkY2RiZjI0/YWYxZTM5NGI5NWNk/ZTA2MzVjYmM3MC03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw");
    const [currentImage5, setCurrentImage5] = useState("https://imgs.search.brave.com/Dmu1WbEjb5fRHySnJBihlPEqnjyXIQNkdXQ24nge6iY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2V0YW1iYXNzYWRv/ci5jb20vaHViZnMv/MTclMjBPbmJvYXJk/aW5nJTIwU3VwcG9y/dC5zdmc");
    const imageUrls1 = [
        "https://imgs.search.brave.com/uGcAcXzNsyfMmtM5WS6_6Gw605o0vxHPH7bNNY2biUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ1Mjcw/NjQvc2NyZWVuc2hv/dHMvMTgzMjU0NTQv/bWVkaWEvMTFjM2Nm/ZmU0YWNmMTA1ZWI3/ZjIxYjdlOTRkNGVl/NTEuanBnP3Jlc2l6/ZT00MDB4MA",
        "https://imgs.search.brave.com/ZV--mmAxNhGsu67cF6Nw6uYEPcuUcyDpvPQMBrNK77A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc4L0ZhaXJfdXNl/X2xvZ28uc3Zn",
    ]
    const imageUrls2= [
        "https://imgs.search.brave.com/mvYEUp4fGGoTL3wj9UcNRHHClxI781ReaoMZEkQtK4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC8wL2YvMy8x/Nzg5NzUuanBn",
        "https://imgs.search.brave.com/KvtKA-aHPfEd3UR43m53uiv8LRufrwUZbmmFdVuKApM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/b29zdGVuZGUuc3Zn",
    ];
    const imageUrls3= [
        "https://imgs.search.brave.com/v2_dF5QhQY92igXcUPrGI3XWJpaDbF2j6ttUg5rJQww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEx/LzM2MF9GXzY5MjEx/MTE3N19yVFBNR0E5/a2piS0VwVWR1MDM5/aVZYeWppTDlJd1lG/Zy5qcGc",
        "https://imgs.search.brave.com/yGuWGfulBS1q477IfG92RFoikNO6xwP5GMRYE15_rd0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2V0YW1iYXNzYWRv/ci5jb20vaHViZnMv/MzElMjBTaW5nbGUl/MjBTaWduLU9uLnN2/Zw",
    ];
    const imageUrls4= [
        "https://imgs.search.brave.com/FGq5q0HfOitAJK_fBu1cfmPRInor6a7rs0vaTQoPfiQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC8z/MjUtMzI1NDA1NV9h/bWJhc3NhZG9yLWxv/Z28tYW1iYXNzYWRv/ci1jbHViLXNkYS5w/bmc",
        "https://imgs.search.brave.com/Kb1SwFkzoPexoZ2C7h5FaxVEGex9jwVuOiwN2FptH0s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vYzJmY2Jh/ZTFhYzJkY2RiZjI0/YWYxZTM5NGI5NWNk/ZTA2MzVjYmM3MC03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw",
    ];
    const imageUrls5= [
        "https://imgs.search.brave.com/Dmu1WbEjb5fRHySnJBihlPEqnjyXIQNkdXQ24nge6iY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2V0YW1iYXNzYWRv/ci5jb20vaHViZnMv/MTclMjBPbmJvYXJk/aW5nJTIwU3VwcG9y/dC5zdmc",
        "https://imgs.search.brave.com/7jGumoA5Inj4_jr2GOUNYp4ROAo6tPS5N28CnIW2xcQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduZXZvLmNv/bS9tZWRpYS9jb21f/dGVtcGxhdGUvaW1h/Z2VzL2NuZXRfbG9n/b18yNTAud2VicA",
    ];

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
                <div id="testimonials" className={styles.scroll}><CarouselComponent /></div>
                <div id="faq"><Faq /></div>
                <div id="contact" className={styles.scroll}><Contact /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;