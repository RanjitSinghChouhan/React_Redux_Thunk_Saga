import { FETCH_USER_DATA, FETCH_USER_ERROR, FETCH_USER_LOADING } from "./userTypes"


const initialState = {
    loading: true,
    user: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_LOADING: return {
            ...state,
            loading: true
        }
        case FETCH_USER_DATA: return {
            loading: false,
            user: action.payload,
            error: ''
        }
        case FETCH_USER_ERROR: return {
            loading: false,
            user: [],
            error: action.payload
        }
        default: return state
    }
}

export default userReducer