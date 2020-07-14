const axios = require('axios');
const cheerio = require("cheerio");

const getLatestPrice = (symbol) => {
    return new Promise((resolve) => {
        axios.get('https://finance.yahoo.com/quote/' + symbol).then(response => {
            const $ = cheerio.load(response.data)
            const urlElems = $('#quote-header-info > div > div > span')
            resolve((urlElems).text())
        }).catch(err => {
            console.log(err);
        })
    });
}

module.exports = getLatestPrice;
