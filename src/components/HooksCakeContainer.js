import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    // const noOfCakes = useSelector(state => state.noOfCakes)
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of hook Cakes - {noOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer