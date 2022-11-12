import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function ItemContainer(props) {
    return (
        <div>
            <h1>Item {props.item}</h1>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}
const mapStateToProps = (state, ownProp) => {
    const itemState = ownProp.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCream
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProp) => {
    const dispatchItem = ownProp.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchItem
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)