import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from "../utlity";

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStart = (state, action) => {
    return updatedObject(state, { error: null, loading: true});
};

const authSuccess = (state, action) => {
    return updatedObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authLogout = (state) => {
    return updatedObject(state, {token: null, userId: null});
};

const authFail = (state, action) => {
    return updatedObject(state, {
       error: action.error,
       loading: false
    });
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);

        default:
            return state;
    }
};

export default reducer;
