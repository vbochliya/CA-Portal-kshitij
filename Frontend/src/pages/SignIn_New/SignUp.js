import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { TailSpin } from "react-loading-icons";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import Navbar from "../../components/navbar/Navbarnew";
import Navbar from "../../components/navbar/Navbarags";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Api from "../../API/Api";
// import icons from href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
import Alert from "@mui/material/Alert";

import useForm from "./useForm";

const FormArea = (props) => {
  const [fieldType, setFieldType] = useState("password");
  const toggleVisibility = (e) => {
    console.log(e);
    fieldType === "text" ? setFieldType("password") : setFieldType("text");
  };
  const [width,setWidth] = useState(window.innerHeight)
  window.addEventListener("resize", () =>setWidth(window.innerWidth))

  useEffect(() => {
    setWidth(window.innerWidth)
  }, []);
  
  return (
    <div className={`${styles.container} ${styles.form_img}`}>
    <div className={styles.formwrapper}>
      <form className={styles.form}  
       onSubmit={props.handleSubmit}
       target="_blank"
       ref={props.formElement}
      >
        <h2 className={styles.formTitle}>SIGN UP</h2>
        <div className={`${styles.formGroup} ${styles.formGroupRow}`}>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupName1" className={styles.formLabel}>First Name</label>}
            <input id="signupName1" type="text" placeholder={width < 640 ? "First Name" : ""} name="first_name" required className={styles.formInput} />
          </div>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupName2" className={styles.formLabel}>Last Name</label>}
            <input id="signupName2" type="text" name="last_name" placeholder={width < 640 ? 'Last Name' : ""} className={styles.formInput} />
          </div>
        </div>
        <div className={`${styles.formGroup} ${styles.formGroupRow}`}>
          <div className={`${styles.formField} ${styles.newFormField} `}>
            {width > 640 && <label htmlFor="signupGender" className={styles.formLabel}>Gender</label>}
            <select id="signupGender" name="gender" className={`${styles.formInput} ${styles.anotherInput} ${styles.formselect}`}>
              <option hidden>Gender</option>
              <option className={styles.option}>MALE</option>
              <option className={styles.option}>FEMALE</option>
              <option className={styles.option}>OTHER</option>
            </select>
          </div>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupMob" className={styles.formLabel}>Mobile no</label>}
            <input id="signupMob" type="number" pattern="[0-9]{10}" placeholder={width < 640 ? "Mobile No" : ""} required name="phone" className={styles.formInput} />
          </div>
        </div>
        <div className={`${styles.formGroup} ${styles.formGroupRow}`}>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupEmail" className={styles.formLabel}>Email ID</label>}
            <input id="signupEmail" type="email" placeholder='Enter Your Email' required name="email" className={styles.formInput} />
          </div>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupPassword" className={styles.formLabel}>Password</label>}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',position:"relative"}}>
              <input id="signupPassword" placeholder='Password' required name="password" type={fieldType} className={styles.formInput} />
              <h6
              style={{
                left: "100%",
                display: "inline",
                cursor: "pointer",
                transform: "translateX(-100%)",
                color: "#EFED34",
                position: "sticky",
                position:"absolute"

              }}
              onClick={(e) => toggleVisibility(e)}
            >
              <span className="material-symbols-outlined">
                {fieldType === "password"
                  ? "visibility"
                  : "visibility_off"}
              </span>
            </h6>
            </div>
          </div>
        </div>
        <div className={`${styles.formGroup} ${styles.formGroupRow} ${styles.formGroupWrap}`}>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupCollege" className={styles.formLabel}>College Name</label>}
            <input id="signupCollege" type="text" placeholder={width < 640 ? "College Name" : ""} required name="college" className={styles.formInput} />
          </div>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupCity" className={styles.formLabel}>City</label>}
            <input id="signupCity" placeholder={width < 640 ? "City" : ""} type="text" required name="city" className={styles.formInput} />
          </div>
          <div className={styles.formField}>
            {width > 640 && <label htmlFor="signupState" className={styles.formLabel}>State</label>}
            <input id="signupState" placeholder={width < 640 ? "State" : ""} type="text" required name="state" className={styles.formInput} />
          </div>
        </div>
        <div className={styles.formButtonWrapper}>
          <button type="submit"  style={{cursor:"pointer"}} className={styles.formButton}
            
           onClick={() => props.setShow(true)}
           >
          {props.loading ? (
          <span style={{ marginRight: "9px", marginTop: "5px" }}>
            <TailSpin width="20" height="12" />
          </span>
        ) : (
          ""
        )}
            Sign Up </button>
        </div>
        <h3 className={styles.formFooter}>
          ALREADY A MEMBER? <Link to="/SignIn">SIGN IN</Link>
        </h3>
      </form>
    </div>
  </div>
  );
};

const SignUp = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [isError, setIsError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const formElement = useRef(null);

  const additionalData = {
    sent: new Date().toISOString(),
  };

  // const { handleSubmit, status, message,isShow } = useForm({
  //   form: formElement.current,
  //   additionalData
  // })

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Array.from(formElement.current)
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    if (additionalData) {
      Object.assign(data, additionalData);
    }

    console.log(data);

    setLoading(true);

    Api.post(`/signup`, data)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setLoading(false);
        //  setError(false)

        setOpen(true);
        setIsError(false);
        setError("Signup Successful");

        navigate("/SignIn", { state: { replace: "true" } });

        console.log("Success");

        return response.json();
      })
      .catch((err) => {
        setLoading(false);

        // setError(err.response.data.message);

        setIsError(true);

        setOpen(true);
        // navigate('/SignUp',{message:true})
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
        <div>
          <Navbar />

          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={error}
          >
            <Alert
              onClose={handleClose}
              severity={isError ? "error" : "success"}
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>

          <FormArea
            handleSubmit={handleSubmit}
            formElement={formElement}
            setShow={setShow}
            loading={loading}
          />
        </div>
  );
};

export default SignUp;

