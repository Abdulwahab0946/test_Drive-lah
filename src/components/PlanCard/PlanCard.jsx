import React from 'react';
import './PlanCard.scss';

import gpsIcon from '../../assets/icons/Gps.svg';
import mileageIcon from '../../assets/icons/Mileage.svg';
import keyHandoverIcon from '../../assets/icons/Lock.svg';

const PlanCard = ({ title, features, price, isSelected, onSelect }) => {
  const iconMap = {
    'Bring your own GPS': gpsIcon,
    'Primary GPS included': gpsIcon,
    'Mileage reporting to be done by you': mileageIcon,
    'Automated mileage calculations': mileageIcon,
    'In-person key handover to guests': keyHandoverIcon,
    'Remote handover to guests': keyHandoverIcon,
    'Keyless access technology': keyHandoverIcon,
  };

  return (
    <div 
      className={`plan-card ${isSelected ? 'selected' : ''}`} 
      onClick={onSelect}
    >
      <h3 className="plan-title">{title}</h3>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <img src={iconMap[feature]} alt={feature} className="feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="plan-price">{price}</p>
    </div>
  );
};

export default PlanCard;
