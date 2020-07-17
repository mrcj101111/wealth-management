import * as actionTypes from './actions'

const initialState = {
    testData: 1,
    stocks: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_STOCKS:
            return {
                ...state,
                stocks: action.payload.stocks
            }
        case actionTypes.DELETE_STOCK:
            return {
                ...state,
                stocks: state.stocks.filter(stock => stock.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default reducer;