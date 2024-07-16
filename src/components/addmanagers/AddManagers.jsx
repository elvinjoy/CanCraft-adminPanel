import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import {BASE_URL} from '../../constants/constants';

const AddManagers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');

        if (!adminData || !token) {
            // toast.error('You are not authorized');
            navigate('/managerlogin');
            return;
        }

        const admin = JSON.parse(adminData);
        if (admin.status !== 'admin') {
            toast.error('You are not authorized');
            // navigate('/managerlogin');
            return;
        }
    }, [navigate]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');
        if (adminData) {
            const admin = JSON.parse(adminData);
            if (admin.status !== 'admin') {
                toast.error('You are not an admin');
                setLoading(false);
                return;
            }
        } else {
            toast.error('You are not an admin');
            setLoading(false);
            navigate('/'); // Redirect to login or another appropriate page
            return;
        }

        try {
            const response = await axios.post(
                `${BASE_URL}/managers/register`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                toast.success('Manager added successfully');
                // navigate('/dashboard');
            } else {
                toast.error('Failed to add manager');
            }
        } catch (error) {
            toast.error(`Error: ${error.response?.data?.error || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="border p-5" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="text-center mb-4">Add Manager</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-outline-secondary" onClick={toggleShowPassword}>
                                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : "Add Manager"}
                    </Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddManagers;
