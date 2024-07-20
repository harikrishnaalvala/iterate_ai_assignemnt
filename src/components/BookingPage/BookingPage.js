import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {

  return (
    <>
      <div className="container0">
        <h1 className="main-heading">Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h1>
        <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_review.c0435a90.webp&w=3840&q=75" alt="Puja" className="main-image" />
      </div>
      <div className="puja-list">
        <h2 className="section-heading">Upcoming Pujas on Sri Mandir</h2>
        <div className='bookingpagemenu'>
        <div className="puja-card">
                <img src='https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720883338524.webp&w=1920&q=75' alt='imagecard' className="puja-card-image" />
                <div className="puja-card-content">
                    <h3 className="puja-card-title">SATURDAY SHANI SHINGNAPUR SPECIAL</h3>
                    <h4 className="puja-card-subtitle">Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h4>
                    <p className="puja-card-description">For Prevention of Misfortunes and Adversities</p>
                    <div className="puja-card-info">
                    <p className="puja-card-location"><img className='imhe' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75'/>Shree Shanidev Temple, Shani Shingnapur, Maharashtra</p>
                    <p className="puja-card-date"><img className='imhe' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75'/>20 July, Saturday, Ashadha Shukla Chaturdashi</p>
                    </div>
                    <Link to="/pujabooking">
                    <button className="puja-card-button">PARTICIPATE <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright_arrow_white.a9b048b0.svg&w=32&q=75'/></button>
                    </Link>
                </div>
            </div>
 
            <div className="puja-card">
                <img src='https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1721208690418.jpg&w=1920&q=75' alt='imagecard' className="puja-card-image" />
                <div className="puja-card-content">
                    <h3 className="puja-card-title">MAHAVIDYA PURNIMA SPECIAL</h3>
                    <h4 className="puja-card-subtitle">Maa Bagalmukhi Tanta yukta Havan</h4>
                    <p className="puja-card-description">for victory in Court and Victory over Enemies</p>
                    <div className="puja-card-info">
                    <p className="puja-card-location"><img className='imhe' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75'/>Maa Bagalmukhi Temple, Haridwar, Uttarakhand</p>
                    <p className="puja-card-date"><img className='imhe' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75'/>21 July, Sunday, Ashadha Shukla Chaturdashi</p>
                    </div>
                    <Link to="/pujabooking">
                    <button className="puja-card-button">PARTICIPATE <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright_arrow_white.a9b048b0.svg&w=32&q=75'/></button>
                    </Link>
                </div>
            </div>

            <div className="puja-card">
                <img src='https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720890969814.webp&w=1920&q=75' alt='imagecard' className="puja-card-image" />
                <div className="puja-card-content">
                    <h3 className="puja-card-title">PURNIMA SHAKTIPETH NIGHT SPECIAL</h3>
                    <h4 className="puja-card-subtitle">Divya Mahakali Tantrokta Havan</h4>
                    <p className="puja-card-description">For Courage and Protection from Obstacles</p>
                    <div className="puja-card-info">
                    <p className="puja-card-location"><img className='imhe' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75'/>Shaktipeth Maa Tarapith Temple, Birbhum, West Bengal</p>
                    <p className="puja-card-date"><img className='imhe' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75'/>20 July, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03::46 PM, july 21 )</p>
                    </div>
                    <Link to="/pujabooking">
                    <button className="puja-card-button">PARTICIPATE <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright_arrow_white.a9b048b0.svg&w=32&q=75'/></button>
                    </Link>
                </div>
            </div>
        </div> 

      </div>
    </>
  );
};

export default BookingPage;
