import React, { useState, useEffect } from "react";
import classes from "./Navbarnew.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import img1 from "../../images/icon2.png";
// import img2 from "../../images/account 1.png";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../API/Api";


const Navbar = (props) => {
  const [user, setUser] = useState(null);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonText,setbuttonText] = useState('Logout');
  // const [hoveredLi, setHoveredLi] = useState(null); 

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
        // console.log(res.data);
        console.log(res?.data?.user);
        if (res?.data?.user) {
          setUser(res?.data?.user);
          setbuttonText(res?.data?.user.first_name)
          // return true;
        }
        // if (res?.data?.user?.selection == "yes") {
        //   setUser(res?.data?.user);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const calllogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
    // alert('successfully Logout!!')
    // <Link to="/SignIn"></Link>
  };
  const scrollToComponent = (e) => {
    e.preventDefault();
    // useNavigate(`${e.target.getAttribute("href")}`);
  };
  const find = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    Api.get(`/user/login_check`, requestOptions).then((res) => {
      // console.log(res.data);
      // console.log(res?.data?.user);
      if (res?.data?.user) {
        setUser(res?.data?.user);
        setbuttonText(user.first_name)
        return true;
      }
    });
    return false;
  };

  const handleMouseEnter = () => {
    // const logText = !isHovered ? user.first_name : 'Logout';
    setbuttonText('Logout')
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if(user){
      setbuttonText(user.first_name)
    }
    setIsHovered(false);
  };
    
  return (
    <>
      <div className={classes.main_nav} id="navbar">
        <div className={classes.logo}>
          <img src={img1} alt="" />
          <a href="/">
            <span className={classes.ktj}>KSHITIJ</span>
          </a>
        </div>

        <div
          className={
            showMediaIcons
              ? `${classes.menu_link} ${classes.mobile_menu_link}`
              : `${classes.menu_link}`
          }
        >
          <ul>
            <li>
              <a
                href="/#"
                data-hover="Home"
                onClick={() => {
                  setShowMediaIcons(false);
                  // scrollToComponent(e);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a href="/#about" data-hover="About Us" onClick={() => setShowMediaIcons(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="/#resp" data-hover="Responsibilities" onClick={() => setShowMediaIcons(false)}>
                Responsibilities
              </a>
            </li>

            <li>
              <a href="/#inc" data-hover="Incentives" onClick={() => setShowMediaIcons(false)}>
                Incentives
              </a>
            </li>
            <li>
              <a href="/#testimonials" data-hover="Testimonials" onClick={() => setShowMediaIcons(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="/#contact" data-hover="Contact" onClick={() => setShowMediaIcons(false)}>
                Contact
              </a>
            </li>
            {/* <li id="conditional-li"></li> */}
         
              <div className="button">
                {!props.show ? (
                  <>
                    {/* <button className={classes.sign}>
                      <Link to="/Signup">Sign Up</Link>
                    </button> */}
                    <a href="/Signup" className={classes.sign}>Sign Up</a>
                    {/* <button className={classes.sign}>
                      <Link to="/SignIn">Sign In</Link>
                    </button> */}
                     <a href="/SignIn" className={classes.sign}>Sign In</a>
                  </>
                ) : (
                  <>
                    {/* <button className={classes.sign}>
                      <Link to="/Profile">Profile</Link>
                    </button> */}
                    <a href="/Profile" className={classes.sign}>Profile</a>
                    <a
                      className={classes.sign}
                      onClick={calllogout}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      href="/"
                      >
                        {/* {buttonText} */}
                        {buttonText} 
                      {/* {user.first_name} */}
                      {/* Signout */}
                    </a>
                    {/* <button
                    className={classes.sign}>
                    <Link to="/Dashboard">Dashboard</Link>
                  </button> */}
                    {user?.selection === "yes" ? (
                      // <button className={classes.sign}>
                      //   <Link to="/Dashboard">Dashboard</Link>
                      // </button>
                      <a className={classes.sign} href="/Dashboard">Dashboard</a>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            {/* </li> */}
          </ul>
        </div>

        <div className={classes.hamburger_menu}>
          <a
            onClick={
              () => setShowMediaIcons(!showMediaIcons)
              // humburger.classList.remove('GiHamburgerMenu');
              // humburger.classList.add('GiWideArrowDunk');
            }
          >
            <GiHamburgerMenu
              style={{
                color: "white",
                marginBottom: "0.5rem",
                userSelect: "none",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;