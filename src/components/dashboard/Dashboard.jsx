import React, { useState, useEffect } from 'react';
import NavbarComponent from '../navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './Dashboard.css';

const DashboardComponent = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(false);

  useEffect(() => {
    setShowWelcomeText(true);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="container mt-2">
        {showWelcomeText && <h4 className="welcome-text">Welcome to Admin Panel</h4>}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>View Orders<i className='bx bx-cart-alt cart'></i></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>Manage Users<i className="bx bxs-cart-add cart"></i></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>Add New Size Ratio<i className='bx bx-cart-alt cart'></i></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>Card 4<i className="bx bxs-cart-add cart"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardComponent;
