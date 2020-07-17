import React from 'react';
import { NavLink } from 'react-router-dom';
import { faTrashAlt, faEye, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StockList = (props) => {
    return (
        <>
            {props.stocks.length && props.stocks.map(stocks => {
                return (
                    <div className="stock-list-card" key={stocks.id}>
                        <div className="row">
                            <div className="col-3">
                                {stocks.company + ' '}
                                    ({stocks.symbol})
                                </div>
                            <div className="col-2">
                                <strong>Cost: </strong>
                                {stocks.cost}
                            </div>
                            <div className="col-3">
                                <strong>Market Value: </strong>
                                {stocks.marketValue}
                            </div>
                            <div className="col">
                                <strong>Profit/Loss: </strong>
                                <div className={`d-inline ${parseFloat(stocks.growth) < 0 ? 'text-danger' : 'text-success'}`}>
                                    {stocks.growth}%
                                </div>
                            </div>
                            <NavLink key={stocks.id} to={`/stocks/${stocks.id}`}>
                                <FontAwesomeIcon className="stock-list-card__icon view float-right" icon={faEye} size="lg" />
                            </NavLink>
                            <FontAwesomeIcon className="stock-list-card__icon delete float-right" icon={faTrashAlt} size="lg" />
                            <FontAwesomeIcon className="stock-list-card__icon update float-right" icon={faPenAlt} size="lg" />
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default StockList;
