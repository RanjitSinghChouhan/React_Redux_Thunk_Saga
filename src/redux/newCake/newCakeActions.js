import { BUY_NEW_CAKE } from "./newCakeTypes";

export const buyNewCake = (number) => {
    return {
        type: BUY_NEW_CAKE,
        payload: number
    }
}