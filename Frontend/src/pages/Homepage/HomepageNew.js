import React, { useEffect, useState } from 'react';
import styles from './HomepageNew.module.css'; // or './HomepageNew.module.scss' if using Option A
import Navbar from '../../components/navbar/Navbarags';
// import About from '../About/aboutnew';
import About from '../About/About26';
import CarouselComponent from '../Carousel/car';
import IncentivesNew from '../Incentives/incentive25';
import Incentives26 from '../Incentives/Incentives26/Incentives26';
import Contact from '../ContactUs/contact';
import Footer from '../../components/footer/footer';
import Footer26 from '../../components/footer/Footer26';
import Responsibility from '../Responsibility/ResponsibilityFuturistic';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Faq from '../Faq/Faq';
import Faq26 from '../Faq/Faq26';
import CompanyIncentives from '../companyIncentives/CompanyIncentives';
import Api from '../../API/Api';

function Home() {
  const [auth, setAuth] = useState(false);
  const [ca_id, setca_id] = useState(null);
  const [app_id, setapp_id] = useState(null);
  const [sel, setSel] = useState('no');

  // Animation state for headings/buttons (kept as your original)
  const [showHeading1, setShowHeading1] = useState(false);
  const [showHeading3, setShowHeading3] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [heading1Text, setHeading1Text] = useState('');
  const [heading3Text, setHeading3Text] = useState('');
  const [showCursor1, setShowCursor1] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);

  const fullHeading1Text = 'CAMPUS AMBASSADOR';
  const fullHeading3Text =
    'Kshitij, IIT Kharagpur presents the Campus Ambassador Programme with the goal of fostering in you the essential leadership qualities.';

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    Api.get(`/user/login_check`, requestOptions)
      .then((res) => {
        setca_id(res.data.user.ca_id);
        setapp_id(res.data.user.app_id);
        setSel(res.data.user.selection);
        setAuth(true);
      })
      .catch(() => setAuth(false));

    // Headings typing animation (same as your original)
    setTimeout(() => {
      setShowHeading1(true);
      setShowCursor1(true);
      let i = 0;
      const t1 = setInterval(() => {
        if (i < fullHeading1Text.length) {
          setHeading1Text(fullHeading1Text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(t1);
          setTimeout(() => setShowCursor1(false), 500);
        }
      }, 150);
    }, 500);

    setTimeout(() => {
      setShowHeading3(true);
      setShowCursor3(true);
      let j = 0;
      const t2 = setInterval(() => {
        if (j < fullHeading3Text.length) {
          setHeading3Text(fullHeading3Text.slice(0, j + 1));
          j++;
        } else {
          clearInterval(t2);
          setTimeout(() => setShowCursor3(false), 500);
        }
      }, 50);
    }, 3500);

    setTimeout(() => setShowButton(true), 9000);
  }, []);

  return (
    <div>
      <Navbar show={auth} />

      <div className={styles.container}>
        <div className={styles.homeMain}>
          <div className={styles.homeContent}>
            <h1
              className={`${styles.heading1} ${
                showHeading1 ? styles.showHeading1 : styles.hiddenHeading
              }`}
            >
              {heading1Text}
              {showCursor1 && <span className={styles.cursor}>|</span>}
            </h1>

            <h3
              className={`${styles.heading3} ${
                showHeading3 ? styles.showHeading3 : styles.hiddenHeading
              }`}
            >
              {heading3Text}
              {showCursor3 && <span className={styles.cursor}>|</span>}
            </h3>

            <div
              className={`${styles.buttonContainer} ${
                showButton ? styles.showButton : styles.hiddenButton
              }`}
            >
              {auth ? (
                <>
                  <h1 className={styles.btn}>
                    {sel === 'yes'
                      ? 'Congratulations! You are selected'
                      : 'Your Application is in Progress'}
                  </h1>
                  <div className={styles.info}>
                    Your Application ID is{' '}
                    <span className={styles.applicationId}>{app_id}</span>
                  </div>
                </>
              ) : (
                <Link to="/SignUp">
                  <button className={styles.btn11}>
                    {/* Optional corner blocks (decorative) */}
                    <span className="btn-main-icon-block is-left" />
                    <span className="btn-main-icon-block is-top" />
                    <span className="btn-main-icon-block is-right" />
                    <span className="btn-main-icon-block is-bottom" />
                    <span className={styles.reg}>Register for CA Programme</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div id="about" className={`${styles.scroll} ${styles.about}`}><About /></div>
        <div id="resp" className={styles.scroll}><Responsibility /></div>
        <div id="inc" className={styles.scroll}><Incentives26/></div>
        <div id="companyInc" className={styles.scroll}><CompanyIncentives /></div>
        <div id="testimonials" className={styles.scroll}><CarouselComponent /></div>
        {/* <div id="faq"><Faq /></div> */}
        <div id="faq" className={`${styles.faq}`}><Faq26 /></div>
        <div id="contact" className={styles.scroll}><Contact /></div>
      </div>

      <Footer26 />
    </div>
  );
}

export default Home;