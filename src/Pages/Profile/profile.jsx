import React from 'react'
import Feeds from '../../Components/feeds/feeds'
import Rightbar from '../../Components/rightbar.jsx/rightbar'
import Sidebar from '../../Components/sidebar/sidebar'
import Topbar from '../../Components/topbar/topbar'
import "./profile.css"


export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src='./assets/post/3.jpeg' className='profileCoverImg' alt='profile cover' />
                            <img src='./assets/person/1.jpeg' className='profileUserImg' alt='profile' />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Deepanshi Nawghare</h4>
                            <p className="profileInfoDesc">Hello my friends</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feeds />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}
