import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css';
// import Navbar from '../../components/navbar/navbar';
import Api from '../../API/Api';
import male from '../../images/male_avatar.jpg'
import female from '../../images/female_avatar.jpg'
import unknown from '../../images/unknown_avatar.png'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbarnew';
const ProfileEdit = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false)
  let navigate = useNavigate();
  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };



    Api.get(`/user/login_check`, requestOptions).then((res) => {

      // console.log(res.data);
      setUser(res.data.user)
      setAuth(true);
    }).catch((err) => {
      window.location.href = '/';
      console.log(err);
      setAuth(false);
    })


  }, [])

  return (
    <div className={styles.cont}>
      <Navbar show = {auth} />
      <div className={styles.ProfileDiv}></div>
      <div className={styles.ProfileSide}></div>
      <div className={styles.ButtonAvatar}><img height="100%" width="100%" src={auth? user.gender==="MALE"? male : user.gender==="FEMALE"? female : unknown : unknown}/></div>

      <div className={styles.NameOf}>{auth? user.first_name + " " + user.last_name : "NAME OF CANDI"}</div>
      <div className={styles.HeadPro}>PROFILE</div>
      <button className={styles.EditProB}></button>
      <div className={styles.EditBText} style={{cursor:'pointer'}} onClick={()=>{navigate("/ProfileSave")}}>Edit</div>
      <div className={styles.PLabel}>
        <div className={styles.PLabel1}>FIRST NAME</div>
        <div className={styles.PLabel2}>LAST NAME</div>
        <div className={styles.PLabel3}>GENDER</div>
        <div className={styles.PLabel4}>MOBILE NUMBER</div>
        <div className={styles.PLabel5}>EMAIL-ID</div>
        <div className={styles.PLabel6}>COLLEGE NAME</div>
        <div className={styles.PLabel7}>CITY</div>
        <div className={styles.PLabel8}>STATE</div>
      </div>

      <input type="text" className={styles.PIn1} value={auth? user.first_name : ""}></input>
      <input type="text" className={styles.PIn2} value={auth? user.last_name : ""}></input>
      <input type="text" className={styles.PIn3} value={auth? user.gender : ""}></input>
      <input type="text" className={styles.PIn4} value={auth? user.phone : ""}></input>
      <input type="text" className={styles.PIn5} value={auth? user.email : ""}></input>
      <input type="text" className={styles.PIn6} value={auth? user.college : ""}></input>
      <input type="text" className={styles.PIn7} value={auth? user.city : ""}></input>
      <input type="text" className={styles.PIn8} value={auth? user.state : ""}></input>
    </div>
  )
}

export default ProfileEdit
