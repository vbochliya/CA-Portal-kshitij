//new about
import './pages/About/aboutnew';
import ParticlesBackground from "./ParticlesBackground";


import React, { useEffect, useState } from 'react';

import './App.css';
import Home from './pages/Homepage/Homepage';


import Home2 from './pages/Homepage/Homepage2'
import HomeNew from './pages/Homepage/HomepageNew'
import Homeags from './pages/Homepage/Homepageags';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignIn_New/SignUp';
import SignIn from './pages/SignIn_New/SignIn';
import DashBoard from './pages/Dashboard/DashBoard';
import ProfileEdit from './pages/Profile/ProfileEdit';
import ProfileSave from './pages/Profile/ProfileSave';
import Api from './API/Api';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    };

    Api.get(`/user/login_check`, requestOptions)
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("USER DELETED", err);
        localStorage.removeItem('token');
      })
      .finally(() => setLoading(false));
  }, []);

  // Particle init (no TypeScript here)



  const particlesOptions = {
    background: {
      color: { value: "#0d47a1" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <div className="App">
      {/* Particle background */}

      <ParticlesBackground />

      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeNew />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Profile' element={<ProfileEdit />} />
          <Route path='/ProfileSave' element={<ProfileSave />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/home' element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
