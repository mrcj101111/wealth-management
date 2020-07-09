import React from 'react';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../store/actions';
import noStock from './NoStock';
import AddStock from './AddStock'
import { Route } from 'react-router-dom';

class Stocks extends React.Component {
    componentDidMount() {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <>
                <h1 className="Main-heading">Stocks</h1>
                {this.props.stocks.length <= 0 ? <Route exact path="/stocks" component={noStock} /> : "this.props.stocks"}
                <Route exact path="/stocks/add-stock" component={AddStock} />
            </>
        )

    }
}


// const Stocks: React.FunctionComponent = (props) => <h1>Stocks</h1>

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(Stocks);
