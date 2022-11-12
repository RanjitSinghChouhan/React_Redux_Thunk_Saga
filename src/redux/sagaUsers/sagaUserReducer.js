import { FETCH_SAGA_USER_DATA, FETCH_SAGA_USER_ERROR, FETCH_SAGA_USER_LOADING } from "./sagaUserTypes"


const initialState = {
    loading: true,
    user: [],
    error: ''
}

const sagaUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SAGA_USER_LOADING: return {
            ...state,
            loading: true
        }
        case FETCH_SAGA_USER_DATA: return {
            loading: false,
            user: action.payload,
            error: ''
        }
        case FETCH_SAGA_USER_ERROR: return {
            loading: false,
            user: [],
            error: action.payload
        }
        default: return state
    }
}

export default sagaUserReducer