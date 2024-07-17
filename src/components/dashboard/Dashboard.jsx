import React, { useState, useEffect } from 'react';
import NavbarComponent from '../navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import ViewOrderDashboard from '../viewOrderDashboard/ViewOrderDashboard';

const DashboardComponent = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(false);
  const [hideWelcomeText, setHideWelcomeText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = localStorage.getItem('admin');
    const token = localStorage.getItem('token');

    if (!adminData || !token) {
      navigate('/');
      return;
    }

    const user = JSON.parse(adminData);
    if (user.status !== 'admin' && user.status !== 'manager') {
      navigate('/');
      return;
    }

    setShowWelcomeText(true);
    const timer = setTimeout(() => {
      setHideWelcomeText(true);
    }, 2000); // Hide welcome text after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <>
      <NavbarComponent />
      <div className="container mt-2">
        <h4 className={`welcome-text ${hideWelcomeText ? 'hidden' : ''}`}>Welcome to Admin Panel</h4>
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
            <Link to='/addmanagers'>
              <div className="card p-3 animate-card">
                <div className="card-body">
                  <span>Add Managers<i className="bx bxs-cart-add cart"></i></span>
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
            <Link to='/managemanagers'>
              <div className="card p-3 animate-card">
                <div className="card-body">
                  <span>Manage Managers<i className="bx bxs-cart-add cart"></i></span>
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
