import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo/social-logo.png'

import './nav.css'

export function Nav () {
    const {userId} = useSelector((state) => state.authPage)

    return (
        <nav>
            <img src={logo} alt="" className="nav-logo" />
            {
            userId
            ? <NavLink className='profileLink' to={`/users/${userId}`}>
                PROFILE
            </NavLink> 
            : <NavLink className="login" to={'/login'}>
                LOGIN
            </NavLink>
            }
        </nav>
    )
}