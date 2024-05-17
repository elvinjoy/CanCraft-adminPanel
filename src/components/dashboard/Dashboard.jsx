import React, { useState, useEffect } from 'react';
import NavbarComponent from '../navbar/Navbar';
import './Dashboard.css';

const DashboardComponent = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(false);

  useEffect(() => {
    setShowWelcomeText(true);
  }, []);

  return (
    <>
      <NavbarComponent />
    </>
  );
}

export default DashboardComponent;
