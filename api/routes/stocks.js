const express = require('express');
const stocksController = require('../controllers/stocks');

const router = express.Router();

router.get('/get-stocks', stocksController.getStocks);

module.exports = router;