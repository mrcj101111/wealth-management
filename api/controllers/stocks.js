const express = require('express');
const db = require('../database');

// Get Stocks
exports.getStocks = (req, res) => {
    db('stocks')
        .select().then(result => {
            obj = result.map(data => {
                return {
                    stocks: {
                        id: data.stock_id,
                        symbol: data.symbol,
                        company: data.company_name,
                        shares: data.amount_of_shares,
                        purchase_price: data.purchase_price
                    }
                }
            })
            console.log('success')
            res.status(200).json(obj);
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Oops! Something went wrong, please try again later.'
            })
        })
}
