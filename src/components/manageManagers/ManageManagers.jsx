import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/constants';

const ManageManagers = () => {
    const [managers, setManagers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchManagers = async () => {
            const adminData = localStorage.getItem('admin');
            const token = localStorage.getItem('token');

            if (!adminData || !token) {
                navigate('/');
                return;
            }

            try {
                const response = await axios.get(`${BASE_URL}/admin/allmanagers`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                // console.log('Response data:', response.data);

                if (response.data && response.data.managers) {
                    setManagers(response.data.managers);
                } else {
                    toast.error('Failed to load managers data');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching managers:', error);
                toast.error('Error fetching managers');
                setLoading(false);
            }
        };

        fetchManagers();
    }, [navigate]);

    const handleDelete = async (managerId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this manager?');
        if (confirmDelete) {
            const adminData = localStorage.getItem('admin');
            if (adminData) {
                const admin = JSON.parse(adminData);
                if (admin.status !== 'admin') {
                    toast.error('You don\'t have permission to delete manager');
                    return;
                }
            } else {
                toast.error('You are not an admin');
                navigate('/login');
                return;
            }

            try {
                const token = localStorage.getItem('token');
                await axios.delete(`${BASE_URL}/admin/manager/${managerId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setManagers(managers.filter(manager => manager._id !== managerId));
                toast.success('Manager deleted successfully');
            } catch (error) {
                console.error('Error deleting manager:', error);
                toast.error('Failed to delete manager');
            }
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: loading ? 'center' : 'flex-start', height: '100vh', marginTop: '20px' }}>
            {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontSize: '28px', color: 'blue' }}>Loading...</p>
                    <Spinner animation="border" role="status" style={{ marginTop: '10px', color: 'blue' }}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    <h1 style={{ textAlign: 'center' }}>Manage Managers</h1>
                    <Table striped bordered hover style={{ width: '80%', marginTop: '20px' }}>
                        <thead>
                            <tr align="center">
                                <th>Si.no</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete Manager</th>
                            </tr>
                        </thead>
                        <tbody>
                            {managers.slice().reverse().map((manager, index) => (
                                <tr align="center" key={manager._id}>
                                    <td>{index + 1}</td>
                                    <td>{manager.name}</td>
                                    <td>{manager.email}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(manager._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
            <ToastContainer />
        </div>
    );
};

export default ManageManagers;
