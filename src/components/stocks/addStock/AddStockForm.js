import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import addStockToApi from '../../../services/Api.service';

const AddStockForm = (props) => {
    const [validated, setValidated] = useState(false);
    const [stock, setStock] = useState({
        symbol: '',
        companyName: '',
        amountOfShares: '',
        purchasePrice: ''
    });
    const [errors, setError] = useState({
        error: '',
    })

    const onChange = (e) => {
        setStock({
            ...stock,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.persist();
        addStockToApi(stock.symbol, stock.companyName, stock.amountOfShares, stock.purchasePrice).then(resp => {
            if (resp === 201) {
                props.history.push('/stocks')
            } else if (resp === 409) {
                event.preventDefault();
                setError({ error: 'Oops, stock already exists. Please add a different stock.' })
            } else {
                setError({ error: 'Oops, something went wrong. Please try again later.' })
            }
        });
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group controlId="symbol">
                        <Form.Label>Ticker symbol</Form.Label>
                        <Form.Control name="symbol" required type="text" placeholder='eg. INTC' onChange={onChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add a ticker symbol.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control name="companyName" required type="text" placeholder="eg. Intel" onChange={onChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add a company name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="amountOfShares">
                        <Form.Label>Amount Of Shares</Form.Label>
                        <Form.Control name="amountOfShares" required type="number" placeholder="eg. 100" onChange={onChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add amount of shares.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="purchasePrice">
                        <Form.Label>Average Purchase Price ($)</Form.Label>
                        <Form.Control name="purchasePrice" required type="number" placeholder="eg. 60" onChange={onChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please add average purchase price.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            {errors ? <p className="text-danger">{errors.error}</p> : ''}
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default AddStockForm;
