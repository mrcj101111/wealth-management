import axios from 'axios';
import { baseUrl } from '../environments/environments';

export const GET_STOCKS = 'GET_STOCKS';
export const DELETE_STOCK = 'DELETE_STOCK'

export const getStocks = stocks => ({
    type: GET_STOCKS,
    payload: { stocks }
});

export const deleteStock = id => ({
    type: DELETE_STOCK,
    payload: { id }
})

//Get stocks
export const getStocksFromApi = () => {
    return dispatch => {
        return axios.get(baseUrl + '/stocks/get-stocks')
            .then(res => res.data)
            .then(stocks => {
                dispatch(getStocks(stocks))
            })
            .catch(err => console.log(err))
    }
}

//Delete stock
export const dispatchDeleteStock = (id) => {
    return dispatch => {
        return axios.delete(baseUrl + '/stocks/delete-stock/' + id)
            .then(() => dispatch(deleteStock(id)))
            .catch(err => console.log(err))
    }
}
