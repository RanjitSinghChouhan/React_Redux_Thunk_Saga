import axios from "axios"
import { FETCH_USER_DATA, FETCH_USER_ERROR, FETCH_USER_LOADING } from "./userTypes"

export const fetchUserLoading = () => {
    return {
        type: FETCH_USER_LOADING
    }
}

const fetchUserData = (user) => {
    return {
        type: FETCH_USER_DATA,
        payload: user
    }
}

const fetchUserError = error => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserLoading)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                dispatch(fetchUserData(users));
            })
            .catch(error => {
                dispatch(fetchUserError(error));
            })
    }
}