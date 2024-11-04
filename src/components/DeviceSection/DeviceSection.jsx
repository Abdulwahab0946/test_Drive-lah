import React, { useState } from 'react';
import './DeviceSection.scss';

const DeviceSection = ({ deviceNumber, deviceType }) => {
  const [isOwnDevice, setIsOwnDevice] = useState(false);

  return (
    <div className="device-section">
      <h4>Device {deviceNumber}</h4>
      <div className="form-group">
        <label>Device type</label>
        <input type="text" value={deviceType} readOnly className="device-input" />
      </div>
      <div className="form-group">
        <label>Serial number</label>
        <input type="text" placeholder="Enter the serial number of the device" className="device-input" />
      </div>
      <div className="form-group toggle-section">
        <label>Bringing your own device?</label>
        <input
          type="checkbox"
          checked={isOwnDevice}
          onChange={() => setIsOwnDevice(!isOwnDevice)}
          className="toggle-switch"
        />
        <p>Toggle this on if you’re bringing your own device. Leave it off if Drive mate is to provide the device.</p>
      </div>
      <div className="form-group">
        <label>Upload an image of the device</label>
        <div className="upload-section">Click to upload</div>
      </div>
    </div>
  );
};

export default DeviceSection;
