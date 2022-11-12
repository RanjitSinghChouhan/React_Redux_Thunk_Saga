import { BUY_NEW_CAKE } from "./newCakeTypes"

const initialState = {
    noOfNewCakes: 50
}

const newCakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_NEW_CAKE: return {
            noOfNewCakes: state.noOfNewCakes - action.payload
        }
        default: return state
    }
}

export default newCakeReducer;