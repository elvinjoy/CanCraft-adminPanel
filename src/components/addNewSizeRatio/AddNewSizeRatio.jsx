import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import prof from '../../assets/cerebro-math.gif';

const AddNewSizeRatio = () => {
    const [sizeRatio, setSizeRatio] = useState('');

    const handleInputChange = (event) => {
        setSizeRatio(event.target.value);
    };

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <Card style={{ maxWidth: '600px' }}>
                <Card.Body>
                    <Form.Group controlId="formSizeRatio">
                        <Form.Label>Add New Size Ratio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter new size ratio"
                            value={sizeRatio}
                            onChange={handleInputChange}
                            style={{ fontSize: '20px' }}
                        />
                        <img 
                            src={prof} 
                            alt="img" 
                            style={{ 
                                maxWidth: '100%', 
                                width: '100%', 
                                height: 'auto', 
                                paddingTop: '15px' 
                            }} 
                        />
                    </Form.Group>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddNewSizeRatio;
