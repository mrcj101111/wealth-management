const express = require('express');
const db = require('../database');
const getLatestPrice = require('../scraper/stockPriceScraper');

// Get Stocks
exports.getStocks = (req, res) => {
    db('stocks')
        .select().then(result => {
            obj = result.map(stocks => {
                return getLatestPrice(stocks.symbol).then(price => {
                    const prevClosePrice = parseFloat(price.replace(/,/g, '')).toFixed(2);
                    const cost = (stocks.amount_of_shares * stocks.purchase_price).toFixed(2);
                    const marketValue = (stocks.amount_of_shares * prevClosePrice).toFixed(2);
                    const gainOrLoss = (marketValue - cost).toFixed(2);
                    const growth = (gainOrLoss / cost * 100).toFixed(2);

                    return {
                        id: stocks.stock_id,
                        symbol: stocks.symbol,
                        company: stocks.company_name,
                        shares: stocks.amount_of_shares,
                        purchasePrice: stocks.purchase_price,
                        prevClosePrice: prevClosePrice,
                        cost: cost,
                        marketValue: marketValue,
                        gainOrLoss: gainOrLoss,
                        growth: growth,
                    }
                }).catch(err => {
                    console.log(err)
                    res.status(500).json({
                        message: 'Oops! Something went wrong, please try again later.'
                    })
                })
            })
            Promise.all(obj).then(data => {
                stocks = data.map(values => values)
                res.status(200).json(stocks)
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
        if (!req.body.symbol || !req.body.companyName || !req.body.amountOfShares || !req.body.purchasePrice) {
            res.status(204).json({
                message: 'Please make sure you have no empty fields.'
            })
        } else if (stockList.length === 0) {
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