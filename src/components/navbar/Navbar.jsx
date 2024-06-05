import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/cancraft-logo-white.png';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const NavbarComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate hook for navigation

    const toggleSidebar = () => {
        console.log("Toggling sidebar");
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('admin');
        localStorage.removeItem('token'); // Remove the token as well
        navigate('/login'); // navigate to the login page
    };
    

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebarOpen && sidebar && !sidebar.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarOpen]);

    return (
        <>
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h4>Admin Panel</h4>
                    <button className="close-btn" onClick={closeSidebar}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                <hr />
                <div className="sidebar-content">
                    <ul className="sidebar-menu">
                        <Link to="/vieworders"><li>View orders</li></Link>
                        <Link to="/manageusers"><li>Manage Users</li></Link>
                        <Link to="/addnewsizeratio"><li>Add New Size Ratio</li></Link>
                        <Link to="/Card4"><li>Card 4</li></Link>
                        <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src={logo} alt="Logo" className="navbar-logo img-fluid mx-auto d-block" />
                </div>
            </nav>
        </>
    );
};

export default NavbarComponent;
