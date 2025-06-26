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

    const totalPagesCount = Math.ceil(users.totalCount / 100)
    const pages = []

    for(let i = 1 ; i <= totalPagesCount ; i++) {
        pages.push(i)
    }

    const changePage = (page) => {
        dispatch(getUsersTC(page))
    }

    return (
        <div className="users-container">
            <div className="pages">
                <button>Back</button>
                {
                    pages.map((p) => {
                        return <button key = {p} className='pageBtn' onClick={() => changePage(p)}>{p}</button>
                    })
                }
                <button>Next</button>
            </div>

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