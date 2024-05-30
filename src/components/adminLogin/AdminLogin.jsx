import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../constants/constants';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${BASE_URL}/admin/login`, {
                email,
                password
            });
    
            if (response.status === 200) {
                navigate('/dashboard'); 
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-header text-white bg-dark text-center" style={{ fontSize: '24px', borderRadius: '10px 10px 0 0' }}>
                    Admin Login
                </div>
                <div className="card-body border border-1 border-dark" style={{ borderRadius: '0 0 10px 10px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row mb-4">
                            <label htmlFor="email" className="col-sm-4 col-form-label" style={{ fontSize: '18px', color: '#495057', textAlign: 'left' }}>
                                Email
                            </label>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ fontSize: '16px' }} />
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="password" className="col-sm-4 col-form-label" style={{ fontSize: '18px', color: '#495057', textAlign: 'left' }}>
                                Password
                            </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ fontSize: '16px' }} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" style={{ fontSize: '18px' }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
