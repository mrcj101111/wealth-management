import React from 'react';
import { connect } from "react-redux";

const EditStock = (props) => {
    return (
        <>
            <div className="main-section">
                <h1>Edit Stock</h1>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(EditStock);