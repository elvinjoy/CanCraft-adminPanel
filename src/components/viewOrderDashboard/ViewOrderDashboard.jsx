import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './ViewOrderDashboard.css'; // Import the CSS file

const ViewOrderDashboard = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('https://cancraft-admin-panel-backend-6smr.onrender.com/api/order/getAllOrders', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const visibleOrders = data.slice(-3); // Show only last 3 orders
            setOrders(visibleOrders);
        })
        .catch(error => {
            console.error('Error fetching order data:', error);
        });
    }, []);

    const handleRowClick = (orderId) => {
        navigate(`/particularorder/${orderId}`);
    };

    const getPaymentStatus = (status) => {
        switch (status) {
            case 0:
                return 'Pending';
            case 1:
                return 'Paid';
            case 2:
                return 'Failed';
            default:
                return 'Unknown';
        }
    };

    return (
        <div className="container mt-4">
            <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
                <h4 className="text-center">View Orders</h4>
                <div className="table-responsive">
                    <Table striped bordered hover className="order-table">
                        <thead>
                            <tr>
                                <th style={{ width: '5%' }}>#</th>
                                <th style={{ width: '15%' }}>Dimension</th>
                                <th style={{ width: '15%' }}>Frame Color</th>
                                <th style={{ width: '20%' }}>Original Image</th>
                                <th style={{ width: '20%' }}>Cropped Image</th>
                                <th style={{ width: '10%' }}>Total Price</th>
                                <th style={{ width: '10%' }}>Payment Status</th>
                                <th style={{ width: '10%' }}>Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, orderIndex) => (
                                order.itemlist.map((item, index) => (
                                    <tr key={item._id} onClick={() => handleRowClick(order._id)} style={{ cursor: 'pointer' }}>
                                        {index === 0 && (
                                            <td rowSpan={order.itemlist.length}>
                                                {orders.length - orderIndex} {/* Display sequential number */}
                                            </td>
                                        )}
                                        <td>{item.dimension}</td>
                                        <td>{item.frameColor}</td>
                                        <td>
                                            <img src={item.orginalImage} alt="Original" width={100} height={100} />
                                        </td>
                                        <td>
                                            <img src={item.cropedImage} alt="Cropped" width={100} height={100} />
                                        </td>
                                        {index === 0 && (
                                            <>
                                                <td rowSpan={order.itemlist.length}>${order.totalPrice}</td>
                                                <td rowSpan={order.itemlist.length}>{getPaymentStatus(order.paymentStatus)}</td>
                                                <td rowSpan={order.itemlist.length}>{new Date(order.createdAt).toLocaleString()}</td>
                                            </>
                                        )}
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="text-center mt-3">
                    <Button onClick={() => navigate('/vieworders')}>See All Orders</Button>
                </div>
            </div>
        </div>
    );
};

export default ViewOrderDashboard;
