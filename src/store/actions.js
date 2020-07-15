import axios from 'axios';
import {baseUrl} from '../environments/environments';

export const ADD_VALUE = 'ADD_VALUE';
export const REMOVE_VALUE = 'REMOVE_VALUE';

export const GET_STOCKS = 'GET_STOCKS';

export const getStocks = stocks => ({
    type: GET_STOCKS,
    payload: { stocks }
});

//Get stocks
export const getStocksFromApi = () => {
    return dispatch => {
        return axios.get(baseUrl + '/stocks/get-stocks')
            .then(res => res.data)
            .then(stocks => {
                dispatch(getStocks(stocks))
            })
            .catch(err =>
                console.log(err)
            )
    }
}
