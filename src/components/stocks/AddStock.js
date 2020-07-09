import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'


const AddStock = (props) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group controlId="symbol">
                        <Form.Label>Ticker symbol</Form.Label>
                        <Form.Control required type="text" placeholder='eg. INTC' />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add a ticker symbol.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control required type="text" placeholder="eg. Intel" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add a company name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="amountOfShares">
                        <Form.Label>Amount Of Shares</Form.Label>
                        <Form.Control required type="number" placeholder="eg. 100" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add amount of shares.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="purchasePrice">
                        <Form.Label>Average Purchase Price ($)</Form.Label>
                        <Form.Control required type="number" placeholder="eg. 60" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add average purchase price.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default AddStock;