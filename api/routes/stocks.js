const express = require('express');
const stocksController = require('../controllers/stocks');

const router = express.Router();

router.get('/get-stocks', stocksController.getStocks);
router.post('/add-stock', stocksController.addStock);
router.delete('/delete-stock/:id', stocksController.deleteStock);

module.exports = router;