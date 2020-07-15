import React from 'react';
import NoStock from './NoStock';
import StockList from './stockList/StockList';

const CheckStockList = (props) => {
    return (
        <>
            {props.stocks.length <= 0 ? <NoStock /> : <StockList {...props} />}
        </>
    )
}

export default CheckStockList;
