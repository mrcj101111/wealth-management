import React from 'react';
import AddStockForm from './AddStockForm';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../../store/actions';

class AddStock extends React.Component {

    componentDidMount() {
        this.props.dispatch(getStocksFromApi());
    }

    componentDidUpdate() {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <>
                <AddStockForm {...this.props} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(AddStock);
