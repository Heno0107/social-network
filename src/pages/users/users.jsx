import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTC } from '../../store/reducers/userReducer'
import { User } from '../../components'

import './users.css'

export function Users () {
    const [start , setStart] = useState(0)
    const [end , setEnd] = useState(10)
 
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

    const nextPage = () => {
        if(end < totalPagesCount - 10){
            setStart(start + 10)
            setEnd(end + 10)
            console.log(start , end)
        } else {
            setStart(start + 10)
            setEnd(totalPagesCount)
        }
    }

    const prevPage = () => {
        if(start != 0) {
            setStart(start -  10)
            setEnd(end - 10)
        }
    }

    return (
        <div className="users-container">
            <div className="pages">
                <button onClick={prevPage}>Back</button>
                {pages.slice(start , end).map((p) => {
                         return <button key = {p} className='pageBtn' onClick={() => changePage(p)}>{p}</button>
                     })
                }
                <button onClick={nextPage}>Next</button>
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