import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ViewOrderDashboard = () => {
    const orders = [
        {
            id: 1,
            product: 'Laptop',
            name: 'John Doe',
            date: '2024-05-01',
            amount: '$999',
            address: '123 Main St, Cityville, ST 12345',
            email: 'johndoe@example.com',
            phone: '123-456-7890'
        },
        {
            id: 2,
            product: 'Smartphone',
            name: 'Jane Smith',
            date: '2024-04-21',
            amount: '$699',
            address: '456 Oak St, Townsville, ST 67890',
            email: 'janesmith@example.com',
            phone: '987-654-3210'
        },
        {
            id: 3,
            product: 'Headphones',
            name: 'Mike Johnson',
            date: '2024-03-15',
            amount: '$199',
            address: '789 Pine St, Villageville, ST 54321',
            email: 'mikejohnson@example.com',
            phone: '555-123-4567'
        },
        {
            id: 4,
            product: 'Smartwatch',
            name: 'Alice Brown',
            date: '2024-02-10',
            amount: '$299',
            address: '101 Maple St, Hamletville, ST 67890',
            email: 'alicebrown@example.com',
            phone: '444-555-6666'
        },
        {
            id: 5,
            product: 'Tablet',
            name: 'Chris Wilson',
            date: '2024-01-30',
            amount: '$499',
            address: '202 Elm St, Boroughville, ST 12345',
            email: 'chriswilson@example.com',
            phone: '333-444-5555'
        },
        {
            id: 6,
            product: 'Camera',
            name: 'Laura Martinez',
            date: '2024-01-15',
            amount: '$599',
            address: '303 Birch St, Cityville, ST 12345',
            email: 'lauram@example.com',
            phone: '222-333-4444'
        },
        {
            id: 7,
            product: 'Gaming Console',
            name: 'Paul Walker',
            date: '2024-02-28',
            amount: '$499',
            address: '404 Cedar St, Townsville, ST 67890',
            email: 'paulwalker@example.com',
            phone: '111-222-3333'
        },
        {
            id: 8,
            product: 'Television',
            name: 'Anna Scott',
            date: '2024-03-22',
            amount: '$899',
            address: '505 Walnut St, Villageville, ST 54321',
            email: 'annascott@example.com',
            phone: '888-999-0000'
        },
        {
            id: 9,
            product: 'Bluetooth Speaker',
            name: 'Mark Robinson',
            date: '2024-04-05',
            amount: '$149',
            address: '606 Ash St, Hamletville, ST 67890',
            email: 'markrobinson@example.com',
            phone: '777-888-9999'
        },
        {
            id: 10,
            product: 'Fitness Tracker',
            name: 'Jessica Lee',
            date: '2024-04-19',
            amount: '$99',
            address: '707 Fir St, Boroughville, ST 12345',
            email: 'jessicalee@example.com',
            phone: '666-777-8888'
        },
        {
            id: 11,
            product: 'E-reader',
            name: 'David King',
            date: '2024-05-03',
            amount: '$129',
            address: '808 Spruce St, Cityville, ST 12345',
            email: 'davidking@example.com',
            phone: '555-666-7777'
        },
        {
            id: 12,
            product: 'Drone',
            name: 'Emily Davis',
            date: '2024-03-11',
            amount: '$499',
            address: '909 Hemlock St, Townsville, ST 67890',
            email: 'emilydavis@example.com',
            phone: '444-555-6666'
        },
        {
            id: 13,
            product: 'Virtual Reality Headset',
            name: 'Chris Harris',
            date: '2024-02-20',
            amount: '$399',
            address: '1010 Cypress St, Villageville, ST 54321',
            email: 'chrisharris@example.com',
            phone: '333-444-5555'
        },
        {
            id: 14,
            product: 'Action Camera',
            name: 'Sara Thompson',
            date: '2024-01-05',
            amount: '$249',
            address: '1111 Alder St, Hamletville, ST 67890',
            email: 'sarathompson@example.com',
            phone: '222-333-4444'
        },
        {
            id: 15,
            product: 'Portable Charger',
            name: 'Ryan White',
            date: '2024-04-25',
            amount: '$59',
            address: '1212 Willow St, Boroughville, ST 12345',
            email: 'ryanwhite@example.com',
            phone: '111-222-3333'
        }
    ];

    const [visibleOrders, setVisibleOrders] = useState(10);
    const navigate = useNavigate();

    const handleSeeMore = () => {
        setVisibleOrders(prevVisibleOrders => prevVisibleOrders + 5);
        navigate('/vieworders');
    };

    return (
        <div className="container mt-4">
            <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
                <h4 className="text-center">View Orders</h4>
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.slice(0, visibleOrders).map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.product}</td>
                                    <td>{order.name}</td>
                                    <td>{order.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                {visibleOrders < orders.length && (
                    <div className="text-center mt-3">
                        <Button onClick={handleSeeMore}>See More</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewOrderDashboard;
