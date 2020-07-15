import React from 'react';

const StockList = (props) => {
    return (
        <>
            {props.stocks.length && props.stocks.map(stocks => {
                return (
                    <div className="stock-list-card" key={stocks.id}>
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
                )
            })
            }
        </>
    )
}

export default StockList;
