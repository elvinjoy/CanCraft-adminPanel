import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNewSIzeRatio.css'
const AddNewSizeRatio = ({ addSizeRatio }) => {
    const [sizeRatio, setSizeRatio] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (sizeRatio && width && height) {
            addSizeRatio({ sizeRatio, width, height });
            setSizeRatio('');
            setWidth('');
            setHeight('');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Add New Size Ratio</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formSizeRatio">
                            <Form.Control
                                type="text"
                                placeholder="Enter new size ratio"
                                value={sizeRatio}
                                onChange={(e) => setSizeRatio(e.target.value)}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formWidth" className="mt-3">
                            <Form.Control
                                type="number"
                                placeholder="Enter the width of the frame"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formHeight" className="mt-3">
                            <Form.Control
                                type="number"
                                placeholder="Enter the height of the frame"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4 w-100">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddNewSizeRatio;
