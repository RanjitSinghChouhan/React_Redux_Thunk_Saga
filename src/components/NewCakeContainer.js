import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyNewCake } from '../redux/newCake/newCakeActions'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>No of Cakes - {props.noOfNewCakes}</h1>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyNewCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfNewCakes: state.newCake.noOfNewCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyNewCake: (number) => dispatch(buyNewCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)