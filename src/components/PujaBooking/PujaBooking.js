import React from 'react';
import { Link } from 'react-router-dom';
import './PujaBooking.css';

const PujaBooking = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="breadcrumb">
          <span><Link to="/">Home</Link> &gt; </span>
          <span><Link to="/">Sri Mandir Puja Seva</Link> &gt; </span>
          <span>Devshayani Ekadashi Special 16,000 Brihaspati Graha Mool Mantra Jaap & Sudarshan Havan to find an Ideal Partner and Relationship Bliss</span>
        </div>
        <div className="content">
          <div className="image-container">
            <img 
              src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720550494790.webp&w=1920&q=75" 
              alt="Devshayani Ekadashi Special" 
              className="main-image" 
            />
            <div className="overlay top-left">DEVSHAYANI EKADASHI SPECIAL</div>
          </div>
          <div className="text-container">
            <h1>Devshayani Ekadashi Special 16,000 Brihaspati Graha Mool Mantra Jaap & Sudarshan Havan</h1>
            <h2>To find an Ideal Partner and Relationship Bliss</h2>
            <div className="info">
              <span className="icon">ℹ️</span>
              <span>Shri Navagrah Shani Temple, Ujjain, Madhya Pradesh</span>
            </div>
            <div className="info">
              <span className="icon">📅</span>
              <span>17 July, Wednesday, Ashadha Shukla Ekadashi</span>
            </div>
            <div className="countdown">
              <h3>Puja booking will close in :</h3>
              <div className="countdown-timers">
                <div className="timer">
                  <span className="number">0</span>
                  <span className="label">Day</span>
                </div>
                <div className="timer">
                  <span className="number">17</span>
                  <span className="label">Hours</span>
                </div>
                <div className="timer">
                  <span className="number">25</span>
                  <span className="label">Mins</span>
                </div>
                <div className="timer">
                  <span className="number">47</span>
                  <span className="label">Secs</span>
                </div>
              </div>
            </div>
            <div className="participants">
              <span className="highlight">Till now 2,00,000+ Devotees have participated in Pujas conducted by Sri Mandir Puja Seva.</span>
            </div>
            <Link to="/pujapackages">
              <button className="button">Select puja package</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PujaBooking;
