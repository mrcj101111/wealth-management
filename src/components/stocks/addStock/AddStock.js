import React from 'react';
import AddStockForm from './AddStockForm';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../../store/actions';

class AddStock extends React.Component {

    updateState = () => {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <>
                <AddStockForm {...this.props} updateState={this.updateState} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(AddStock);
