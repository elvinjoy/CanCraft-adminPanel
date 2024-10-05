import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewOrders.css'; // Make sure to import your CSS file

const OrderDetails = () => {
    const [orders, setOrders] = useState([]); // Use an array to hold multiple orders

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('https://cancraft-admin-panel-backend-6smr.onrender.com/api/order/getAllOrders', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setOrders(data.reverse()); // Reverse the order of fetched data
            })
            .catch((error) => {
                console.error('Error fetching order data:', error);
            });
    }, []);

    // Format ISO timestamp to a readable date
    const formatDate = (timestamp) => {
        if (!timestamp) return "N/A";
        const date = new Date(timestamp);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };

    // Function to map paymentStatus codes to readable labels
    const getPaymentStatusLabel = (status) => {
        switch (status) {
            case 0:
                return 'Order placed, not paid';
            case 1:
                return 'Payment succeeded';
            case 2:
                return 'Payment failed';
            case 3:
                return 'Pending';
            case 4:
                return 'Refunded';
            case 5:
                return 'Processing';
            case 6:
                return 'Shipped';
            case 7:
                return 'Delivered';
            case 8:
                return 'Cancelled';
            case 9:
                return 'Returned';
            default:
                return 'Unknown status';
        }
    };

    // Function to determine CSS class based on payment status
    const getPaymentStatusClass = (status) => {
        switch (status) {
            case 1: // Payment succeeded
                return { color: '#28a745', fontWeight: 'bold' }; // Darker green and bold text
            case 2: // Payment failed
                return { color: '#dc3545', fontWeight: 'bold' }; // Red and bold text
            default:
                return {}; // No specific styling for other statuses
        }
    };


    if (orders.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center">Order Details</h1>

            <Table className="uniform-table" bordered hover>
                <thead>
                    <tr>
                        <th>#</th> {/* Sequential order number */}
                        <th>Dimension</th>
                        <th>Frame Color</th>
                        <th>Original Image</th>
                        <th>Cropped Image</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Payment Status</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, orderIndex) => (
                        order.itemlist.map((item, index) => (
                            <tr key={item._id}>
                                {index === 0 && (
                                    <td rowSpan={order.itemlist.length}>
                                        {orders.length - orderIndex} {/* Display sequential number in reverse order */}
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
                                <td>${item.price}</td>
                                {index === 0 && (
                                    <>
                                        <td rowSpan={order.itemlist.length}>${order.totalPrice}</td>
                                        <td rowSpan={order.itemlist.length} style={getPaymentStatusClass(order.paymentStatus)}>
                                            {getPaymentStatusLabel(order.paymentStatus)} {/* Map the status code */}
                                        </td>
                                        <td rowSpan={order.itemlist.length}>{formatDate(order.createdAt)}</td>
                                    </>
                                )}
                            </tr>
                        ))
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default OrderDetails;
