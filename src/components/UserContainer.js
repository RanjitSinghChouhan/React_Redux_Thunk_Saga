import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/users/userActions'

function UserContainer({ userData, fetchUser }) {
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div><h1>React-Thunk</h1>
            {userData.loading ? (<h1>Loading...</h1>) : userData.error ? (<div>{userData.error}</div>) : (
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
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)