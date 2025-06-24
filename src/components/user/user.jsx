import profile from '../../assets/profile/profile.webp'

import './user.css'

export function User (user) {
    console.log(user.user.status)
    return (
        <div className="user">
            <div className="profile-flex">
                <img src={user.user.photos.large ? user.user.photos.large : profile}></img>
            </div>
            <h2>@{user.user.name}</h2>
            <p>{user.user?.status}</p>
        </div>
    )
}