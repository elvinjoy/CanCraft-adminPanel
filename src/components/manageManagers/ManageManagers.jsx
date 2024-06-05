import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ManageManagers = () => {
    const [managers, setManagers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const response = await axios.get('http://localhost:3000/api/admin/allmanagers', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setManagers(response.data.managers);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching managers:', error);
                setLoading(false);
            }
        };

        fetchManagers();
    }, []);

    const handleDelete = async (managerId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this manager?');
        if (confirmDelete) {
            try {
                const token = localStorage.getItem('adminToken');
                await axios.delete(`http://localhost:3000/api/admin/manager/${managerId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setManagers(managers.filter(manager => manager._id !== managerId));
            } catch (error) {
                console.error('Error deleting manager:', error);
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
        </div>
    );
};

export default ManageManagers;
