import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import socialAPI from '../../api/api'
import { getUsersAC } from '../../store/reducers/userReducer'
import { User } from '../../components'

import './users.css'


export function Users () {
    const dispatch = useDispatch()

    const {users} = useSelector((state) => state.usersPage)
    
    useEffect(() => {
      socialAPI.getUsers()
      .then((res) => dispatch(getUsersAC(res.data)))
    } , [])

    return (
        <div className="users-container">
            <div className="users">
                {
                    users.items?.map((user) => {
                        return <User key = {user.id} user = {user}/>
                    })
                }
            </div>
        </div>
    )
}