import { NavLink } from 'react-router-dom'

import profile from '../../assets/profile/profile.webp'

import './user.css'

export function User (user) {
    return (
        <div className="user">
            <div className="profile-flex">
                <img src={user.user.photos.large ? user.user.photos.large : profile}></img>
            </div>
            <NavLink to={`/users/${user.user.id}`}><h2>@{user.user.name}</h2></NavLink>
            <p>{user.user?.status}</p>
        </div>
    )
}