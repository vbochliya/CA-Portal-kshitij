import React, { useState, useEffect } from "react";
import styles from "./Dash.module.css";
// import Navbar from "../../components/navbar/navbar";
import Api from '../../API/Api';
import male from '../../images/male_avatar.jpg';
import female from '../../images/female_avatar.jpg';
import unknown from '../../images/unknown_avatar.png';
import Card from "./Card/Card";
import ICS from "./caa.png";
import Navbar from '../../components/navbar/Navbarnew';
const DashBoard = () => {

  const [auth, setAuth] = useState(false)
  const [auth1, setAuth1] = useState(false)
  const [user, setUser] = useState({});
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false);
  const [points, setPoints] = useState(0)
  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };


    Api.get(`/user/login_check`, requestOptions).then((res) => {
      setAuth1(true)
      if (res?.data?.user?.selection == "yes") {
        setUser(res?.data?.user);
        setAuth(true);
        setPoints(res?.data?.user?.points)
        // console.log("verfied");
      }
    }).catch((err) => {
      console.log(err);
      setAuth(false);
    })


  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async()=>{
    try{
      setLoader(true);
      const requestOptions = {
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        },
      };
      const res = await Api.get("/event/getEvents", requestOptions);
      const data = await res.data;
      console.log(data);
      setData(data?.events)
      setLoader(false);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className={styles.Container}>
      <div className={styles.TotalDiv}>
        <Navbar show={auth1} />
        {/* <Navbar/> */}
        <div className={styles.LeftDiv}>
          <div className={styles.NameOf}>
            {auth == false && user != {} ? <>Not found</> : <>
              {user?.first_name} {user?.last_name}
            </>}
            <br /><span className={styles.ktjid}>CA ID : {auth == false && user != {} ? <>Not Applicable</> : <>
              {user?.ca_id}
    
            </>}
            <br/>
            YOUR REFERRAL CODE: <b>{auth == false && user != {} ? <>Not Applicable</> : <>
              {(user?.ca_id).split("J")[1]}</>}</b>
            </span>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <span className={styles.share}>REFER AND SHARE TO EARN MORE REWARD POINTS</span></div>
          <div className={styles.RewardP}>
            <span style={{whiteSpace: "nowrap", paddingBottom:"0.5rem", borderBottom: "2px solid black"}}>:: REWARD POINTS ::</span> <br/><div style={{textAlign: "center"}}>{auth == false && user != {} ? <>N/A</> : <>
              {points}
            </>}</div>
            {/* style=>{{fontFamily: "monospace", fontSize: "1.6rem", lineHeight: "1.6rem"}} */}
          </div>
        </div>
            <div className={styles.rank}>Rank</div>
        <div className={styles.ProfilePic}><img height="100%" width="100%" src={auth ? user.gender === "MALE" ? male : user.gender === "FEMALE" ? female : unknown : unknown} /></div>
        {/* appears accordingly male, female and unknown , default male */}
        
        <button className={styles.Button}>LIVE EVENTS</button>
        {auth? 
          <div className={styles.cardpos}>
            {data.map((e)=>{
              return(
                <Card desc={e} key={e._id} user={user} setPoints={setPoints} points={points}/>
              )
            })}
          </div>  : ""
        }

      </div>
    </div>
  );
};

export default DashBoard;
