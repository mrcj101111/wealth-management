import React from 'react';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../store/actions'

class Stocks extends React.Component {
    componentDidMount() {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <>
<h1>stocks</h1>
{console.log(this.props.stocks.length)}
{this.props.stocks.length <= 0 ? 
"You don't have any stocks loaded. Please add stocks by clicking on the button": "this.props.stocks"}

            </>
        )
    
    }
}


// const Stocks: React.FunctionComponent = (props) => <h1>Stocks</h1>

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(Stocks);
