import * as actionTypes from './actions'

const initialState = {
    testData: 1,
    stocks: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_VALUE:
            return {
                ...state,
                testData: state.testData + 1,
            }
        case actionTypes.REMOVE_VALUE:
            return {
                ...state,
                testData: state.testData - 1
            }
        case actionTypes.GET_STOCKS:
            return {
                ...state,
                stocks: action.payload.stocks
            }
    }
    return state;
};

export default reducer;