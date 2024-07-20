import React, { useState } from 'react';
import './DropdownImage.css';
import DropdownImageo1 from './dropdownImage.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import profileimage from './ic_user_profile.svg';
import arrowimage from './ic_chevron_right_black.svg';
import poojabookingimage from './ic_puja_book.svg';
import bookapoojaimage from './bookapooja.svg';
import helplineimage from './helpline.png';
import topimagee from './topimage.png';

const DropdownImage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dropdown-container">
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <img
        src={DropdownImageo1}
        alt="Profile"
        className="circular-image"
        onClick={toggleDropdown}
      />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <img src={topimagee}/>
        <hr/>
        <p className='accountdetails'>Account Details</p>
        <Dropdown.Item className='itms2' href="/mypoojapage"> <img src={profileimage}/>My profile <div className='arrow'><img src={arrowimage}/></div></Dropdown.Item>
        <Dropdown.Item className='itms2' href="/mypoojapage"> <img src={poojabookingimage}/>My Pooja Booking <img className='arrow' src={arrowimage}/></Dropdown.Item>
        <Dropdown.Item className='itms2' href="/mypoojapage"> <img src={poojabookingimage}/>My Ramotsav Booking <img className='arrow' src={arrowimage}/></Dropdown.Item>
        <Dropdown.Item className='itms2' href="/mypoojapage"> <img src={bookapoojaimage}/>Book a Puja <span className='new'>New</span> <img className='arrow' src={arrowimage}/></Dropdown.Item>
        <p className='accountdetails'>Help & Support for Puja Booking</p>
        <img src={helplineimage}/>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default DropdownImage;
