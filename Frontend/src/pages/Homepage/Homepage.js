import React, { useEffect, useState } from "react";
import bg from "../../images/bg.png";
import styles from "./Homepage.module.css";
//import About from '../About/about';
import About from "../About/aboutnew";
import Carousel3DComponent from "../Carousel/carousel.js";
// import CarouselComponent from "../Carousel/car";
import Navbar from "../../components/navbar/Navbarags";
import Incentives from "../Incentives/incentive25";
import Contact from "../ContactUs/contact";
import Footer from "../../components/footer/footer";
// import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Responsibility from "../Responsibility/ResponsibilityFuturistic";
import axios from "axios";
import { Link } from "react-router-dom";
import Faq from "../Faq/Faq";
import Api from "../../API/Api";

function Home() {
  const [auth, setAuth] = useState(false);
  const [ca_id, setca_id] = useState(null);
  const [app_id, setapp_id] = useState(null);
  const [sel, setSel] = useState("no");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    Api.get(`/user/login_check`, requestOptions)
      .then((res) => {
        console.log("we are printing on home page ");
        console.log(res.data.user);
        setca_id(res.data.user.ca_id);
        setapp_id(res.data.user.app_id);
        setSel(res.data.user.selection);
        setAuth(true);
      })
      .catch((err) => {
        console.log(err);
        setAuth(false);
      });
  }, []);

  return (
    <div>
      <Navbar show={auth} />
      <div className={styles.container}>
        <div className={styles.bg1}>
          <div className={styles.bg2}>
            {" "}
            <img src={bg} />
          </div>
          <div className={styles.bg}>
            <h1 className={styles.heading}>CAMPUS AMBASSADOR PROGRAM</h1>
            <h2 className={styles.head2}> KSHITIJ, IIT KHARAGPUR</h2>

            {auth ? (
              <>
                <h1 className={styles.btn}>
                  {" "}
                  {sel === "yes"
                    ? "Congratulations! You are selected"
                    : "Your Application is in Progress"}{" "}
                </h1>
                <div className={styles.info}>
                  Your Application ID is{" "}
                  <span style={{ fontWeight: "bold" }}>{app_id}</span>
                </div>
              </>
            ) : (
              <>
              <Link to="/SignUp">
                <div className={styles.btn} variant="contained">
                  Register for CA Programme
                </div>
              </Link>
              powered by <img src=""/>
              </>

            )}
          </div>
        </div>
        <div id="about" className={styles.scroll}>
          <About />
        </div>
        <div id="resp" className={styles.scroll}>
          <Responsibility />
        </div>
        <div id="inc" className={styles.scroll}>
          <Incentives />
        </div>
        <div id="testimonials" className={styles.scroll}>
          {/* <CarouselComponent /> */}
          <Carousel3DComponent />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="contact" className={styles.scroll}>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
