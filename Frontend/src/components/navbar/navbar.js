import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import img1 from "../../images/icon2.png"
import { Link } from 'react-router-dom';
import Api from '../../API/Api';

const Navbarold = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };



    Api.get(`/user/login_check`, requestOptions).then((res) => {

      // console.log(res.data);
      console.log(res?.data?.user);
      if(res?.data?.user?.selection == "yes"){
        setUser(res?.data?.user);
      }
    }).catch((err) => {
      console.log(err);
    })


  }, [])
  const calllogout=()=>{
    localStorage.removeItem('token');
    
    window.location.href = '/'; 
    // alert('successfully Logout!!')
    // <Link to="/SignIn"></Link>

  }
  const find=()=>{
    
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };
    
    Api.get(`/user/login_check`, requestOptions).then((res) => {

      // console.log(res.data);
      // console.log(res?.data?.user);
      if(res?.data?.user){
        setUser(res?.data?.user);
        return true;
      }
    })
    return false;
  }
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      < div className={classes.main_nav}>

        <div className={classes.logo}>

          <img src={img1} alt="" />
          <span>KSHITIJ</span>
        </div>


        <div
          className={
            showMediaIcons ? `${classes.menu_link} ${classes.mobile_menu_link}` : `${classes.menu_link}`
          } >
          <ul>
            <li>
              <a href="/" onClick={() => setShowMediaIcons(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setShowMediaIcons(false)}>About Us</a>
            </li>
            <li>
              <a href="#resp" onClick={() => setShowMediaIcons(false)}>Responsibilities</a>
            </li>
            <li>
              <a href="#inc" onClick={() => setShowMediaIcons(false)}>Incentives</a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setShowMediaIcons(false)}>Testimonials</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowMediaIcons(false)}>Contact</a>
            </li>
            <li>
              <div className="button">
                {!props.show ? (<><button
                  className={classes.sign}>
                  <Link to="/Signup">Sign Up</Link>
                </button>
                  <button className={classes.sign} >
                    <Link to="/SignIn">Sign In</Link>
                  </button></>) : (<><button
                    className={classes.sign}>
                    <Link to="/Profile">Profile</Link>
                  </button>
                  <button
                    className={classes.logoutdevice} onClick={calllogout}>
                     {/* {user.first_name} */}
                     logout
                  </button>
                  {/* <button
                    className={classes.sign}>
                    <Link to="/Dashboard">Dashboard</Link>
                  </button> */}
                  {user?.selection === "yes" ? <button className={classes.sign} >
                    <Link to="/Dashboard">Dashboard</Link>
                  </button> :""}

                  </>)

                }

              </div>
            </li>
          </ul>
        </div>

        <div className={classes.hamburger_menu}>
          <a onClick={() => setShowMediaIcons(!showMediaIcons)
            // humburger.classList.remove('GiHamburgerMenu');
            // humburger.classList.add('GiWideArrowDunk');
          }>
            <GiHamburgerMenu style={{ color: "white", marginBottom: "0.5rem", userSelect: "none" }} />
          </a>
        </div>
      </div>
    </>

  );
};
export default Navbarold;
