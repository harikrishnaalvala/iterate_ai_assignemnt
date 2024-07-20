import React from 'react';
import './MyPoojaPage.css';

const MyPoojaPage = () => {
  return (
    <div className='mainpoojapage'>
      <div className='history'>
        <img 
          style={{height:'40px', width:'40px'}} 
          src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fback_arrow.bcf3db22.svg&w=32&q=75' 
          alt='Back Arrow'
        />
        <h1>Puja History</h1>
      </div>

      <div className='poojapagecontent'>
        <img 
          className='imagepoojapage' 
          src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty_stack.d683b244.svg&w=128&q=75' 
          alt='No Puja'
        />
        <h1>No Puja has been booked yet</h1>
        <p className='poojabooktext'>
          Book your Puja online at Popular Temples of India.<br/>
          Panditji will take sankalp with your name and gotra <br/>
          during the Puja.
        </p>
        <a href="/bookingpage" className="bookpoojabutton">Book Pooja Now</a>
      </div>
    </div>
  )
}

export default MyPoojaPage;

