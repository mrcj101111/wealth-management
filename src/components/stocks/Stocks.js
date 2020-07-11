import React from 'react';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../store/actions';
import noStock from './NoStock';
import AddStock from './addStock/AddStock'
import { Route } from 'react-router-dom';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Stocks extends React.Component {
    componentDidMount() {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <div className="main-section">
                <div className="row">
                    <div className="col main-section__col">
                        <h1>Stocks</h1>
                    </div>
                    <div className="col-1 main-section__col">
                        {this.props.location.pathname === "/stocks/add-stock" &&
                            <div onClick={this.props.history.goBack} className="main-section__back-button">
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
                            </div>
                        }
                    </div>
                </div>
                {this.props.stocks.length <= 0 ? <Route exact path="/stocks" component={noStock} /> : "this.props.stocks"}
                <Route exact path="/stocks/add-stock" component={AddStock} />
            </div>
        )

    }
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(Stocks);
