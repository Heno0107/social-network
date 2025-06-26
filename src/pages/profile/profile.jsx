import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import profilePic from '../../assets/profile/profile.webp'
import { getProfileTC } from '../../store/reducers/profileReducer'

import './profile.css'

export function Profile () {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        dispatch(getProfileTC(id))
    } , [])

    const {profile} = useSelector((state) => state.profilePage)

    return (
        <>
        <button onClick={() => navigate(-1)} className='goBackBtn'>Go Back</button>
        <div className="profile">
            <div className="profilePictureFlex">
                <img src={profile.photos?.large ? profile.photos.large : profilePic} alt="" className='profilePic'/>
            </div>

            <h2 className='fullName'>{profile.fullName}</h2>

            <p className='about'>{profile.aboutMe ? profile.aboutMe : 'No info yet'}</p>

            <ul className='contacts'>
                <li>Facebook : {profile.contacts?.facebook ? profile.contacts.facebook : 'no account'}</li>
                <li>Github : {profile.contacts?.github ? profile.contacts.github : 'no account'}</li>
                <li>Instagram : {profile.contacts?.instagram ? profile.contacts.instagram : 'no account'}</li>
                <li>MainLink : {profile.contacts?.mainLink ? profile.contacts.mainLink : 'no account'}</li>
                <li>Twitter : {profile.contacts?.twitter ? profile.contacts.twitter : 'no account'}</li>
                <li>VK : {profile.contacts?.vk ? profile.contacts.vk : 'no account'}</li>
                <li>Website : {profile.contacts?.website ? profile.contacts.website : 'no account'}</li>
                <li>Youtube : {profile.contacts?.youtube ? profile.contacts.youtube : 'no account'}</li>
            </ul>

            <p className='job'>{profile?.lookingForAJob ? `Looking for a job : ${profile.lookingForAJobDescription}` : 'Not looking for a job'}</p>
        </div>
        </>
    )
}