import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
    noOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            noOfIceCream: state.noOfIceCream - 1
        }
        default: return state;
    }
}

export default iceCreamReducer;