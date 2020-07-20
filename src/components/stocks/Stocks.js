import React from 'react';
import { connect } from "react-redux";
import { getStocksFromApi } from '../../store/actions';
import AddStock from './addStock/AddStock'
import { Route } from 'react-router-dom';
import { faArrowAltCircleLeft, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ViewStock from './viewStock/ViewStock';
import { NavLink } from 'react-router-dom';
import StockList from './stockList/StockList';
import EditStock from './editStock/EditStock';

class Stocks extends React.Component {
    componentDidMount() {
        this.props.dispatch(getStocksFromApi());
    }

    render() {
        return (
            <>
                <div className="main-section">
                    <div className="row">
                        <div className="col">
                            <h1>Stocks</h1>
                        </div>
                        <div className="col-1 main-section__col p-0">
                            <NavLink to="/stocks/add-stock">
                                <div className="main-section__button float-right">
                                    <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-auto main-section__col">
                            {!this.props.match.isExact === true &&
                                <NavLink to="/stocks/">
                                    <div className="main-section__button float-right">
                                        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
                                    </div>
                                </NavLink>
                            }
                        </div>
                    </div>
                </div>
                <Route exact path="/stocks/" render={() => {
                    return this.props.stocks.length <= 0 ? <p>You do not have any stocks yet. Please click the button below to add stocks.</p> : <StockList {...this.props} />
                }} />
                <Route exact path="/stocks/:id" component={ViewStock} />
                <Route exact path="/stocks/add-stock" component={AddStock} />
                <Route exact path="/stocks/edit-stock/:id" component={EditStock} />
            </>
        )

    }
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(Stocks);
