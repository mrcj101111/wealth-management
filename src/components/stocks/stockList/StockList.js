import React from 'react';
import { NavLink } from 'react-router-dom';

const StockList = (props) => {
    return (
        <>
            {props.stocks.length && props.stocks.map(stocks => {
                return (
                    <NavLink key={stocks.id} to={`/stocks/${stocks.id}`}>
                        <div className="stock-list-card" >
                            <div className="row">
                                <div className="col-3">
                                    {stocks.company}
                            ({stocks.symbol})
                            </div>
                                <div className="col-2">
                                    {stocks.marketValue}
                                </div>
                                <div className="col-2">
                                    {stocks.growth}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                )
            })
            }
        </>
    )
}

export default StockList;
