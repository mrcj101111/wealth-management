import * as actionTypes from './actions'

const initialState = {
    testData: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_VALUE:
        console.log(state)
            return {
                ...state,
                testData: state.testData + 1,
            }
        case actionTypes.REMOVE_VALUE:
            return {
                ...state,
                testData: state.testData - 1
            }
    }
    return state;
};

export default reducer;