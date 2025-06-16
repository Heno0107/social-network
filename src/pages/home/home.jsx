import { NavLink } from 'react-router-dom'

import './home.css'

export function Home () {
    return (
        <>
        <h1>HOME</h1>
        <NavLink to={'/users'}>USERS</NavLink>
        </>
    )
}