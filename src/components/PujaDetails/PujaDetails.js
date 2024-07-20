import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PujaDetails.css';

const PujaDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <button className="btn-open" onClick={onOpen}>Participants →</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-close" onClick={onClose} aria-label="Close modal">
                <img alt="Close" width="24" height="24" src="/_next/static/media/back_arrow.bcf3db22.svg" />
              </button>
              <h2 className="modal-title">Fill your details for Puja</h2>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group">
                  <label htmlFor="input-phone-number" className="input-label">Enter Your Whatsapp Mobile Number</label>
                  <p className="input-description">
                    Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp to the number provided.
                  </p>
                  <input
                    type="tel"
                    id="input-phone-number"
                    className="input-field"
                    maxLength="10"
                    placeholder="Enter mobile number"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="name" className="input-label">Enter Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    maxLength="64"
                    placeholder="Enter your name"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="modal-footer">
                  <Link to="/bookingform">
                    <button className="btn-next" onClick={onClose}>Next</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PujaDetails;
