import React, { useState, useEffect } from 'react';
import TopBarMobile from '../TopBarMobile/TopBarMobile';
import TopBarDesktop from '../TopBarDesktop/TopBarDesktop';

const ResponsiveTopBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <TopBarMobile /> : <TopBarDesktop />;
};

export default ResponsiveTopBar;
