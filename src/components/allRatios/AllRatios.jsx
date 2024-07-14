import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../constants/constants';

const AllSizeRatios = () => {
    const [allDimensions, setAllDimensions] = useState({});

    useEffect(() => {
        fetchDimensions();
    }, []);

    const fetchDimensions = async () => {
        try {
            const response = await fetch(`${BASE_URL}/dimensions/allratios`);
            if (!response.ok) {
                throw new Error('Failed to fetch dimensions');
            }
            const data = await response.json();
            setAllDimensions(data);
        } catch (error) {
            console.error('Error fetching dimensions:', error);
            toast.error('Failed to fetch dimensions');
        }
    };

    const handleDelete = async (dimension) => {
        try {
            const response = await fetch(`${BASE_URL}/dimensions/${dimension}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete dimension');
            }
            toast.success('Dimension deleted successfully');
            fetchDimensions(); // Refresh the dimensions after deletion
        } catch (error) {
            console.error('Error deleting dimension:', error);
            toast.error('Failed to delete dimension');
        }
    };

    const demoData = {
        "120x180 cm": {
            portrait: { width: 360, height: 540 },
            landscape: { width: 540, height: 360 },
        },
        "90x120 cm": {
            portrait: { width: 450, height: 600 },
            landscape: { width: 600, height: 450 },
        },
        "50x70 cm": {
            portrait: { width: 200, height: 280 },
            landscape: { width: 280, height: 200 },
        },
        "60x90 cm": {
            portrait: { width: 240, height: 360 },
            landscape: { width: 360, height: 240 },
        },
        "80x120 cm": {
            portrait: { width: 320, height: 480 },
            landscape: { width: 480, height: 320 },
        },
        "100x150 cm": {
            portrait: { width: 400, height: 600 },
            landscape: { width: 600, height: 400 },
        },
        "70x100 cm": {
            portrait: { width: 280, height: 400 },
            landscape: { width: 400, height: 280 },
        },
        "40x60 cm": {
            portrait: { width: 160, height: 240 },
            landscape: { width: 240, height: 160 },
        },
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center">All Size Ratios</h3>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Dimension</th>
                        <th>Portrait Width</th>
                        <th>Portrait Height</th>
                        <th>Landscape Width</th>
                        <th>Landscape Height</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(demoData).map((dimension, index) => (
                        <tr key={index}>
                            <td>{dimension}</td>
                            <td>{demoData[dimension].portrait.width}</td>
                            <td>{demoData[dimension].portrait.height}</td>
                            <td>{demoData[dimension].landscape.width}</td>
                            <td>{demoData[dimension].landscape.height}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(dimension)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default AllSizeRatios;
