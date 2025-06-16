import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import socialAPI from '../../api/api'
import { getUsersAC } from '../../store/reducers/userReducer'
import profile from '../../assets/profile'

import './users.css'

export function Users () {
    const dispatch = useDispatch()

    const {users} = useSelector((state) => state.usersPage)
    
    useEffect(() => {
      socialAPI.getUsers()
      .then((res) => dispatch(getUsersAC(res.data)))
    } , [])

    return (
        <div className="users">
            {
                users.items.map((user) => {
                    return <div className="user">
                        <img src={user.photos.large ? user.photos.large : profile}></img>
                        <h2>@{user.name}</h2>
                    </div>
                })
            }
        </div>
    )
}