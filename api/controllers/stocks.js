const express = require('express');
const db = require('../database');
const historyPrices = require('../api/stockHistoryPrices');
const { compose } = require('redux');

// Get Stocks
exports.getStocks = (req, res) => {
    db('stocks')
        .select().then(result => {
            obj = result.map(stocks => {
                return historyPrices(Object.values(stocks)[1]).then(price => {
                    const prevClose = Object.values(price)[3];
                    return {
                        id: stocks.stock_id,
                        symbol: stocks.symbol,
                        company: stocks.company_name,
                        shares: stocks.amount_of_shares,
                        purchase_price: stocks.purchase_price,
                        prevPrice: prevClose,
                    }
                })
            })
            Promise.all(obj).then(data => {
                vaa = data.map(values => values)
                res.status(200).json(vaa)
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Oops! Something went wrong, please try again later.'
            })
        })
}

//Add stock
exports.addStock = (req, res) => {
    db.from('stocks').where('symbol', req.body.symbol).then(stockList => {
        if (stockList.length === 0) {
            db('stocks').insert({
                symbol: req.body.symbol,
                company_name: req.body.companyName,
                amount_of_shares: req.body.amountOfShares,
                purchase_price: req.body.purchasePrice,
            }).then(result => {
                res.status(201).json({
                    message: 'Stock was successfully added'
                })
            })
                .catch(err => {
                    res.status(500).json({
                        message: 'Oops! Something went wrong, please try again later.'
                    })
                })
        } else {
            res.status(409).json({
                message: 'The stock already exists!'
            })
        }
    })
}

// Delete stock
exports.deleteStock = (req, res) => {
    db('stocks')
        .where('stock_id', req.params.id)
        .del().then(result => {
            res.status(201).json({
                message: 'Stock successfully deleted!'
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Oops! Something went wrong, please try again later.'
            })
        })
}