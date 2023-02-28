import React from 'react'
import "./online.css";

export default function Online({ user }) {
    return (
        <li className='rightbarFrnds'>
            <div className='rightbarProfileCntImg'>
                <img className='rightbarProfileImg' src={user.profilePicture} alt='friends' />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>{user.username}</span>
        </li>
    )
}
