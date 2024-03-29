// jshint esversion:9
import nameSpaceActionTypes from './namespace.types';

const INITIAL_STATE = {
    namespace: null
};

const nameSpaceReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case nameSpaceActionTypes.SET_NAMESPACE:
            return ({
                ...state,
                namespace: action.payload
            });
        case nameSpaceActionTypes.CLEAR_NAMESPACE:
            return ({
                ...state,
                namespace: null
            });
        default:
            return state;
    }
};

export default nameSpaceReducer;