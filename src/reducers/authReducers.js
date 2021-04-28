import * as actions from "../actions/authActions";

const initialState = {};

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOG_IN:
            console.log('action', action);
            console.log('state', state);
            return state;
        default:
            return state;
    }
}