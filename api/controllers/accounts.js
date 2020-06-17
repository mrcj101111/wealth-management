const express = require('express');
const db = require('../database');

// Create account
exports.createAccount = (req, res) => {
    db.from('account').where('account_email', req.body.email).then(accountList => {
        if (accountList.length === 0) {
            db('account').insert({
                account_name: req.body.name,
                account_surname: req.body.surname,
                account_email: req.body.email,
            }).then(result => {
                res.status(201).json(
                    'success'
                )
            })
                .catch(err => {
                    res.status(500).json({
                        message: 'Oops! Something went wrong, please try again later.'
                    })
                })
        } else {
            res.status(409).json({
                message: 'The airline already exists!'
            })
        }
    })
}