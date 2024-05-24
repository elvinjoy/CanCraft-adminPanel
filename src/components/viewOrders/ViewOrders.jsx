import React, { useState } from 'react';
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
        {
            id: 2,
            product: 'Smartphone',
            name: 'Jane Smith',
            date: '2024-04-21',
            amount: '$699',
            address: '456 Oak St, Townsville, ST 67890',
            email: 'janesmith@example.com',
            phone: '987-654-3210',
            status: 'not dispatched'
        },
        {
            id: 3,
            product: 'Headphones',
            name: 'Mike Johnson',
            date: '2024-03-15',
            amount: '$199',
            address: '789 Pine St, Villageville, ST 54321',
            email: 'mikejohnson@example.com',
            phone: '555-123-4567',
            status: 'not dispatched'
        },
        {
            id: 4,
            product: 'Smartwatch',
            name: 'Alice Brown',
            date: '2024-02-10',
            amount: '$299',
            address: '101 Maple St, Hamletville, ST 67890',
            email: 'alicebrown@example.com',
            phone: '444-555-6666',
            status: 'not dispatched'
        },
        {
            id: 5,
            product: 'Tablet',
            name: 'Chris Wilson',
            date: '2024-01-30',
            amount: '$499',
            address: '202 Elm St, Boroughville, ST 12345',
            email: 'chriswilson@example.com',
            phone: '333-444-5555',
            status: 'not dispatched'
        },
        {
            id: 6,
            product: 'Camera',
            name: 'Laura Martinez',
            date: '2024-01-15',
            amount: '$599',
            address: '303 Birch St, Cityville, ST 12345',
            email: 'lauram@example.com',
            phone: '222-333-4444',
            status: 'not dispatched'
        },
        {
            id: 7,
            product: 'Gaming Console',
            name: 'Paul Walker',
            date: '2024-02-28',
            amount: '$499',
            address: '404 Cedar St, Townsville, ST 67890',
            email: 'paulwalker@example.com',
            phone: '111-222-3333',
            status: 'not dispatched'
        },
        {
            id: 8,
            product: 'Television',
            name: 'Anna Scott',
            date: '2024-03-22',
            amount: '$899',
            address: '505 Walnut St, Villageville, ST 54321',
            email: 'annascott@example.com',
            phone: '888-999-0000',
            status: 'not dispatched'
        },
        {
            id: 9,
            product: 'Bluetooth Speaker',
            name: 'Mark Robinson',
            date: '2024-04-05',
            amount: '$149',
            address: '606 Ash St, Hamletville, ST 67890',
            email: 'markrobinson@example.com',
            phone: '777-888-9999',
            status: 'dispatched'
        },
        {
            id: 10,
            product: 'Fitness Tracker',
            name: 'Jessica Lee',
            date: '2024-04-19',
            amount: '$99',
            address: '707 Fir St, Boroughville, ST 12345',
            email: 'jessicalee@example.com',
            phone: '666-777-8888',
            status: 'dispatched'
        },
        {
            id: 11,
            product: 'E-reader',
            name: 'David King',
            date: '2024-05-03',
            amount: '$129',
            address: '808 Spruce St, Cityville, ST 12345',
            email: 'davidking@example.com',
            phone: '555-666-7777',
            status: 'not dispatched'
        },
        {
            id: 12,
            product: 'Drone',
            name: 'Emily Davis',
            date: '2024-03-11',
            amount: '$499',
            address: '909 Hemlock St, Townsville, ST 67890',
            email: 'emilydavis@example.com',
            phone: '444-555-6666',
            status: 'not dispatched'
        },
        {
            id: 13,
            product: 'Virtual Reality Headset',
            name: 'Chris Harris',
            date: '2024-02-20',
            amount: '$399',
            address: '1010 Cypress St, Villageville, ST 54321',
            email: 'chrisharris@example.com',
            phone: '333-444-5555',
            status: 'not dispatched'
        },
        {
            id: 14,
            product: 'Action Camera',
            name: 'Sara Thompson',
            date: '2024-01-05',
            amount: '$249',
            address: '1111 Alder St, Hamletville, ST 67890',
            email: 'sarathompson@example.com',
            phone: '222-333-4444',
            status: 'not dispatched'
        },
        {
            id: 15,
            product: 'Portable Charger',
            name: 'Ryan White',
            date: '2024-04-25',
            amount: '$59',
            address: '1212 Willow St, Boroughville, ST 12345',
            email: 'ryanwhite@example.com',
            phone: '111-222-3333',
            status: 'not dispatched'
        }
    ];

    const [orderList, setOrderList] = useState(initialOrders);

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
