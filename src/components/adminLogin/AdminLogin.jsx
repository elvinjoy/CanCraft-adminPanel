import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
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
                            <label htmlFor="username" className="col-sm-4 col-form-label" style={{ fontSize: '18px', color: '#495057', textAlign: 'left' }}>
                                Username
                            </label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ fontSize: '16px' }} />
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
