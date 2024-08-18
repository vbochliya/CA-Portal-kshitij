import React, { useEffect, useState } from 'react';
// import bg from "../../images/HomeBG24_long.png"
import styles from './HomepageNew.module.css';
import About from '../About/aboutnew';
import CarouselComponent from '../Carousel/car';
import Navbar from '../../components/navbar/Navbarnew';
import Incentives from '../Incentives/incentive';
import IncentivesNew from '../Incentives/incentive25';
import Contact from '../ContactUs/contact';
import Footer from '../../components/footer/footer';
// import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Responsibility from '../Responsibility/responsibilitynew';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Faq from '../Faq/Faq';
import Api from '../../API/Api';

function Home() {

    const [auth, setAuth] = useState(false);
    const [ca_id, setca_id] = useState(null);
    const [app_id, setapp_id] = useState(null);
    const [sel, setSel] = useState("no");

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
                        <h1 className={styles.heading1} >CAMPUS AMBASSADOR</h1>
                        <h3 className={styles.heading3} >Kshitij, IIT Kharagpur presents the Campus Ambassador Programme with the goal of fostering in you the essential leadership qualities.</h3>


                        {
                            auth ?
                                <>
                                    <h1 className={styles.btn} > {sel === "yes" ? "Congratulations! You are selected" : "Your Application is in Progress"} </h1>
                                    <div className={styles.info}>Your Application ID is <span className={styles.applicationId}>{app_id}</span></div>
                                </>

                                :

                                <Link to="/SignUp">
                                    <div className={styles.btn} variant="contained">
                                        Register for CA Programme
                                    </div>
                                </Link>

                        }
                        <div className={styles.spon}>
                            powered by <a href="https://academor.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.postimg.cc/W4psNT4L/ca.png" alt="Academor" />
                            </a>

                        </div>

                    </div>
                    <img className={styles.bgCoverImg} src="https://i.postimg.cc/VLWv3pF9/home-main-img.png" alt="" />

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
