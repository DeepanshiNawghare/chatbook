import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { MdOutlineRssFeed, MdChat, MdPeopleAlt, MdWorkOutline, MdSchool } from "react-icons/md"
import { BsPlayCircleFill, BsFillBookmarkFill, BsQuestionCircle } from "react-icons/bs"
import { IoMdCalendar } from "react-icons/io"
import { Users } from '../../dummydata';



export default function Sidebar() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Users);
  }, []);

  const dataRender = data.map((value, index) => {
    return (

      <li className='sidebarFrndList' key={index}>
        <img src={value.profilePicture} alt='friend' className='sidebarFrndImg' />
        <span className='sidebarFrnds'>{value.username}</span>
      </li>

    )
  });

  return (
    <div className='sidebar'>
      <div className='sidebar_cnt'>
        <div className='sidebar_items'>
          <MdOutlineRssFeed />
          <span>Feed</span>
        </div>
        <div className='sidebar_items'>
          <MdChat />
          <span>Chats</span>
        </div>
        <div className='sidebar_items'>
          <BsPlayCircleFill />
          <span>Vedios</span>
        </div>
        <div className='sidebar_items'>
          <MdPeopleAlt />
          <span>Groups</span>
        </div>
        <div className='sidebar_items'>
          <BsFillBookmarkFill />
          <span>Bookmarks</span>
        </div>
        <div className='sidebar_items'>
          <BsQuestionCircle />
          <span>Questions</span>
        </div>
        <div className='sidebar_items'>
          <MdWorkOutline />
          <span>Jobs</span>
        </div>
        <div className='sidebar_items'>
          <IoMdCalendar />
          <span>Events</span>
        </div>
        <div className='sidebar_items'>
          <MdSchool />
          <span>Courses</span>
        </div>
        <button className='sidebar_btn'>Show More</button>
        <hr />
        <ul className='sidebarFrndscnt' >
          {dataRender}
        </ul>
      </div>


    </div>
  )
}
