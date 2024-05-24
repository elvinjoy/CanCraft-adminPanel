import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParticularOrder = () => {
    const { id } = useParams();
    // Fetch the order details using the id or use dummy data for now
    const order = {
        id,
        product: 'Sample Product',
        name: 'Sample Name',
        date: '2024-05-01',
        amount: '$999',
        address: '123 Main St, Cityville, ST 12345',
        email: 'sample@example.com',
        phone: '123-456-7890',
        status: 'dispatched'
    };

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header as="h1" className="text-center">Order Details</Card.Header>
                <Card.Body>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Order ID:</strong></Col>
                        <Col sm={9}>{order.id}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Product:</strong></Col>
                        <Col sm={9}>{order.product}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Name:</strong></Col>
                        <Col sm={9}>{order.name}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Date:</strong></Col>
                        <Col sm={9}>{order.date}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Amount:</strong></Col>
                        <Col sm={9}>{order.amount}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Address:</strong></Col>
                        <Col sm={9}>{order.address}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Email:</strong></Col>
                        <Col sm={9}>{order.email}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Phone:</strong></Col>
                        <Col sm={9}>{order.phone}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={3}><strong>Status:</strong></Col>
                        <Col sm={9} style={{ color: order.status === 'dispatched' ? 'green' : 'red' }}>
                            {order.status}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ParticularOrder;
