const axios = require('axios');
const apiKey = require('../alphaVantageApi');

const historyPrices = (symbol) => {
    return new Promise((resolve) => {
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + symbol + '&apikey=' + apiKey).then(historyData => {
            resolve(Object.values(Object.values(historyData.data)[1])[0])
        }).catch(err => console.log(err))
    });
}

module.exports = historyPrices;
