import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNewSIzeRatio.css';

const AddNewSizeRatio = () => {
    const [sizeRatio, setSizeRatio] = useState('');

    const handleInputChange = (event) => {
        setSizeRatio(event.target.value);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Add New Size Ratio</Card.Title>
                    <Form.Group controlId="formSizeRatio">
                        {/* Removing the Form.Label */}
                        <Form.Control
                            type="text"
                            placeholder="Enter new size ratio"
                            value={sizeRatio}
                            onChange={handleInputChange}
                            className="custom-input"
                        />
                    </Form.Group>
                    <Button variant="primary" className="mt-4 w-100">Submit</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddNewSizeRatio;
