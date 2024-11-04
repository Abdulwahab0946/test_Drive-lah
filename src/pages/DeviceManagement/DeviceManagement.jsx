import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDevices, updateDevice } from '../../redux/DeviceManagement/devicesSlice';
import './DeviceManagement.scss';

const DeviceManagement = () => {
  const devices = useSelector(selectDevices);
  const dispatch = useDispatch();

  const handleSerialNumberChange = (id, value) => {
    dispatch(updateDevice({ id, serialNumber: value }));
  };

  const handleToggleChange = (id, checked) => {
    dispatch(updateDevice({ id, bringingOwnDevice: checked }));
  };

  const handleImageUpload = (id, image) => {
    dispatch(updateDevice({ id, image }));
  };

  return (
    <div className="device-management">
      <div className="header-section">
        <h1>Device management</h1>
        <p>Add details of the device, if any already installed on your car. If none, then continue to the next step.</p>
      </div>
      {devices.map((device, index) => (
        <div>
          <h2>Device {device.id}</h2>

        <div key={index} className="device-section">
          <div className="left-section">
            <div className="input-group">
              <label>Device type</label>
              <input type="text" value={device.type} readOnly />
            </div>
            <div className="input-group">
              <label>Serial number</label>
              <input type="text" placeholder="Enter the serial number of the device" />
            </div>
          </div>
          <div className="right-section">
          <div className="toggle-section">
                        <label>Bringing your own device?</label>
                        <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
            <p>Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.</p>
            <div className="upload-section">
              <label>Upload an image of the device</label>
              <div className="upload-box">
                <a href="#" className="upload-link">Click to upload</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default DeviceManagement;
