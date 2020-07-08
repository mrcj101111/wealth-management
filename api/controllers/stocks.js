const express = require('express');
const db = require('../database');

// Get Stocks
exports.getStocks = (req, res) => {
    db('stocks')
        .select().then(result => {
            obj = result.map(data => {
                return {
                    id: data.stock_id,
                    symbol: data.symbol,
                    company: data.company_name,
                    shares: data.amount_of_shares,
                    purchase_price: data.purchase_price
                }
            })
            res.status(200).json(obj);
        }).catch(err => {
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