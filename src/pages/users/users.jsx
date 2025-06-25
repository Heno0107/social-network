import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsersTC } from '../../store/reducers/userReducer'
import { User } from '../../components'

import './users.css'

export function Users () {
    const dispatch = useDispatch()

    const {users , isFetching} = useSelector((state) => state.usersPage)
    
    useEffect(() => {
        dispatch(getUsersTC())
    } , [])

    return (
        <div className="users-container">
            <div className="users">
                {
                    isFetching 
                    ? <h2 className='loading'>Getting Users ...</h2> 
                    : users.items?.map((user) => {
                        return <User key = {user.id} user = {user}/>
                    })
                }
            </div>
        </div>
    )
}