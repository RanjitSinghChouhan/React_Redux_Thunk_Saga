import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    noOfCakes: 10
}

const cakeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer