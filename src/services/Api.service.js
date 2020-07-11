// These are API calls which will not be saved in the store.
import axios from 'axios';
import { baseUrl } from '../environments/environments';

//Add stock
const addStockToApi = (symbol, companyName, amountOfShares, purchasePrice) => {
    return axios.post(baseUrl + '/stocks/add-stock', {
        symbol,
        companyName,
        amountOfShares,
        purchasePrice
    })
        .then(resp => 
            resp.status
        )
        .catch(err => 
             err.response.status
        )
}

export default addStockToApi;

