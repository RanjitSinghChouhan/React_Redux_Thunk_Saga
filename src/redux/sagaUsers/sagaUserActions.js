import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_SAGA_USER_DATA, FETCH_SAGA_USER_ERROR, FETCH_SAGA_USER_LOADING } from "./sagaUserTypes"


const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
}

function* getUsersSaga() {
    const { response, error } = yield call(getUsers);
    if (response) {
        const data = yield response.json();
        yield put({ type: FETCH_SAGA_USER_DATA, payload: data })
    }
    else {
        yield put({ type: FETCH_SAGA_USER_ERROR, payload: error.message })
    }
}

export default function* rootUsers() {
    yield takeLatest(FETCH_SAGA_USER_LOADING, getUsersSaga)
}