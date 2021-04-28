import * as actions from "../actions/authActions";

const initialState = {};

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOG_IN:
            return {
                ...state,
                auth: action.payload
            };
        default:
            return state;
    }
}