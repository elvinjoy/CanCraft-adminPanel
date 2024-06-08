import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNewSIzeRatio.css';
import { BASE_URL } from '../../constants/constants';

const AddNewSizeRatio = () => {
    const [buttonSizeRatio, setButtonSizeRatio] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');
        if (!adminData || !token) {
            navigate('/login');
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

        if (buttonSizeRatio && width && height) {
            const newButtonSizeRatio = { buttonSizeRatio, width, height };
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/admin/addratios`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newButtonSizeRatio),
                });

                if (!response.ok) {
                    throw new Error('Failed to add button size ratio');
                }

                const data = await response.json();
                console.log('Button size ratio added successfully:', data);
                toast.success('Button size ratio added successfully.');
                setButtonSizeRatio('');
                setWidth('');
                setHeight('');
            } catch (error) {
                console.error('Error:', error);
                toast.error('Failed to add button size ratio');
            } finally {
                setLoading(false);
            }
        } else {
            toast.error('Please fill in all fields');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Add New Button Size Ratio</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formButtonSizeRatio">
                            <Form.Control
                                type="text"
                                placeholder="Enter new button size ratio"
                                value={buttonSizeRatio}
                                onChange={(e) => setButtonSizeRatio(e.target.value)}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formWidth" className="mt-3">
                            <Form.Control
                                type="number"
                                placeholder="Enter the width of the button"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formHeight" className="mt-3">
                            <Form.Control
                                type="number"
                                placeholder="Enter the height of the button"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4 w-100" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default AddNewSizeRatio;
