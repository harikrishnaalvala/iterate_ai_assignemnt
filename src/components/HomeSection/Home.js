import React from 'react';
import './Home.css';
import headtopimage from './img_achievement.webp';
import heromainimagetop from './heromainimage.webp';
import Home02 from './Home02';

const Home = () => {
  const items = [
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75", alt: "Book Pujas at Temple", text: "Book Pujas at temples" },
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75", alt: "Astro Services", text: "Talk to Astrologers" },
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75", alt: "Chadhava", text: "Offer Chadhava at Temples" },
    { src: 'https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75', alt: "Festivals", text: "Read Festival Details" },
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_music.b3aeb0a3.svg&w=96&q=75", alt: "Listen to Divine Music", text: "Listen to Divine Music" },
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75", alt: "Do Mandir Darshan", text: "Do Mandir Darshan" },
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_sahitya.976e992d.svg&w=96&q=75", alt: "Read Hindu Literature", text: "Read Hindu Literature" },
    { src: "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_panchang.0458f8f4.svg&w=96&q=75", alt: "Read Panchang", text: "Read Panchang" }
  ];

  return (
    <div>
      <div className='herosection'>
        <div>
          <div style={{display: 'flex', alignItems:"center"}}>
            <img src={headtopimage} style={{width:'40px', height:"40px"}} alt="Achievement" />
            <p className='text'>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
          </div>
          <div>
            <h1 className='textheadtop'>Pray daily with <span style={{color:'#f18c33'}}>Sri Mandir</span>.<br/>One App for all your<br/> devotional needs.</h1>
          </div>
          <img style={{marginRight:'20px'}} src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="Google Play" />
          <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="App Store" />
        </div>
        <img className="heroimage" src={heromainimagetop} alt="Hero Main" />
      </div>

      <div className='secondsection'>
        <h1>Explore Sri Mandir</h1>
        <div className="flex-container">
          {items.map((item, index) => (
            <div key={index} className="box">
              <img src={item.src} alt={item.alt} className="image" />
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='thirdcontainer'>
        <div className="container3">
          <div className="content2">
            <h1 className="heading">Our Divine Mission Recognized by Prominent Media Outlets</h1>
            <div className="media-logos">
              <div className="logo">
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_01.1dea7667.png&w=640&q=75" alt="Mid-Day" />
              </div>
              <div className="logo">
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_02.bddcfd94.png&w=640&q=75" alt="YourStory" />
              </div>
              <div className="logo">
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_03.d53d3f19.png&w=640&q=75" alt="BW" />
              </div>
              <div className="logo">
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_04.3e3537d0.png&w=640&q=75" alt="ABP" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Home02 />
      </div>
    </div>
  );
};

export default Home;
