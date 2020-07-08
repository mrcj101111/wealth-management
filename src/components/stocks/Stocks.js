import React from 'react';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../store/actions'

class Stocks extends React.Component {
    componentDidMount() {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <h1>stocks</h1>
        )
    
    }
}


// const Stocks: React.FunctionComponent = (props) => <h1>Stocks</h1>

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(Stocks);
