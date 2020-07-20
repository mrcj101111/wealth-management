import React from 'react';
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditStock = (props) => {
    let lastId = 0;
    return (
        <>
            <Form>
                {
                    Object.values(props.stocks).map(value => {
                        if (value.id.toString() === props.match.params.id) {
                            return (
                                <div className="stock-card-view" key={value.id}>
                                    {Object.entries(value).map(entries => {
                                        if (entries[0] !== 'id') {
                                            return (
                                                <Form.Group key={lastId++}>
                                                    <Form.Label>{entries[0]}</Form.Label>
                                                    <Form.Control type="text" placeholder={entries[1]} />
                                                </Form.Group>
                                            )
                                        }
                                        return true;
                                    })}
                                </div>
                            )
                        }
                        return true;
                    })
                }
                < Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(EditStock);