import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import { BASE_URL } from '../../constants/constants';

console.log(BASE_URL);



const AdminRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/admin/register`, formData);
            if (response.status === 200) {
                // Save admin data to localStorage
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
                localStorage.setItem('token', response.data.token);
                toast.success('Registration successful');
                navigate('/dashboard'); 
            } else {
                toast.error('Registration failed');
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
                <h2 className="text-center mb-4">Admin Registration</h2>
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
                                style={{ width: '70%' }}
                            />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-outline-secondary" onClick={toggleShowPassword}>
                                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : "Register"}
                    </Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AdminRegister;
