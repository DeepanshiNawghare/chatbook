import React from 'react'
import "./topbar.css"
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill, BsBellFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbarLogo">
                    <span>Chat book</span>
                </div>
                <div className="topbarSearch">
                    <FaSearch className='topSearchIcon' />
                    <input type="search" placeholder='Search for friend, post or video' className='topSearchInput'></input>
                </div>
                <div className="topbarLinks">
                    <div className='topbarPageLinks'>
                        <a href="*">Homepage</a>
                        <a href="*">Timeline</a>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconsItems">
                            <BsFillPersonFill />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconsItems">
                            <BiMessageDetail />
                            <span className="topbarIconBadge ">12</span>
                        </div>
                        <div className="topbarIconsItems">
                            <BsBellFill />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <div className="topbarProfileLink">
                        <img src='./assets/person/1.jpeg' alt='profile' className='profileImg' />
                    </div>
                </div>
            </div>
        </>
    )
}
