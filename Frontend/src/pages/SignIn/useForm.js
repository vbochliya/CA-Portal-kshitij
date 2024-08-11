import { useState } from "react";
import axios from "axios"
import {Redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Api from "../../API/Api";

function useForm({ form, additionalData, endpointUrl }) {

  let navigate = useNavigate();


  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const showSuccessMessage = ()=>{
    return <h1> Register Successfully</h1>
  }

  const showErrorMessage = ()=>{
    return <h1> Register Error </h1>
  }

  const handleSubmit = (e) => {
    if (form) {
      e.preventDefault();
      setStatus("loading");
      setMessage("");

      const finalFormEndpoint = endpointUrl || form.action;
      const data = Array.from(form.elements)
        .filter((input) => input.name)
        .reduce(
          (obj, input) => Object.assign(obj, { [input.name]: input.value }),
          {}
        );

      if (additionalData) {
        Object.assign(data, additionalData);
      }

      console.log(data);


      Api.post(`/signup`, data).then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }


         setMessage(true)

         navigate('/home');

         console.log("Success")
         
        return response.json();
       
        
        

      }).catch((err) => {

        navigate('/SignUp',{message:true})
        setMessage(err.toString());
        setStatus(false);
        
       
      })


    }
  };

  <h1>Registeration Successfull</h1>

  return { handleSubmit, status, message,message };
}

export default useForm;