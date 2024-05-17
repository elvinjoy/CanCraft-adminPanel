import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/cancraft-logo-white.png';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavbarComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        console.log("Toggling sidebar");
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebarOpen && !sidebar.contains(event.target)) {
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
                    <h4>CANCRAFT</h4>
                    <button className="close-btn" onClick={closeSidebar}>
                        <i className="bi bi-x text-dark"></i>
                    </button>
                </div>
                <hr />
                <div className="sidebar-content">
                    <ul className="sidebar-menu">
                        <li><Link to="/">Demo</Link></li>
                        <li><Link to="/">Demo</Link></li>
                        <li><Link to="/">Demo</Link></li>
                        <li><Link to="/">Demo</Link></li>
                        <li><Link to="/">Demo</Link></li>
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
