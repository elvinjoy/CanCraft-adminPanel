import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/api/admin/user/${id}`);
                setUser(response.data.user);
            } catch (error) {
                setError(error);
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (user) {
            console.log('User status:', user.status);
        }
    }, [user]);

    return (
        <div className="user-profile-container">
            <h1 className='user-profile'>User Profile</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading user data</p>
            ) : user ? (
                <div className="user-details">
                    <p><strong>user id:</strong> {user._id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Status:</strong> {user.status}</p>
                    <p>
                        <strong>Access to website:</strong> 
                        {user.status === '0' ? ' Approved ' : ' Rejected '}
                        {parseInt(user.status, 10) === 0 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path fill="#12f337" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                        ) : parseInt(user.status, 10) === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path fill="#fa0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                            </svg>
                        ) : null}
                    </p>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default UserProfile;
