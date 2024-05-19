import React, { useState, useEffect } from 'react';
import NavbarComponent from '../navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import ViewOrderDashboard from '../viewOrderDashboard/ViewOrderDashboard';
// import ViewOrders from '../viewOrders/ViewOrders';
// import ManageUsers from '../manageUsers/ManageUsers'

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
            <Link to='/vieworders'>
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>View Orders<i className='bx bx-cart-alt cart'></i></span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-6 mb-4">
          <Link to='/manageusers'>
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>Manage Customers<i className="bx bxs-cart-add cart"></i></span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-6 mb-4">
          <Link to='/addnewsizeratio'>
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>Add New Size Ratio<i className='bx bx-cart-alt cart'></i></span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-6 mb-4">
          <Link to='/Card4'>
            <div className="card p-3 animate-card">
              <div className="card-body">
                <span>Card 4<i className="bx bxs-cart-add cart"></i></span>
              </div>
            </div>
            </Link>
          </div>
        </div>
        {/* <ManageUsers /> */}
      </div>
      {/* <ViewOrders /> */}
      <ViewOrderDashboard />
      
    </>
  );
}

export default DashboardComponent;
