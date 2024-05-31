import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/admin/users');
                console.log('Fetched users:', response.data.users);
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleAccept = async (userId) => {
        const confirmAccept = window.confirm('Are you sure?');
        if (confirmAccept) {
            try {
                const response = await axios.put(`http://localhost:3000/api/admin/users/${userId}/status`, { status: 0 });
                setUsers(users.map(user => user._id === userId ? { ...user, status: 0 } : user));
            } catch (error) {
                console.error('Error updating user status:', error);
            }
        }
    };

    const handleDelete = async (userId) => {
        const confirmDelete = window.confirm('Are you sure?');
        if (confirmDelete) {
            try {
                const response = await axios.put(`http://localhost:3000/api/admin/users/${userId}/status`, { status: 1 });
                setUsers(users.map(user => user._id === userId ? { ...user, status: 1 } : user));
            } catch (error) {
                console.error('Error updating user status:', error);
            }
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Manage Users</h1>
            <Table striped bordered hover style={{ width: '80%', marginTop: '20px' }}>
                <thead>
                    <tr align="center">
                        <th>Si.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Approve</th>
                        <th>Reject</th>
                        <th>View Profile</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr align="center" key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="success" onClick={() => handleAccept(user._id)}>Accept</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
                            </td>

                            <td>
                                <a href={`/viewProfile/${user._id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                        <path fill="#000000" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                    </svg>
                                </a>
                            </td>
                            <td>
                                {user.status === 0 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                        <path fill="#12f337" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                    </svg>
                                ) : user.status === 1 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                        <path fill="#fa0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                                    </svg>
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageUsers;
