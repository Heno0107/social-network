import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import logo from '../../assets/logo/social-logo.png'

import './home.css'
import { useSelector } from 'react-redux'

export function Home () {
        return (
            <>
            <h1>SOCIAL NETWORK</h1>
            <h2>WELCOME !</h2>
            <div className='logo-flex'>
                <img src={logo}/>
            </div>
            <NavLink to={'/users'}>See Users</NavLink>
            </>
        )
    
}