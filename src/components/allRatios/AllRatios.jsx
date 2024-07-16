import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../constants/constants';

const AllSizeRatios = () => {
    const [allDimensions, setAllDimensions] = useState([]);

    useEffect(() => {
        fetchDimensions();
    }, []);

    const fetchDimensions = async () => {
        try {
            const response = await fetch(`${BASE_URL}/dimensions/dimensions`);
            if (!response.ok) {
                throw new Error('Failed to fetch dimensions');
            }
            const data = await response.json();
            console.log('Fetched dimensions:', data);
            setAllDimensions(data);
        } catch (error) {
            console.error('Error fetching dimensions:', error);
            toast.error('Failed to fetch dimensions');
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/api/dimensions/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete dimension');
            }
            toast.success('Dimension deleted successfully');
            fetchDimensions(); // Refresh dimensions after deletion
        } catch (error) {
            console.error('Error deleting dimension:', error);
            toast.error('Failed to delete dimension');
        }
    };

    console.log('Rendering with dimensions:', allDimensions); // Log dimensions for render check

    return (
        <div className="container mt-4">
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
        </div>
    );
};

export default AllSizeRatios;
