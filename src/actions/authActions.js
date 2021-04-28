// import { fetchLoginData } from "../api/api";

export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const login = data => async (dispatch) => {
    try {
        // const userData = await fetchLoginData();
        // console.log(data);
        const userData = {
            name: 'Pritom',
            access_token: 'djhfhvsdfsdghfvsdghvfsdg'
        }

        dispatch({ type: LOG_IN, payload: userData });

    } catch (error) {
        console.log(error);
    }
}