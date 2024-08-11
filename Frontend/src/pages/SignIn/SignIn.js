import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import styles from './Sign.module.css'
import { useState } from 'react'
import img1 from "../../images/homepage_img.svg"
import Navbar from '../../components/navbar/navbar';
import axios from 'axios'
import { TailSpin } from 'react-loading-icons'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Api from '../../API/Api'
import { useLocation } from 'react-router-dom'


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [rep, setRep] = useState(false)
  const [forget, setForget] = useState(false);
  const [femail, setFemail] = useState("");
  const [text, setText] = useState("")


  const location = useLocation();

  const { replace } = location.state || { replace: false };


  const handleClose = () => {
    setOpen(false);
  };


  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    setLoading(true);

    Api.post(`/signin/`, user).then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      setError(false)
      setLoading(false)

      setError("Login Successful")
      setOpen(true)

      console.log(response);
      navigate('/');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

    }).catch((err) => {
      // setMessage(err.toString());

      console.log(err.response.data.message);
      setLoading(false);
      setError(err.response.data.message);
      setOpen(true)
      console.log(err);
      // setStatus("error");
    })


  };

  const handleForgetSubmit = (e) => {
    e.preventDefault();
    const user = { "email": femail };

    setLoading(true);

    Api.post(`/user/updatePassword/`, user).then((response) => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }

      setError(false)
      setLoading(false)

      setError("Check Mail")
      setFemail("")
      setOpen(true)
      setText("Check your mail. It may take upto a minute.")
      console.log(response);

    }).catch((err) => {
      console.log(err?.response?.data?.message)
      console.log(err?.response?.status)
      // setMessage(err.toString());
      setError("could not reset password");
      if(err.response.status == 401)
      setText("No Account Found. Try Again");
      else
      setText("Server busy. Click again after 5 minutes");
      setOpen(true)
      setLoading(false);
      console.log(err);
      // setStatus("error");
    })
  }

  return (
    <div>


      {
        replace && !(error) ? (<Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={error}

        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            You are Successfully Registered Now Login
          </Alert>
        </Snackbar>)

          : ""}


      <Navbar />



      {
        error ? (<Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={error}

        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>) : ""

      }




      <div className={styles.cont}>



        <div className={styles.SignIn}></div>
        <div className={styles.SignSide}>

          <img src={img1} />
          <div className='SideDivT'><h1>CA Programme Registration</h1></div>
        </div>
        <div className={styles.Sign1}>{forget ? "Forgot Password" : "SIGN IN"}</div>


        <div className={styles.FormLabel3}>EMAIL-ID</div>

        {forget ? <input type="text" className={styles.In3} onChange={(e) => { setFemail(e.target.value) }}></input>
          : <div><input type="text" className={styles.In3} onChange={(e) => { setEmail(e.target.value) }}></input>
        <div className={styles.FormLabel4} >PASSWORD</div>
        <input type="password" className={styles.In4} onChange={(e) => { setPassword(e.target.value); }}></input></div>}
        <div id='Eye'></div>

        <div className={styles.forget} onClick={() => { setForget(!forget) }}>{forget?"Sign In" :"Forgot Password?"}</div>

        {forget?
        <button onClick={handleForgetSubmit} style={{ cursor: "pointer", color: "white" }} className={styles.SignInB} >

        {loading ? (
          <span style={{ marginRight: '9px', marginTop: "5px" }}>
            <TailSpin width='20' height='12' /> Processing
          </span>
        ) : (
          <>
          {
            text == ""?
            <span className='ButtonLabel'>Reset Password. </span>:
            <span className='ButtonLabel'>{text}</span>
          }
          </>
        )}
      </button>
        :
        
        <button onClick={handleSubmit} style={{ cursor: "pointer", color: "white" }} className={styles.SignInB} >

          {loading ? (
            <span style={{ marginRight: '9px', marginTop: "5px" }}>
              <TailSpin width='20' height='12' />
            </span>
          ) : (
            ''
          )}

          <span className='ButtonLabel'>Sign In </span></button>}

        {/* <div className={styles.SignInT} >Sign In</div> */}
        <div className={styles.Linksto}>New Here ? <Link to='/SignUp'>Sign Up</Link></div>
      </div>
    </div>
  )
}

export default SignIn