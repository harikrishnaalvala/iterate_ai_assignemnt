import React from 'react';
import { Link } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  return (
    <div className="form-container">
      <h3 className="form-heading">Enter details for your puja</h3>
      <form>
        <div className="form-group">
          <label htmlFor="whatsapp-number">Your WhatsApp Number</label>
          <input type="tel" id="whatsapp-number" placeholder="number" />
          <div className="checkbox-group">
            <input type="checkbox" id="different-number" />
            <label htmlFor="different-number">I have a different number for calling</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="member-name">Name of member participating in Puja</label>
          <input type="text" id="member-name" placeholder="Enter member name" />
        </div>
        <div className="form-group">
          <label htmlFor="gotra">Fill participant's gotra</label>
          <input type="text" id="gotra" placeholder="Gotra" />
          <div className="checkbox-group">
            <input type="checkbox" id="no-gotra" />
            <label htmlFor="no-gotra">I do not know my gotra</label>
          </div>
        </div>
        <fieldset className="form-group">
          <legend>Do you want to get puja prasad?</legend>
          <div className="radio-group">
            <input type="radio" id="yes" name="prasad" value="yes" defaultChecked />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="prasad" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </fieldset>
        <Link to="/">
          <button type="submit" className="submit-button">Proceed to book</button>
        </Link>
      </form>
    </div>
  );
}

export default BookingForm;
