import React from 'react';
import './TopBarDesktop.scss';

const TopBarDesktop = () => {
  return (
    <div className="top-bar-desktop">
      <div className="logo">Drive Lah</div>
      <nav className="nav-links">
        <a href="/learn-more">Learn more</a>
        <a href="/list-your-car">List your car</a>
        <a href="/inbox">Inbox</a>
        <a href="/profile">Profile</a>
      </nav>
    </div>
  );
};

export default TopBarDesktop;
