import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageUsers = () => {
    // Dummy data for the table
    const users = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', address: '123 Main St, Cityville, ST 12345', registeredDate: '2023-01-15' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210', address: '456 Oak St, Townsville, ST 67890', registeredDate: '2023-02-20' },
        { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', phone: '555-123-4567', address: '789 Pine St, Villageville, ST 54321', registeredDate: '2023-03-05' },
        { id: 4, name: 'Alice Brown', email: 'alicebrown@example.com', phone: '444-555-6666', address: '101 Maple St, Hamletville, ST 67890', registeredDate: '2023-04-10' },
        { id: 5, name: 'Chris Wilson', email: 'chriswilson@example.com', phone: '333-444-5555', address: '202 Elm St, Boroughville, ST 12345', registeredDate: '2023-05-25' },
        { id: 6, name: 'Laura Martinez', email: 'lauram@example.com', phone: '222-333-4444', address: '303 Birch St, Cityville, ST 12345', registeredDate: '2023-06-15' },
        { id: 7, name: 'Paul Walker', email: 'paulwalker@example.com', phone: '111-222-3333', address: '404 Cedar St, Townsville, ST 67890', registeredDate: '2023-07-10' },
        { id: 8, name: 'Anna Scott', email: 'annascott@example.com', phone: '888-999-0000', address: '505 Walnut St, Villageville, ST 54321', registeredDate: '2023-08-01' },
        { id: 9, name: 'Mark Robinson', email: 'markrobinson@example.com', phone: '777-888-9999', address: '606 Ash St, Hamletville, ST 67890', registeredDate: '2023-09-05' },
        { id: 10, name: 'Jessica Lee', email: 'jessicalee@example.com', phone: '666-777-8888', address: '707 Fir St, Boroughville, ST 12345', registeredDate: '2023-10-25' },
        { id: 11, name: 'David King', email: 'davidking@example.com', phone: '555-666-7777', address: '808 Spruce St, Cityville, ST 12345', registeredDate: '2023-11-10' },
        { id: 12, name: 'Emily Davis', email: 'emilydavis@example.com', phone: '444-555-6666', address: '909 Hemlock St, Townsville, ST 67890', registeredDate: '2023-12-01' },
        { id: 13, name: 'Chris Harris', email: 'chrisharris@example.com', phone: '333-444-5555', address: '1010 Cypress St, Villageville, ST 54321', registeredDate: '2024-01-05' },
        { id: 14, name: 'Sara Thompson', email: 'sarathompson@example.com', phone: '222-333-4444', address: '1111 Alder St, Hamletville, ST 67890', registeredDate: '2024-02-15' },
        { id: 15, name: 'Ryan White', email: 'ryanwhite@example.com', phone: '111-222-3333', address: '1212 Willow St, Boroughville, ST 12345', registeredDate: '2024-03-10' }
    ];

    return (
        <div className="container mt-4">
            <h1>Manage Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Registered Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address}</td>
                            <td>{user.registeredDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageUsers;
