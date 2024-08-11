import React from 'react'
import img1 from '../../images/icon2.png';
import classes from "./footer.module.css";
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//  import url();
import Api from '../../API/Api';

function Footer() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
      phone: phone,
    };
    axios.post("Api/user/contact/", data).then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      e.target.reset();

      alert('your query has been submitted');
    }).catch((err) => {

      console.log(err);
      e.target.reset();

    })

  }



  return (
    <>
      <div className={classes.mainfoot}>
        <div className={classes.footup}>
          <div className={classes.footabout}>
            <div className={classes.logo}>
              <img src={img1} alt="" />
              <span>KSHITIJ</span>
            </div>
            <div className={classes.content}>
              <p>   Kshitij, IIT Kharagpur's annual techno-management symposium, has grown in popularity, celebrating the spirit of science and technology by bringing together students from all across India to demonstrate their scientific and managerial prowess.
                <br />
                We're renowned for putting on an eclectic mix of events, including synchronized workshops, technical displays, and guest talks by experts in the fields of technology and entrepreneurship. Students can assess their abilities and set greater goals than ever before thanks to events ranging from technology to management. </p>
            </div>
          </div>
          <div className={classes.form}>
            <form className={classes.forms} onSubmit={handleSubmit} method="POST">
              <div className={classes.h2}>For any queries and suggestions</div>
              <input type="Name" name="Name" onChange={(e) => { setName(e.target.value); }} placeholder='Name' />
              <input type="email" name="email" onChange={(e) => { setEmail(e.target.value); }} placeholder='Email' />
              <input type="contact" name="contact" onChange={(e) => { setPhone(e.target.value); }} placeholder='Contact Number' />
              <textarea style={{padding:"0.5rem"}} name="message" placeholder=' Write to Us ...' onChange={(e) => { setMessage(e.target.value); }} />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className={classes.footdown}>
          <div className={classes.social}>
            <ul>
              <li>
                <a href='https://www.facebook.com/ktj.iitkgp' target="_blank" className='Bs'><BsFacebook  size={30} className={classes.ii} /></a>
              </li>
              <li>
                <a href='https://www.instagram.com/ktj.iitkgp/' target="_blank" className='Bs'><BsInstagram size={30} className={classes.ii} /></a>
              </li>
              <li>
                <a  href='https://twitter.com/ktj_iitkgp' target="_blank" className='Bs'><BsTwitter size={30}  className={classes.ii}/></a>
              </li>
              <li>
                <a  href='https://www.linkedin.com/company/kshitij-iit-kharagpur/' target="_blank" className='Bs'><BsLinkedin size={30} className={classes.ii} /></a>
              </li>
              <li>
                <a  href='https://www.youtube.com/ktjiitkgp' target="_blank" className='Bs'><BsYoutube size={30} className={classes.ii} /></a>
              </li>
            </ul>
          </div>
          <div className={classes.copy}>
            <h3> <span>&copy;</span> KSHITIJ IIT KHARAGPUR. ALL RIGHTS RESERVED</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

