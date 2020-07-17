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
        default:
            return state;
    }
};

export default reducer;