import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './CreatePrice.css'; 
import { BASE_URL } from '../../constants/constants';

const CreatePrice = () => {
    const [dimension, setDimension] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');

        if (!adminData || !token) {
            toast.error('You are not authorized');
            navigate('/');
            return;
        }

        const admin = JSON.parse(adminData);
        if (admin.status !== 'admin') {
            toast.error('You are not authorized');
            return;
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');
        if (adminData) {
            const admin = JSON.parse(adminData);
            if (admin.status !== 'admin') {
                toast.error('You are not authorized to create prices');
                return;
            }
        } else {
            toast.error('You are not an admin');
            navigate('/');
            return;
        }
    
        const priceData = { [dimension]: parseFloat(price) };
    
        try {
            const response = await fetch(`${BASE_URL}/price/createprice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(priceData)
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Price created:', result);
                toast.success('Price created successfully');
                // Reset form fields
                setDimension('');
                setPrice('');
            } else {
                console.error('Error creating price');
                toast.error('Error creating price');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(`Error: ${error.message}`);
        }
    };
    
    return (
        <div className="create-price-wrapper">
            <div className="create-price-container">
                <h2 className="create-price-title">Create Price</h2>
                <form onSubmit={handleSubmit} className="create-price-form">
                    <div className="create-price-form-group">
                        <label htmlFor="dimension" className="create-price-label">Dimension:</label>
                        <input
                            type="text"
                            id="dimension"
                            value={dimension}
                            onChange={(e) => setDimension(e.target.value)}
                            required
                            className="create-price-input"
                        />
                    </div>
                    <div className="create-price-form-group">
                        <label htmlFor="price" className="create-price-label">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className="create-price-input"
                        />
                    </div>
                    <button type="submit" className="create-price-submit-btn">Create Price</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CreatePrice;
