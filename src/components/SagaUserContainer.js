import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FETCH_SAGA_USER_LOADING } from '../redux/sagaUsers/sagaUserTypes'

function SagaUserContainer({ userData, fetchSagaUser }) {
    useEffect(() => {
        fetchSagaUser()
    }, [fetchSagaUser])
    return (
        <div><h1>React-Saga</h1>
            {userData.loading ?
                (<h1>Loading...</h1>) :
                userData.error ?
                    (<div>{userData.error}</div>) :
                    (
                        <div>
                            <h1>User List</h1>
                            <div>
                                {userData && userData.user && userData.user.map(user => (<p key={user.id}>{user.name}</p>))}
                            </div>
                        </div>
                    )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.sagaUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSagaUser: () => dispatch({ type: FETCH_SAGA_USER_LOADING })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SagaUserContainer)