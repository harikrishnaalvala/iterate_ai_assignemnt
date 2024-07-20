import React from 'react'
import { Link } from 'react-router-dom';
import './Home02.css'

const Home02 = () => {
  return (
    <div>
      <div className="puja-seva-container">
            <div className="puja-seva-text">
                <h1 className="headingloveonse">Puja Seva for You and Your Loved Ones</h1>
                <p className="descriptionbookpuja">
                Book Pujas in your and your family's name at 1000+ renowned temples in India. <br></br>You will also receive a video of the Puja and Prasad along with divine blessings.
                </p>
                <a href="#" className="view-all-link">View All Puja →</a>
            </div>

            <div className='poojacardcontainer'>
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
            

            <div style={{marginTop:'70px'}} className="puja-seva-text">
                <h1 className="headingloveonse">Read interesting articles about upcoming fasts, festivals, and <br></br> everything around Sanatan Dharma.</h1>
                <p className="descriptionbookpuja">
                Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.
                </p>
                <a href="#" className="view-all-link">Read All →</a>
            </div>

            <div className='poojacardcontainer'>
            <div className="puja-card02">
                <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faarti_article_image.0d882263.webp&w=1920&q=75' alt='imagecard' className="mantra-card-image" />
                <div className="puja-card-content">
                    <h4 className="puja-card-subtitle">Aarti</h4>
                    <p className="puja-card-description">Find complete lyrics of all the famous Aartis and easily worship your beloved God.</p>
                    <div className="puja-card-info">
                    <a href="#" className="all-link">Read All </a>
                    </div>
                </div>
            </div>

            <div className="puja-card02">
                <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchaalisa_article_image.940dd0a3.webp&w=1920&q=75' alt='imagecard' className="mantra-card-image" />
                <div className="puja-card-content">
                    <h4 className="puja-card-subtitle">Chalisa</h4>
                    <p className="puja-card-description">You will get complete Chalisa of all the deities. Read Chalisa during the Pooja of your beloved deities and seek their grace.</p>
                    <div className="puja-card-info">
                    <a href="#" className="all-link">Read All </a>
                    </div>
                </div>
            </div>

            <div className="puja-card02">
                <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmantra_article_image.c0b022ae.webp&w=1920&q=75' alt='imagecard' className="mantra-card-image" />
                <div className="puja-card-content">
                    <h4 className="puja-card-subtitle">Mantra</h4>
                    <p className="puja-card-description">Here you will find all the powerful mantras for peace of mind. Chant these mantras and remove all the obstacles from life.</p>
                    <div className="puja-card-info">
                    <a href="#" className="all-link">Read All </a>
                    </div>
                </div>
            </div>

            <div className="puja-card02">
                <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fayurvedic_article_image.0a07e763.webp&w=1920&q=75' alt='imagecard' className="mantra-card-image" />
                <div className="puja-card-content">
                    <h4 className="puja-card-subtitle">Ayurvedic & Home Remedies</h4>
                    <p className="puja-card-description">We have brought the precious knowledge of Ayurveda for you, these remedies will help you lead a healthy life.</p>
                    <div className="puja-card-info">
                    <a href="#" className="all-link">Read All </a>
                    </div>
                </div>
            </div>
        
            
            </div>


            <div className='bottonContainer'>
               <div style={{textAlign:'left'}}>
                <h1 className='bottomhead01'>Download Sri Mandir app now !!</h1>
                <h3 className='bottomhead02'>Connect to your beloved God, anytime, anywhere!</h3>
                <img className='bottomhead03' style={{marginRight:'20px'}} src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="Google Play" />
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="App Store" />
               </div>
                <div>
                    <img className='bottomimage' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_showcase_section_family.2d744376.png&w=640&q=75'/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home02
