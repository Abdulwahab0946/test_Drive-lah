import React from 'react';
import './CardDetailsForm.scss';

const CardDetailsForm = () => {
  return (
    <div className="card-details-section">
      <h3>Add card details</h3>
      <div className="card-input-container">
        <input type="text" placeholder="1234 5678 1234 5678" className="card-input card-number" />
        <input type="text" placeholder="MM/YY" className="card-input card-expiry" />
        <input type="text" placeholder="CVC" className="card-input card-cvc" />
      </div>
      <p className="note">You will not be charged right now. Subscription will only start once your listing is published and live.</p>
    </div>
  );
};

export default CardDetailsForm;
