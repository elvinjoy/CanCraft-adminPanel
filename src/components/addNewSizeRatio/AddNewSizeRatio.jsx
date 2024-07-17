import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../constants/constants';

const AddNewSizeRatio = () => {
    const [dimension, setDimension] = useState('');
    const [portraitWidth, setPortraitWidth] = useState('');
    const [portraitHeight, setPortraitHeight] = useState('');
    const [landscapeWidth, setLandscapeWidth] = useState('');
    const [landscapeHeight, setLandscapeHeight] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');
        if (!adminData || !token) {
            navigate('/');
            return;
        }

        const admin = JSON.parse(adminData);
        if (admin.status !== 'admin') {
            toast.error('You do not have permission to add new size ratios.');
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const adminData = localStorage.getItem('admin');
        if (adminData) {
            const admin = JSON.parse(adminData);
            if (admin.status !== 'admin') {
                toast.error('You do not have permission to add new size ratios.');
                return;
            }
        } else {
            toast.error('You do not have permission to add new size ratios.');
            navigate('/');
            return;
        }

        const newData = {
            [dimension]: {
                portrait: {
                    width: parseInt(portraitWidth, 10),
                    height: parseInt(portraitHeight, 10),
                },
                landscape: {
                    width: parseInt(landscapeWidth, 10),
                    height: parseInt(landscapeHeight, 10),
                },
            },
        };

        // Console log the newData before sending
        console.log('Data to be sent:', newData);

        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/dimensions/dimensions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to add size ratio');
            }

            toast.success('Size ratio added successfully.');
            setDimension('');
            setPortraitWidth('');
            setPortraitHeight('');
            setLandscapeWidth('');
            setLandscapeHeight('');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to add size ratio');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow p-4 w-50">
                <h3 className="card-title text-center mb-4">Add New Size Ratio</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="dimension" className="form-label">Dimension (e.g., 120x180 cm)</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="dimension" 
                            value={dimension} 
                            onChange={(e) => setDimension(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="portraitWidth" className="form-label">Portrait Width</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="portraitWidth" 
                            value={portraitWidth} 
                            onChange={(e) => setPortraitWidth(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="portraitHeight" className="form-label">Portrait Height</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="portraitHeight" 
                            value={portraitHeight} 
                            onChange={(e) => setPortraitHeight(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="landscapeWidth" className="form-label">Landscape Width</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="landscapeWidth" 
                            value={landscapeWidth} 
                            onChange={(e) => setLandscapeWidth(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="landscapeHeight" className="form-label">Landscape Height</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="landscapeHeight" 
                            value={landscapeHeight} 
                            onChange={(e) => setLandscapeHeight(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddNewSizeRatio;
