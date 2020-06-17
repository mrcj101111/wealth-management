const express = require('express');
const accountsController = require('../controllers/accounts');

const router = express.Router();

router.post('/create-account', accountsController.createAccount);

module.exports = router;