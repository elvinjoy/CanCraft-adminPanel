import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/constants';

const AllSizeRatios = () => {
    const [allDimensions, setAllDimensions] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true; // track if component is mounted

        const fetchDimensions = async () => {
            const adminData = localStorage.getItem('admin');
            const token = localStorage.getItem('token');

            if (!adminData || !token) {
                navigate('/managerlogin');
                return;
            }

            try {
                const response = await fetch(`${BASE_URL}/dimensions/alldimensions`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch dimensions');
                }
                const data = await response.json();
                if (isMounted) {
                    // console.log('Fetched dimensions:', data);
                    setAllDimensions(data);
                }
            } catch (error) {
                console.error('Error fetching dimensions:', error);
                if (isMounted) toast.error('Failed to fetch dimensions');
            } finally {
                if (isMounted) setLoading(false); // set loading to false once fetch is complete
            }
        };

        fetchDimensions();

        return () => {
            isMounted = false; // clean up function to set isMounted to false when component unmounts
        };
    }, [navigate]); // empty dependency array to run the effect only once

    const handleDelete = async (id) => {
        const adminData = localStorage.getItem('admin');
        if (!adminData) {
            toast.error('You do not have permission to delete dimensions.');
            return;
        }

        const admin = JSON.parse(adminData);
        if (admin.status !== 'admin') {
            toast.error('You do not have permission to delete dimensions.');
            return;
        }

        const confirmDelete = window.confirm('Are you sure you want to delete this dimension?');
        if (!confirmDelete) {
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${BASE_URL}/dimensions/alldimensions/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete dimension');
            }
            toast.success('Dimension deleted successfully');
            setAllDimensions(allDimensions.filter(dimension => dimension._id !== id)); 
        } catch (error) {
            console.error('Error deleting dimension:', error);
            toast.error('Failed to delete dimension');
        }
    };

    // console.log('Rendering with dimensions:', allDimensions); 

    return (
        <div className="container mt-4">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <h3 className="text-center">All Size Ratios</h3>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Dimension</th>
                                <th>Portrait Width</th>
                                <th>Portrait Height</th>
                                <th>Landscape Width</th>
                                <th>Landscape Height</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDimensions.length > 0 ? (
                                allDimensions.map((dimension) => {
                                    const dimensionKey = Object.keys(dimension.dimensions)[0];
                                    const { portrait, landscape } = dimension.dimensions[dimensionKey];

                                    return (
                                        <tr key={dimension._id}>
                                            <td>{dimension._id}</td>
                                            <td>{dimensionKey}</td>
                                            <td>{portrait.width}</td>
                                            <td>{portrait.height}</td>
                                            <td>{landscape.width}</td>
                                            <td>{landscape.height}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(dimension._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No dimensions available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <ToastContainer />
                </>
            )}
        </div>
    );
};

export default AllSizeRatios;
