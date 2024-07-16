import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewOrders = () => {
    const navigate = useNavigate();

    const initialOrders = [
        {
            id: 1,
            product: 'Laptop',
            name: 'John Doe',
            date: '2024-05-01',
            amount: '$999',
            address: '123 Main St, Cityville, ST 12345',
            email: 'johndoe@example.com',
            phone: '123-456-7890',
            status: 'not dispatched'
        },
        // other orders...
    ];

    const [orderList, setOrderList] = useState(initialOrders);

    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        const token = localStorage.getItem('token');

        if (!adminData || !token) {
            navigate('/managerlogin');
            return;
        }

        const user = JSON.parse(adminData);
        if (user.status !== 'admin' && user.status !== 'manager') {
            navigate('/managerlogin');
            return;
        }
    }, [navigate]);

    const handleStatusChange = (orderId) => {
        const updatedOrders = orderList.map(order =>
            order.id === orderId ? { ...order, status: order.status === 'not dispatched' ? 'dispatched' : 'not dispatched' } : order
        );
        setOrderList(updatedOrders);
    };

    const handleAccept = (orderId) => {
        alert(`Order ${orderId} accepted`);
    };

    const handleReject = (orderId) => {
        alert(`Order ${orderId} rejected`);
    };

    const handleRowClick = (orderId) => {
        navigate(`/particularorder/${orderId}`);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">All Orders</h1>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>si.no</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Accept</th>
                            <th>Reject</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.slice().reverse().map((order) => (
                            <tr key={order.id} onClick={() => handleRowClick(order.id)} style={{ cursor: 'pointer' }}>
                                <td>{order.id}</td>
                                <td>{order.product}</td>
                                <td>{order.name}</td>
                                <td>{order.amount}</td>
                                <td>{order.address}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>
                                    <Button variant="success" onClick={(e) => { e.stopPropagation(); handleAccept(order.id); }}>Dispatched</Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={(e) => { e.stopPropagation(); handleReject(order.id); }}>Not Dispatched</Button>
                                </td>
                                <td
                                    style={{ cursor: 'pointer', color: order.status === 'dispatched' ? 'green' : 'red' }}
                                    onClick={(e) => { e.stopPropagation(); handleStatusChange(order.id); }}
                                >
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ViewOrders;
