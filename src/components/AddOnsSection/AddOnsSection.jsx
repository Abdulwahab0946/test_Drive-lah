import React from 'react';
import './AddOnsSection.scss';

const AddOnsSection = ({ addOns = [] }) => {
  if (addOns.length === 0) {
    return null;
  }

  return (
    <div className="addons-section">
      <h3>Select add-ons for your subscription</h3>
      <div className="addons-container">
        {addOns.map((addOn, index) => (
          <div key={index} className="addon-option">
            {addOn === 'Between trip insurance' && (
              <span className="coming-soon-label">Coming soon</span>
            )}
            <span className="addon-text">{addOn}</span>
            <input type="radio" name="addon" readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsSection;
