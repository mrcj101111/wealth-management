import {baseUrl} from '../environments/environments';

const axios = require('axios').default;

//Get all stocks

const getStocks = () => axios.get(baseUrl + '/stocks/get-stocks')
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})

export default getStocks;