import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'

const AddStock = (props) => {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group controlId="symbol">
                        <Form.Label>Ticker symbol</Form.Label>
                        <Form.Control type="text" placeholder='eg. INTC' />
                    </Form.Group>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="eg. Intel" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="amountOfShares">
                        <Form.Label>Amount Of Shares</Form.Label>
                        <Form.Control type="text" placeholder="eg. 100" />
                    </Form.Group>

                    <Form.Group controlId="purchasePrice">
                        <Form.Label>Average Purchase Price ($)</Form.Label>
                        <Form.Control type="text" placeholder="eg. 60" />
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