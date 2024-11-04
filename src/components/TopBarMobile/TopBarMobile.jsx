import React, { useState } from 'react';
import './TopBarMobile.scss';
import Sidebar from '../Sidebar/Sidebar';

const TopBarMobile = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="top-bar-mobile">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <span className="hamburger-icon">&#9776;</span>
        </div>
        <div className="logo">Drive Lah</div>
        <div className="profile">
          <a href="/profile">Profile</a>
        </div>
      </div>
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
    </>
  );
};

export default TopBarMobile;
